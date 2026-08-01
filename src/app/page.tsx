"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Users, Briefcase, Calendar, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { studentBusinesses, builderStories } from "@/lib/mockData";

const heroImages = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
  "/images/hero/hero-4.jpg"
];

export default function Home() {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [stories, setStories] = useState<any[]>([]);
  const [showcaseCard, setShowcaseCard] = useState({
    badge: "Live Showcase",
    title: "Babcock Innovation Challenge 7.0",
    desc: "Our top student builders compete live for equity-free seed capital.",
    link: "/bic",
    linkText: "Learn more about BIC",
    image: "/images/gallery/img-6.jpg"
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    const storedShowcase = localStorage.getItem("busec_hero_showcase_v2");
    if (storedShowcase) {
      setShowcaseCard(JSON.parse(storedShowcase));
    }

    const storedStories = localStorage.getItem("busec_builder_stories_v2");
    if (storedStories) {
      const parsed = JSON.parse(storedStories);
      setStories(parsed.slice(0, 2));
      // Auto sync to backend if localStorage differs from the file
      if (JSON.stringify(parsed) !== JSON.stringify(builderStories)) {
        fetch("/api/stories/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ stories: parsed })
        }).catch(err => console.error("Sync error:", err));
      }
    } else {
      setStories(builderStories.slice(0, 2));
      if (builderStories.length > 0) {
        localStorage.setItem("busec_builder_stories_v2", JSON.stringify(builderStories));
      }
    }

    return () => clearInterval(timer);
  }, []);

  const impactCounters = [
    { value: "1,500+", label: "Students Impacted", desc: "Through technical masterclasses, summits and pitch nights" },
    { value: "70+", label: "Businesses Supported", desc: "Student-led micro-enterprises and software ventures" },
    { value: "30+", label: "Ecosystem Events", desc: "Speaker panels, founder retreats and live challenges" },
    { value: "₦10M+", label: "Seed Grants Facilitated", desc: "Equity-free funding pools and corporate credits" }
  ];



  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroImages.map((img, idx) => (
            <div
              key={img}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
                idx === currentBgIndex ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url('${img}')` }}
            />
          ))}
          {/* Light overlay to maintain white/light theme readability */}
          <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 z-10 space-y-10 md:space-y-16 flex flex-col items-center">
          
          {/* Centered Hero Content */}
          <div className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl text-busec-navy tracking-tight leading-[1.05] max-w-3xl mx-auto">
              Where Student Entrepreneurs Become <span className="text-busec-blue">Founders</span>.
            </h1>
            
            <p className="text-base sm:text-lg text-slate-655 leading-relaxed max-w-2xl mx-auto font-light">
              BUSEC equips Babcock University students with the validation, financing, mentor network, and peer support needed to build businesses that solve real problems.
            </p>
            
            <div className="flex justify-center pt-2">
              <Link
                href="/join"
                className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-busec-yellow text-busec-navy border border-busec-blue hover:bg-busec-navy hover:text-white hover:-translate-y-1 transition-all duration-200 text-center shadow-md shadow-busec-yellow/15 flex items-center justify-center space-x-2 active:scale-[0.98] w-full sm:w-auto"
              >
                <span>Join Busec</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Centered Hero Feature Visual Card */}
          <div className="w-full max-w-5xl relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-150 aspect-auto min-h-[280px] sm:aspect-[16/7] md:aspect-[21/9] w-full group bg-slate-50 hover:scale-[1.005] transition-transform duration-300">
              <img
                src={showcaseCard.image}
                alt={showcaseCard.title}
                className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 md:p-10">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold text-busec-yellow uppercase tracking-widest mb-1.5 block">{showcaseCard.badge}</span>
                    <h3 className="font-display font-black text-xl md:text-2xl text-white">{showcaseCard.title}</h3>
                    <p className="text-xs text-slate-300 mt-1 max-w-xl font-light">{showcaseCard.desc}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href={showcaseCard.link} className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/20 text-xs font-bold uppercase tracking-wider transition-all duration-200">
                      <span>{showcaseCard.linkText}</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="bg-slate-50 py-12 md:py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {impactCounters.map((counter, idx) => {
              const icons = [Users, Briefcase, Calendar, Award];
              const Icon = icons[idx];
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-150 card-shadow hover:-translate-y-1 hover:border-busec-blue/30 transition-all duration-300 flex flex-col space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-busec-blue/5 flex items-center justify-center text-busec-blue group-hover:bg-busec-blue group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-display font-black text-2xl sm:text-3xl text-busec-navy tracking-tight block">
                      {counter.value}
                    </span>
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wide block leading-none">
                      {counter.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-normal font-light">
                    {counter.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Meet The Builders Section */}
      <section className="py-16 bg-slate-50 relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16">
            <div className="max-w-2xl space-y-4">
              <h2 className="font-display font-black text-3xl text-busec-navy tracking-tight">
                Meet the Builders
              </h2>
              <p className="text-sm text-slate-655 leading-relaxed font-light">
                Meet the Babcock students building companies, deploying codebase, and solving real agricultural, financial, and digital challenges.
              </p>
            </div>
            <Link
              href="/stories"
              className="mt-6 sm:mt-0 inline-flex items-center space-x-1.5 text-xs font-bold text-busec-blue hover:underline group"
            >
              <span>Read all Builder Stories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.length > 0 ? (
              stories.map((story, idx) => (
                <div
                  key={story.id}
                  className="group rounded-2xl overflow-hidden bg-white border border-slate-155 card-shadow hover:border-slate-200 hover:-translate-y-1 transition-all duration-200 flex flex-col md:flex-row h-full"
                >
                  <div className="md:w-2/5 relative aspect-video md:aspect-auto min-h-[200px] overflow-hidden bg-slate-100">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="absolute inset-0 w-full h-full object-portrait-founder group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex items-center space-x-2 text-[9px] font-bold text-slate-450 uppercase tracking-wider mb-2">
                        <span>{story.category}</span>
                        <span>•</span>
                        <span>{story.date}</span>
                      </div>
                      <h3 className="font-display font-bold text-base text-slate-800 group-hover:text-busec-blue transition-colors duration-200 leading-snug">
                        {story.title}
                      </h3>
                      <p className="text-xs text-slate-505 mt-2 line-clamp-3 leading-relaxed font-light">
                        {story.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-855">{story.founder}</span>
                        <span className="text-[10px] text-slate-500 font-light">Founder, {story.company}</span>
                      </div>
                      <Link
                        href={`/stories#${story.id}`}
                        className="p-2.5 rounded-lg bg-busec-blue/5 hover:bg-busec-yellow hover:text-busec-navy text-busec-blue transition-all duration-200"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12 bg-slate-50 border border-slate-150 rounded-2xl">
                <p className="text-xs text-slate-500 font-light">No builder stories published yet.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl mb-12 space-y-4">
            <h2 className="font-display font-black text-3xl text-busec-navy tracking-tight">
              Upcoming Events
            </h2>
            <p className="text-sm text-slate-655 leading-relaxed font-light">
              Stay updated with BUSEC's upcoming initiatives, sessions, and challenge briefings on campus.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md p-6 rounded-2xl bg-slate-50 border border-slate-150 flex flex-col justify-between card-shadow hover:border-busec-blue/30 hover:-translate-y-1 transition-all duration-200 group">
              <div>
                <div className="flex items-center justify-between text-[10px] text-busec-blue font-bold uppercase tracking-wider mb-4">
                  <span>Incubator Briefing</span>
                  <span>July 05, 2027</span>
                </div>
                <h3 className="font-display font-bold text-base text-slate-800">BIC 7.0 Info Session</h3>
                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed font-light">
                  Details about the application rules, timeline, seed funding pools, and requirements for the upcoming Innovation Challenge.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Main Amphitheater</span>
                <Link href="/join" className="text-xs font-bold text-busec-blue hover:underline">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Logo Wall */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center space-y-6">
          <span className="text-[10px] font-bold text-slate-450 uppercase tracking-widest block">Our Partners</span>
          <div className="flex justify-center items-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-black p-4 hover:scale-[1.02] transition-transform duration-300">
              <img
                src="/images/sponsors/gadget-cartel.png"
                alt="Gadget Cartel"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-busec-blue/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center z-10 space-y-8">
          <h2 className="font-display font-black text-3xl sm:text-4xl text-busec-navy tracking-tight leading-none">
            Ready to Build Your Future?
          </h2>
          <p className="text-sm sm:text-base text-slate-650 max-w-2xl mx-auto font-light leading-relaxed">
            Gain access to our resource database, get invitations to founder retreats, and join the network of student innovators building real companies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/join"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-busec-yellow text-busec-navy border border-busec-blue hover:bg-busec-navy hover:text-white hover:-translate-y-1 transition-all duration-200 shadow-md shadow-busec-yellow/10 active:scale-[0.98]"
            >
              Join BUSEC Now
            </Link>
            <Link
              href="/partners"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-105 hover:-translate-y-1 transition-all duration-200"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
