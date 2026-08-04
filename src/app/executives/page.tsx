"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { executives24_25, executives25_26, executives26_27 } from "@/lib/mockData";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Executives() {
  const [activeTenure, setActiveTenure] = useState<"24'/25'" | "25'/26'" | "26'/27'">("26'/27'");

  const currentList = 
    activeTenure === "26'/27'" 
      ? executives26_27 
      : activeTenure === "25'/26'" 
      ? executives25_26 
      : executives24_25;

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
                <option value="26'/27'">2026/2027 Tenure</option>
                <option value="25'/26'">2025/2026 Tenure</option>
                <option value="24'/25'">2024/2025 Tenure</option>
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
                  <div className="p-6 pt-0 border-t border-slate-100 flex flex-col space-y-3 mt-4">
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-[10px] text-slate-450 font-semibold uppercase tracking-wider">
                        Tenure: {exec.tenure}
                      </span>
                      <div className="flex items-center space-x-2">
                        {exec.phone && (
                          <a
                            href={`https://wa.me/${exec.phone.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-600 transition-all duration-200"
                            aria-label="WhatsApp"
                            title={`Chat with ${exec.name}`}
                          >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.417 9.864-9.848.002-2.63-1.018-5.101-2.872-6.957C16.59 1.944 14.116.924 11.493.924c-5.438 0-9.862 4.416-9.866 9.847-.002 1.82.488 3.593 1.42 5.176l-.99 3.616 3.7.969-1.11-.648z" />
                            </svg>
                          </a>
                        )}
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
