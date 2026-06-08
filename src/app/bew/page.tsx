"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { bewEditions as initialBewEditions, BEWEdition } from "@/lib/mockData";
import { Calendar, MapPin } from "lucide-react";

export default function BewPlatform() {
  const [editions, setEditions] = useState<BEWEdition[]>([]);
  const [selectedIdx, setSelectedIdx] = useState(0);

  useEffect(() => {
    const localEditionsJson = localStorage.getItem("busec_bew_editions");
    if (localEditionsJson) {
      setEditions(JSON.parse(localEditionsJson));
    } else {
      localStorage.setItem("busec_bew_editions", JSON.stringify(initialBewEditions));
      setEditions(initialBewEditions);
    }
  }, []);

  const activeEdition = editions[selectedIdx];

  if (!activeEdition) {
    return (
      <div className="min-h-screen bg-white text-slate-800 flex items-center justify-center">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-450">Loading BEW Editions...</span>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-10 overflow-hidden bg-slate-55 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-busec-blue/5 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center z-10 space-y-6">
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-busec-navy tracking-tight leading-none max-w-4xl mx-auto">
            Entrepreneurship Week
          </h1>
          <p className="text-base sm:text-lg text-slate-655 max-w-2xl mx-auto font-light leading-relaxed">
            The largest gathering of developers, founders, financial networks, and creative builders at Babcock University.
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
                BEW {ed.year}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Edition Overview */}
      <section className="pt-10 pb-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-busec-blue uppercase tracking-widest block mb-2">
              Active Conference: BEW {activeEdition.year}
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-busec-navy leading-tight">
              Theme: "{activeEdition.theme}"
            </h2>
            <p className="text-xs sm:text-sm text-slate-505 leading-relaxed font-light">
              {activeEdition.recap}
            </p>
          </div>

          <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-50 border border-slate-150 card-shadow space-y-6">
            <h3 className="font-display font-bold text-lg text-slate-800">Conference Details</h3>
            <div className="space-y-4 text-xs text-slate-600 font-light">
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-455 font-medium">Dates:</span>
                <span className="font-semibold text-slate-800">{activeEdition.dates}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-2">
                <span className="text-slate-455 font-medium">Total Speakers:</span>
                <span className="font-semibold text-slate-800">{activeEdition.speakers.length} keynotes</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-slate-455 font-medium">Key sponsors:</span>
                <span className="font-semibold text-slate-800">{activeEdition.sponsors.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Schedules */}
      {activeEdition.schedule.length > 0 && (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            <div className="text-center space-y-3">
              <h2 className="font-display font-black text-3xl text-busec-navy tracking-tight">Conference Schedule</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Plan your attendance. Masterclasses, panel evaluations, and product showcase agendas.
              </p>
            </div>

            <div className="space-y-6">
              {activeEdition.schedule.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-150 card-shadow flex flex-col md:flex-row md:items-center justify-between gap-6 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2 text-[10px] font-bold text-busec-blue uppercase tracking-widest">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.day}</span>
                      <span>•</span>
                      <span>{item.time}</span>
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-800">{item.title}</h3>
                    <span className="text-xs text-slate-500 block font-light">Speakers: {item.speakers}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-medium">
                    <MapPin className="w-4 h-4 text-busec-blue" />
                    <span>{item.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Keynote Speakers */}
      {activeEdition.speakers.length > 0 && (
        <section className="pt-10 pb-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="font-display font-black text-3xl text-busec-navy tracking-tight">Keynote Speakers</h2>
              <p className="text-sm text-slate-555 leading-relaxed font-light">
                Nigeria's top technology executives, ecosystem leaders, and founders sharing execution frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeEdition.speakers.map((spk, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-4 p-5 rounded-2xl bg-slate-50 border border-slate-150 card-shadow hover:border-slate-250 transition-colors duration-200"
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-slate-100">
                    <img
                      src={spk.image}
                      alt={spk.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-800">{spk.name}</h4>
                    <span className="text-[10px] text-busec-blue block font-semibold">{spk.title}</span>
                    <span className="text-[9px] text-slate-450 uppercase tracking-widest">{spk.company}</span>
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
