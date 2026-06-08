"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  const sections = [
    {
      id: "problem",
      title: "The Problem We Solve",
      desc: "Many university students possess ground-breaking business concepts, engineering skills, and creative intelligence but fail to take action because they lack validation, resources, financial seed support, and professional networks."
    },
    {
      id: "beginning",
      title: "The Beginning",
      desc: "BUSEC was founded inside the Babcock campus by student builders who realized that traditional classroom business studies lacked executor dynamics. We started with minor workshop meetups, connecting designers with developers, which eventually formed the club's structure."
    },
    {
      id: "growth",
      title: "Our Growth & Milestones",
      desc: "In under four years, BUSEC transitioned from a campus meetup group to an accredited Student Entrepreneurship Club. We launched the Babcock Innovation Challenge (BIC) and Babcock Entrepreneurship Week (BEW), growing our pool of active sponsors to include Paystack, Flutterwave, and PiggyVest."
    },
    {
      id: "today",
      title: "BUSEC Today",
      desc: "Today, BUSEC is the leading student builder hub in Babcock University. With 1,500+ students impacted, a portfolio of 70+ student startups, and 10 million Naira in opportunities facilitated, we operate as a real venture incubator built by students, for students."
    },
    {
      id: "vision",
      title: "Future Vision",
      desc: "Our vision is to become Africa's most influential and elite student entrepreneurship ecosystem—acting as the central gateway where top tech talent, financial resources, corporate brands, and venture capitalists meet to build companies that matter."
    }
  ];

  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-busec-blue/5 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center z-10 space-y-6">
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-busec-navy tracking-tight leading-none max-w-4xl mx-auto">
            The Hub of Campus Venture Builders.
          </h1>
          <p className="text-base sm:text-lg text-slate-655 max-w-2xl mx-auto font-light leading-relaxed">
            We believe that the best way to learn entrepreneurship is to start building. BUSEC stands as the launchpad for Babcock's next generation of builders.
          </p>
        </div>
      </section>

      {/* Editorial Timeline & Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-16">
            {sections.map((sec, idx) => (
              <div
                key={sec.id}
                className="relative pl-8 md:pl-16 border-l border-slate-200 last:border-transparent pb-8 last:pb-0 group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-busec-blue transition-colors duration-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-busec-blue"></div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-105 pb-2">
                    <h3 className="font-display font-bold text-lg sm:text-xl text-slate-800">
                      {sec.title}
                    </h3>
                    <span className="text-xs font-bold font-mono text-slate-350">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light pt-1">
                    {sec.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values / Pillar Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-black text-3xl text-busec-navy tracking-tight">Our Core Ecosystem Pillars</h2>
            <p className="text-sm text-slate-500 leading-relaxed font-light">
              Every initiative we host, program we organize, and resource we write is built around these fundamental beliefs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-150 card-shadow space-y-4 hover:-translate-y-1 transition-all duration-200">
              <span className="font-display font-black text-4xl text-busec-blue/10 block">01</span>
              <h3 className="font-display font-bold text-lg text-slate-800">Builder Mentality</h3>
              <p className="text-xs text-slate-505 leading-relaxed font-light">
                We value execution over theory. Designing slides is helpful, but deploying prototypes, validating transactions, and serving customers is where learning occurs.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white border border-slate-150 card-shadow space-y-4 hover:-translate-y-1 transition-all duration-200">
              <span className="font-display font-black text-4xl text-busec-blue/10 block">02</span>
              <h3 className="font-display font-bold text-lg text-slate-800">Collaborative Guilds</h3>
              <p className="text-xs text-slate-505 leading-relaxed font-light">
                Founders cannot build in isolation. We connect engineering developers, product UI designers, accounting graduates, and business strategists together into cross-functional teams.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white border border-slate-150 card-shadow space-y-4 hover:-translate-y-1 transition-all duration-200">
              <span className="font-display font-black text-4xl text-busec-blue/10 block">03</span>
              <h3 className="font-display font-bold text-lg text-slate-800">Unrelenting Excellence</h3>
              <p className="text-xs text-slate-505 leading-relaxed font-light">
                Being a student organization is never an excuse for basic layouts, buggy software, or half-hearted pitches. We benchmark our standards against top global incubators.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
