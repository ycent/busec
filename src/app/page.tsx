"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
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
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1600"
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    const storedShowcase = localStorage.getItem("busec_hero_showcase");
    if (storedShowcase) {
      setShowcaseCard(JSON.parse(storedShowcase));
    }

    const storedStories = localStorage.getItem("busec_builder_stories");
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
        localStorage.setItem("busec_builder_stories", JSON.stringify(builderStories));
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

  const flagships = [
    {
      title: "Babcock Innovation Challenge (BIC)",
      desc: "Our premier multi-week incubation program and pitch competition offering equity-free seed funding and professional mentorship.",
      link: "/bic",
      badge: "Flagship Accelerator"
    },
    {
      title: "Entrepreneurship Week (BEW)",
      desc: "An annual gathering featuring keynote addresses, expert panels, fireside chats, and product exhibitions by student founders.",
      link: "/bew",
      badge: "Annual Summit"
    },
    {
      title: "Creative Summit",
      desc: "Connecting tech builders, designers, and copywriters to showcase digital products and collaborate on development guilds.",
      link: "/activities#creative-summit",
      badge: "Innovation Showcase"
    },
    {
      title: "Workshops & Training Sprints",
      desc: "Hands-on sessions on business planning, product design, financial modeling, and engineering tools led by industry experts.",
      link: "/activities#workshops",
      badge: "Skills Sprints"
    }
  ];

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden min-h-[90vh] flex items-center">
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

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 z-10 space-y-16 flex flex-col items-center">
          
          {/* Centered Hero Content */}
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl text-busec-navy tracking-tight leading-[1.05] max-w-3xl mx-auto">
              Where Student Entrepreneurs Become <span className="text-busec-blue">Founders</span>.
            </h1>
            
            <p className="text-base sm:text-lg text-slate-605 leading-relaxed max-w-2xl mx-auto font-light">
              BUSEC equips Babcock University students with the validation, financing, mentor network, and peer support needed to build businesses that solve real problems.
            </p>

            <div className="text-[10px] font-bold text-slate-450 uppercase tracking-widest flex items-center justify-center space-x-3">
              <span>BABCOCK UNIVERSITY</span>
              <span className="text-slate-300">•</span>
              <span>LAUNCHPAD FOR BUILDERS</span>
              <span className="text-slate-300">•</span>
              <span>EST. 2021</span>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/join"
                className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-busec-yellow text-busec-navy border border-busec-blue hover:bg-busec-navy hover:text-white hover:-translate-y-1 transition-all duration-200 text-center shadow-md shadow-busec-yellow/15 flex items-center justify-center space-x-2 active:scale-[0.98]"
              >
                <span>Join Busec</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/activities"
                className="px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-50 hover:bg-slate-100 hover:-translate-y-1 text-slate-700 transition-all duration-200 text-center border border-slate-150 flex items-center justify-center space-x-2 active:scale-[0.98]"
              >
                <span>Explore Activities</span>
              </Link>
            </div>
          </div>

          {/* Centered Hero Feature Visual Card */}
          <div className="w-full max-w-5xl relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-150 aspect-[16/7] md:aspect-[21/9] w-full group bg-slate-50 hover:scale-[1.005] transition-transform duration-300">
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
      <section className="bg-slate-55 py-16 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {impactCounters.map((counter, idx) => (
              <div
                key={idx}
                className="flex flex-col space-y-2 border-l-0 sm:border-l border-slate-200/80 pl-0 sm:pl-6 first:border-0 hover:scale-[1.02] transition-transform duration-200"
              >
                <span className="font-display font-black text-3xl sm:text-4xl text-busec-blue tracking-tight">
                  {counter.value}
                </span>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                  {counter.label}
                </span>
                <span className="text-xs text-slate-500 leading-normal font-light">
                  {counter.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Programs Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-busec-navy tracking-tight">
              Flagship Initiatives & Programs
            </h2>
            <p className="text-sm text-slate-655 leading-relaxed font-light">
              We design and coordinate structured programs to support builders at every phase, from raw concept validation to marketplace operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {flagships.map((program, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-150 card-shadow hover:border-slate-250 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold text-busec-blue uppercase tracking-widest bg-busec-blue/5 px-2.5 py-1 rounded-md">
                      {program.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-850 mt-6 group-hover:text-busec-blue transition-colors duration-200">
                    {program.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-3.5 leading-relaxed font-light">
                    {program.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-105">
                  <Link
                    href={program.link}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-busec-blue hover:underline"
                  >
                    <span>Explore this initiative</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Builders Section */}
      <section className="py-24 bg-slate-50 relative border-t border-slate-100">
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
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
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
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-3xl mb-16 space-y-4">
            <h2 className="font-display font-black text-3xl text-busec-navy tracking-tight">
              Upcoming Sprints & Workshops
            </h2>
            <p className="text-sm text-slate-655 leading-relaxed font-light">
              Open masterclasses, interactive speaker sessions, and pitch practice sprints happening soon at the Babcock campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-150 flex flex-col justify-between h-full card-shadow hover:border-slate-255 hover:-translate-y-1 transition-all duration-200 group">
              <div>
                <div className="flex items-center justify-between text-[10px] text-busec-blue font-bold uppercase tracking-wider mb-4">
                  <span>Workshop</span>
                  <span>June 15, 2027</span>
                </div>
                <h3 className="font-display font-bold text-base text-slate-800">GTM Campus Strategies</h3>
                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed font-light">
                  How to validate a consumer product with zero marketing budget using peer networks and student communities.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">Tech Hub Seminar Room</span>
                <Link href="/join" className="text-xs font-bold text-busec-blue hover:underline">Register</Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-150 flex flex-col justify-between h-full card-shadow hover:border-slate-255 hover:-translate-y-1 transition-all duration-200 group">
              <div>
                <div className="flex items-center justify-between text-[10px] text-busec-blue font-bold uppercase tracking-wider mb-4">
                  <span>Interactive Session</span>
                  <span>June 28, 2027</span>
                </div>
                <h3 className="font-display font-bold text-base text-slate-800">Pitching to Angel Investors</h3>
                <p className="text-xs text-slate-500 mt-2.5 leading-relaxed font-light">
                  Practical guidelines on building your pitch deck, preparing financial forecasts, and handling investor Q&A.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500">School of Computing Hall</span>
                <Link href="/join" className="text-xs font-bold text-busec-blue hover:underline">Register</Link>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-150 flex flex-col justify-between h-full card-shadow hover:border-slate-255 hover:-translate-y-1 transition-all duration-200 group">
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

      {/* Partners & Sponsors Logo Wall */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center space-y-6">
          <span className="text-[10px] font-bold text-slate-450 uppercase tracking-widest block">Our Sponsor</span>
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
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
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
