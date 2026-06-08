"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function ActivitiesPage() {
  const activities = [
    {
      id: "creative-summit",
      title: "Creative Summit",
      desc: "Our annual design and technical execution summit. We bring together student designers, engineers, copywriters, and marketers to showcase innovation and collaborate on digital product guilds."
    },
    {
      id: "workshops",
      title: "Workshops & Technical Training Sprints",
      desc: "Bi-weekly practical labs teaching business models, market validation, UI/UX prototyping, Postgres databases, API engineering, and search optimization."
    },
    {
      id: "networking",
      title: "Networking Meetups & Founder Mixers",
      desc: "Fireside discussions and mixers designed to match technical students looking for co-founders with business students. Meet advisors and mentors from the local tech hubs."
    },
    {
      id: "outreach",
      title: "Outreach & Community Projects",
      desc: "Social impact challenges. BUSEC students collaborate to design digital booking platforms, agritech routing, and local tax processing platforms for public clinics and markets in Ogun State."
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-10 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-busec-blue/5 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center z-10 space-y-6">
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-busec-navy tracking-tight leading-none max-w-4xl mx-auto">
            Programs, Sprints & Events
          </h1>
          <p className="text-base sm:text-lg text-slate-655 max-w-2xl mx-auto font-light leading-relaxed">
            From technical design challenges to community outreach accelerators, BUSEC designs and runs year-round entrepreneurship programs.
          </p>
        </div>
      </section>

      {/* Core Activities List */}
      <section className="pt-10 pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          {activities.map((act, idx) => (
            <div
              key={act.id}
              id={act.id}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-155 hover:border-slate-200 hover:-translate-y-1 transition-all duration-200 flex flex-col md:flex-row gap-6 scroll-mt-28 card-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-busec-blue/5 border border-busec-blue/10 flex items-center justify-center text-xs font-black text-busec-blue font-mono flex-shrink-0">
                0{idx + 1}
              </div>
              <div className="space-y-4 flex-1">
                <h3 className="font-display font-bold text-2xl text-slate-800">{act.title}</h3>
                <p className="text-xs sm:text-sm text-slate-505 leading-relaxed font-light">{act.desc}</p>
                <div className="pt-2">
                  <Link
                    href="/join"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-busec-blue hover:underline"
                  >
                    <span>Get invitations to this activity</span>
                    <Calendar className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick redirect links for flagships */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center space-y-8">
          <h2 className="font-display font-black text-3xl text-busec-navy tracking-tight">Looking for our Flagship Platforms?</h2>
          <p className="text-sm text-slate-550 max-w-lg mx-auto leading-relaxed font-light">
            Our multi-week incubation contest (BIC) and annual entrepreneurship week (BEW) are hosted on custom, edition-based portals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/bic"
              className="px-8 py-4 rounded-xl text-xs font-bold bg-busec-yellow text-busec-navy border border-busec-blue hover:bg-busec-navy hover:text-white transition-all duration-300 shadow-md shadow-busec-yellow/10 hover:-translate-y-0.5"
            >
              Enter Babcock Innovation Challenge (BIC)
            </Link>
            <Link
              href="/bew"
              className="px-8 py-4 rounded-xl text-xs font-bold bg-white border border-slate-200 text-busec-blue hover:bg-slate-100 transition-all duration-300 hover:-translate-y-0.5"
            >
              Enter Entrepreneurship Week (BEW)
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
