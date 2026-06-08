import type { Metadata } from "next";
import "./globals.css";

const outfit = { variable: "font-outfit" };
const inter = { variable: "font-inter" };

export const metadata: Metadata = {
  title: {
    default: "BUSEC | Babcock University Student Entrepreneurship Club",
    template: "%s | BUSEC",
  },
  description: "Where student entrepreneurs become founders. BUSEC equips students with the skills, network, and opportunities needed to build businesses that matter.",
  keywords: ["BUSEC", "Babcock University", "Entrepreneurship", "Student Founders", "Nigeria Startups", "Babcock Innovation Challenge", "BIC", "BEW"],
  openGraph: {
    title: "BUSEC | Babcock University Student Entrepreneurship Club",
    description: "Where student entrepreneurs become founders. The digital headquarters of student entrepreneurship.",
    url: "https://busec.org",
    siteName: "BUSEC",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BUSEC | Babcock University Student Entrepreneurship Club",
    description: "Where student entrepreneurs become founders. The digital headquarters of student entrepreneurship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800 selection:bg-busec-yellow selection:text-busec-navy">
        {children}
      </body>
    </html>
  );
}
