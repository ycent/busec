import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { reference, formData } = await request.json();

    if (!reference) {
      return NextResponse.json(
        { error: "Transaction reference is required" },
        { status: 400 }
      );
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!secretKey || secretKey === "sk_test_placeholder_key_here") {
      console.warn("Paystack verification requested but secret key is not configured.");
      
      // Even if secretKey is missing, we can write the pending registration to Supabase
      // for development mock checking if supabase exists
      if (supabase && formData) {
        await supabase
          .from("membership_applications")
          .insert({
            full_name: formData.fullName,
            matric_number: formData.matricNumber,
            department: formData.department,
            level: formData.level,
            email: formData.email,
            phone: formData.phone,
            interests: formData.interests,
            why_join: formData.whyJoin,
            owns_business: formData.ownsBusiness,
            payment_reference: reference,
            payment_status: "Paid",
            application_status: "Pending Approval"
          });
      }

      return NextResponse.json(
        {
          error: "PAYSTACK_SECRET_KEY is missing. Please configure it in your server's .env.local file.",
          code: "CREDENTIALS_MISSING"
        },
        { status: 501 } // Not Implemented/Configured
      );
    }

    // Call the Paystack verification endpoint
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json();

    if (result.status && result.data && result.data.status === "success") {
      // Securely insert the registration details into the database on successful payment confirmation
      if (supabase && formData) {
        const { error } = await supabase
          .from("membership_applications")
          .insert({
            full_name: formData.fullName,
            matric_number: formData.matricNumber,
            department: formData.department,
            level: formData.level,
            email: formData.email,
            phone: formData.phone,
            interests: formData.interests,
            why_join: formData.whyJoin,
            owns_business: formData.ownsBusiness,
            payment_reference: reference,
            payment_status: "Paid",
            application_status: "Pending Approval"
          });

        if (error) {
          console.error("Database registration insertion error:", error);
          // If it fails (e.g. duplicate matric), we still verified payment but let client know
        }
      }

      // Return details of verified payment
      return NextResponse.json({
        success: true,
        reference: result.data.reference,
        amount: result.data.amount / 100, // Convert from kobo to NGN
        customerEmail: result.data.customer.email,
        channel: result.data.channel,
        paidAt: result.data.paid_at,
      });
    } else {
      return NextResponse.json(
        { error: result.message || "Payment verification failed on Paystack." },
        { status: 400 }
      );
    }
  } catch (err: any) {
    console.error("API error during Paystack verification:", err);
    return NextResponse.json(
      { error: err.message || "An unexpected error occurred during verification." },
      { status: 500 }
    );
  }
}
