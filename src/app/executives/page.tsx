"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { executives25_26, executives26_27 } from "@/lib/mockData";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Executives() {
  const [activeTenure, setActiveTenure] = useState<"25'/26'" | "26'/27'">("25'/26'");

  const currentList = activeTenure === "25'/26'" ? executives25_26 : executives26_27;

  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-10 overflow-hidden bg-slate-55 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-busec-blue/5 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center z-10 space-y-6">
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-busec-navy tracking-tight leading-none max-w-4xl mx-auto">
            The Executive Council
          </h1>
          <p className="text-base sm:text-lg text-slate-655 max-w-2xl mx-auto font-light leading-relaxed">
            Meet the student executors driving BUSEC's operations, developer communities, event schedules, and corporate partnerships.
          </p>

          {/* Tenure Select Dropdown */}
          <div className="flex justify-center pt-4">
            <div className="relative w-64">
              <select
                value={activeTenure}
                onChange={(e) => setActiveTenure(e.target.value as any)}
                className="w-full bg-white text-slate-700 text-xs font-bold uppercase tracking-wider px-5 py-3.5 pr-12 rounded-xl border border-slate-200 shadow-sm focus:outline-none focus:border-busec-blue focus:ring-1 focus:ring-busec-blue transition-all cursor-pointer appearance-none"
              >
                <option value="25'/26'">2025/2026 Tenure</option>
                <option value="26'/27'">2026/2027 Tenure</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executives Cards Grid */}
      <section className="pt-10 pb-24 bg-white min-h-[40vh]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {currentList.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentList.map((exec, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl overflow-hidden bg-white border border-slate-150 card-shadow hover:border-slate-250 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-square overflow-hidden bg-slate-100 w-full">
                      <Image
                        src={exec.image}
                        alt={exec.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                        priority={idx < 3}
                        loading={idx >= 3 ? "lazy" : undefined}
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <div>
                        <h3 className="font-display font-bold text-lg text-slate-800 group-hover:text-busec-blue transition-colors duration-200">
                          {exec.name}
                        </h3>
                        <span className="text-xs font-semibold text-busec-blue uppercase tracking-wider block mt-0.5">
                          {exec.role}
                        </span>
                      </div>
                      <p className="text-xs text-slate-550 leading-relaxed font-light line-clamp-4">
                        {exec.bio}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                    <span className="text-[10px] text-slate-450 font-semibold uppercase tracking-wider">
                      Tenure: {exec.tenure}
                    </span>
                    <a
                      href={exec.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-lg bg-busec-blue/5 hover:bg-busec-yellow hover:border hover:border-busec-blue hover:text-busec-navy text-busec-blue transition-all duration-200"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 border border-slate-150 rounded-3xl max-w-xl mx-auto space-y-3">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-slate-700 text-lg">No records for this tenure</h3>
              <p className="text-xs text-slate-500 font-light max-w-sm mx-auto leading-relaxed">
                The executive cohort list for the 2026/2027 tenure is currently being finalized. Please check back later or get in touch for details.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
