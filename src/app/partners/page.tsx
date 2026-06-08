"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Download, ShieldCheck, Send } from "lucide-react";

export default function Partners() {
  const sponsorshipPackages = [
    {
      name: "Platinum Partner",
      amount: "₦2,500,000+",
      features: [
        "Primary brand placement across all BIC 7.0 & BEW 2027 marketing materials",
        "Keynote speaker slot at the Babcock Entrepreneurship Week",
        "Dedicated VIP judge seat at the BIC 7.0 Grand Finale",
        "Direct access to top student engineering and business graduates",
        "Co-branded incubation sprints and developer workshops"
      ],
      color: "border-busec-blue bg-busec-yellow/10",
      badge: "Highest Tier"
    },
    {
      name: "Gold Sponsor",
      amount: "₦1,000,000",
      features: [
        "Secondary logo display on media banners and project platform",
        "Reserved panelist seat at the Entrepreneurship Week",
        "Logo included on all student business directory guides",
        "Access to BUSEC candidate resume database for recruitment",
        "Distribution of corporate merchandise during boot camps"
      ],
      color: "border-slate-300 bg-slate-50",
      badge: "Popular"
    },
    {
      name: "Silver Supporter",
      amount: "₦500,000",
      features: [
        "Logo placement on the BUSEC official partner page",
        "General brand callouts during networking and outreach events",
        "Product/API demo sessions at the Babcock Tech Hub",
        "Digital newsletter brand promotion sent to 1,500+ students"
      ],
      color: "border-amber-500/20 bg-amber-50/20",
      badge: "Standard"
    }
  ];

  const [partnerForm, setPartnerForm] = useState({ org: "", contact: "", email: "", tier: "Platinum Partner", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (partnerForm.org && partnerForm.contact && partnerForm.email) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-10 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-busec-blue/5 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center z-10 space-y-6">
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-busec-navy tracking-tight leading-none max-w-4xl mx-auto">
            Partner with BUSEC
          </h1>
          <p className="text-base sm:text-lg text-slate-655 max-w-2xl mx-auto font-light leading-relaxed">
            Support campus entrepreneurship, recruit elite technical talent, and position your brand at the headquarters of student innovation.
          </p>
        </div>
      </section>

      {/* Partners List / Logos */}
      <section className="pt-10 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-busec-navy tracking-tight">Our Strategic Alliance</h2>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              We collaborate with corporate tech providers, local financial systems, and venture networks to accelerate our projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-150 card-shadow text-center space-y-3 hover:-translate-y-1 transition-all duration-200">
              <h3 className="font-display font-bold text-lg text-slate-800">Sponsors</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Providing financial grants, cash prizes, and capital support for the Babcock Innovation Challenge.
              </p>
              <span className="text-xs font-semibold text-busec-blue block pt-2">Paystack, Piggyvest, Flutterwave</span>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-150 card-shadow text-center space-y-3 hover:-translate-y-1 transition-all duration-200">
              <h3 className="font-display font-bold text-lg text-slate-800">Strategic Partners</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Providing digital credits, hosting sandboxes, workshop speakers, and educational resources.
              </p>
              <span className="text-xs font-semibold text-busec-blue block pt-2">Supabase, ALX Nigeria, TechHub Guild</span>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-150 card-shadow text-center space-y-3 hover:-translate-y-1 transition-all duration-200">
              <h3 className="font-display font-bold text-lg text-slate-800">Alumni Partners</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                Mentoring our student teams, offering internships, and seed incubating high-potential projects.
              </p>
              <span className="text-xs font-semibold text-busec-blue block pt-2">ArtLink, DuesPay Networks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages Tiers */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-16">
          <div className="flex flex-col md:flex-row items-stretch md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <h2 className="font-display font-black text-2xl sm:text-3xl text-busec-navy tracking-tight">Sponsorship Packages</h2>
              <p className="text-sm text-slate-550 leading-relaxed font-light">
                Choose a structured sponsorship blueprint to support our events and validate your brand on campus.
              </p>
            </div>
            <button className="flex items-center space-x-1.5 px-6 py-3 bg-white border border-slate-200 text-xs font-bold text-busec-blue rounded-xl hover:bg-slate-100 hover:-translate-y-0.5 transition-all flex-shrink-0">
              <Download className="w-4 h-4" />
              <span>Download Partnership Brochure</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sponsorshipPackages.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl border ${pkg.color} bg-white card-shadow flex flex-col justify-between h-full hover:-translate-y-1 transition-all duration-200`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded">
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-mono font-black text-slate-350">0{idx + 1}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-800 mt-6">{pkg.name}</h3>
                  <span className="font-display font-black text-2xl text-busec-blue block mt-2">{pkg.amount}</span>
                  
                  <ul className="space-y-3 mt-8 text-xs text-slate-600 leading-normal font-light">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2">
                        <ShieldCheck className="w-4 h-4 text-busec-blue flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner Form */}
      <section className="pt-10 pb-24 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="font-display font-black text-3xl text-busec-navy tracking-tight">Become a Partner</h2>
            <p className="text-sm text-slate-500 leading-relaxed max-w-lg mx-auto font-light">
              Submit your organization details below, and our external relations director will schedule a call to coordinate alignment.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-700 text-center font-semibold text-sm">
              Request received! Thank you, {partnerForm.contact}. We will reach out to your organization ({partnerForm.org}) via {partnerForm.email} shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-slate-50 border border-slate-150 card-shadow space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Organization Name</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.org}
                    onChange={(e) => setPartnerForm({ ...partnerForm, org: e.target.value })}
                    placeholder="e.g. Paystack Inc."
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-450 focus:outline-none focus:border-busec-blue transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Contact Representative</label>
                  <input
                    type="text"
                    required
                    value={partnerForm.contact}
                    onChange={(e) => setPartnerForm({ ...partnerForm, contact: e.target.value })}
                    placeholder="e.g. Kola Aina"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-450 focus:outline-none focus:border-busec-blue transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Corporate Email Address</label>
                  <input
                    type="email"
                    required
                    value={partnerForm.email}
                    onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                    placeholder="e.g. partnerships@paystack.com"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-busec-blue transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Target Tier</label>
                  <select
                    value={partnerForm.tier}
                    onChange={(e) => setPartnerForm({ ...partnerForm, tier: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-busec-blue transition-all"
                  >
                    <option value="Platinum Partner">Platinum Partner (₦2.5M+)</option>
                    <option value="Gold Sponsor">Gold Sponsor (₦1M)</option>
                    <option value="Silver Supporter">Silver Supporter (₦500K)</option>
                    <option value="Strategic Partnership">Strategic Alliance (Credits/Services)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Collaboration Goals</label>
                <textarea
                  rows={4}
                  value={partnerForm.message}
                  onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                  placeholder="Outline how you would like to support BUSEC (e.g. judging, mentorship, seed grants)..."
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-busec-blue transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-busec-yellow text-busec-navy border border-busec-blue font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center space-x-2 hover:bg-busec-navy hover:text-white transition-all shadow-md shadow-busec-yellow/10"
              >
                <span>Submit Partnership Proposal</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
