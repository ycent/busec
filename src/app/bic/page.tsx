"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { bicEditions as initialBicEditions, BICEdition } from "@/lib/mockData";

export default function BicPlatform() {
  const [editions, setEditions] = useState<BICEdition[]>([]);
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    const localEditionsJson = localStorage.getItem("busec_bic_editions");
    if (localEditionsJson) {
      setEditions(JSON.parse(localEditionsJson));
    } else {
      localStorage.setItem("busec_bic_editions", JSON.stringify(initialBicEditions));
      setEditions(initialBicEditions);
    }
  }, []);

  const activeEdition = editions[selectedIdx];

  if (!activeEdition) {
    return (
      <div className="min-h-screen bg-white text-slate-800 flex items-center justify-center">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-450">Loading BIC Editions...</span>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-10 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-busec-blue/5 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center z-10 space-y-6">
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-busec-navy tracking-tight leading-none max-w-4xl mx-auto">
            Babcock Innovation Challenge
          </h1>
          <p className="text-base sm:text-lg text-slate-655 max-w-2xl mx-auto font-light leading-relaxed">
            A recurring student founder incubator and pitch showcase facilitating seed equity-free investments.
          </p>
        </div>
      </section>

      {/* Segmented Edition Selector */}
      <section className="py-6 bg-slate-50/95 backdrop-blur-md border-b border-slate-150 sticky top-[76px] z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {editions.map((ed, idx) => (
              <button
                key={ed.id}
                onClick={() => setSelectedIdx(idx)}
                className={`px-6 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-200 flex-shrink-0 cursor-pointer ${
                  selectedIdx === idx
                    ? "bg-busec-yellow text-busec-navy shadow-md shadow-busec-yellow/15 scale-[1.02]"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-busec-blue"
                }`}
              >
                {ed.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Edition Theme & Overview */}
      <section className="pt-10 pb-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-busec-blue uppercase tracking-widest block mb-2">
              Active Edition: {activeEdition.name}
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-busec-navy leading-tight">
              Theme: "{activeEdition.theme}"
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
              {activeEdition.overview}
            </p>
          </div>

          {/* Quick Summary Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-50 border border-slate-155 card-shadow space-y-6">
            <h3 className="font-display font-bold text-lg text-slate-800">Edition Brief</h3>
            <div className="space-y-4 text-xs text-slate-600 font-light">
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-450 font-medium">Cycle:</span>
                <span className="font-semibold text-slate-800">{activeEdition.year} Calendar</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-455 font-medium">Total Winners:</span>
                <span className="font-semibold text-slate-800">{activeEdition.winners.length} Startups</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-slate-455 font-medium">Sponsors:</span>
                <span className="font-semibold text-slate-800">{activeEdition.sponsors.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-3">
            <h2 className="font-display font-black text-3xl text-busec-navy tracking-tight">Incubation Timeline</h2>
            <p className="text-sm text-slate-500 leading-relaxed font-light">
              How student ideas transition from pitch submission folders to live prototypes.
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
            {activeEdition.timeline.map((time, idx) => (
              <div key={idx} className="relative pl-12 flex flex-col space-y-1">
                <div className="absolute left-1.5 top-1.5 w-5.5 h-5.5 rounded-full bg-white border border-busec-blue flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-busec-blue"></div>
                </div>
                <span className="text-[10px] font-bold text-busec-blue uppercase tracking-widest">{time.date}</span>
                <h3 className="font-display font-bold text-base text-slate-800">{time.title}</h3>
                <p className="text-xs text-slate-505 leading-relaxed font-light">{time.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Winners & Prizes Showcase */}
      {activeEdition.winners.length > 0 && (
        <section className="pt-10 pb-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="font-display font-black text-3xl text-busec-navy tracking-tight">Venture Winners & Prizes</h2>
              <p className="text-sm text-slate-555 leading-relaxed font-light">
                Awarded equity-free seed funding and corporate acceleration credits during this edition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeEdition.winners.map((win, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl overflow-hidden bg-slate-55 border border-slate-150 card-shadow hover:border-slate-250 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-video overflow-hidden bg-slate-205">
                      <img
                        src={win.image}
                        alt={win.company}
                        className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded bg-busec-yellow text-busec-navy font-bold text-[10px] uppercase tracking-wider">
                        {win.rank}
                      </div>
                    </div>
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display font-bold text-lg text-slate-800 group-hover:text-busec-blue transition-colors duration-200">
                          {win.company}
                        </h3>
                        <span className="text-xs font-black text-busec-blue">{win.prize}</span>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-450 block uppercase tracking-wider">
                        Founder: {win.founder}
                      </span>
                      <p className="text-xs text-slate-500 leading-relaxed font-light">
                        {win.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Judges Panel */}
      {activeEdition.judges.length > 0 && (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="font-display font-black text-3xl text-busec-navy tracking-tight">Judges Panel</h2>
              <p className="text-sm text-slate-555 leading-relaxed font-light">
                Ecosystem leaders, founders, and capital allocators evaluating the pitch challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeEdition.judges.map((judge, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-4 p-5 rounded-2xl bg-white border border-slate-150 card-shadow hover:border-slate-250 transition-colors duration-200"
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-slate-100">
                    <img
                      src={judge.image}
                      alt={judge.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-800">{judge.name}</h4>
                    <span className="text-[10px] text-busec-blue block font-semibold">{judge.title}</span>
                    <span className="text-[9px] text-slate-450 uppercase tracking-widest">{judge.company}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
