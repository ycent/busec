"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { currentExecutives, pastExecutives } from "@/lib/mockData";

export default function Executives() {
  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-slate-50 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-busec-blue/5 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center z-10 space-y-6">
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-busec-navy tracking-tight leading-none max-w-4xl mx-auto">
            The Executive Council
          </h1>
          <p className="text-base sm:text-lg text-slate-655 max-w-2xl mx-auto font-light leading-relaxed">
            Meet the student executors driving BUSEC's operations, developer communities, event schedules, and corporate partnerships.
          </p>
        </div>
      </section>

      {/* Current Executive Cards Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentExecutives.map((exec, idx) => (
              <div
                key={idx}
                className="group rounded-2xl overflow-hidden bg-white border border-slate-150 card-shadow hover:border-slate-250 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img
                      src={exec.image}
                      alt={exec.name}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
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
                    <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-4">
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
                    className="p-2.5 rounded-lg bg-busec-blue/5 hover:bg-busec-yellow hover:text-busec-navy text-busec-blue transition-all duration-200"
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
        </div>
      </section>

      {/* Leadership Historical Archive Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="font-display font-black text-3xl text-busec-navy tracking-tight">Leadership Archive</h2>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              BUSEC remains strong because of the foundations laid by previous executive teams. We honor our alumni leaders.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-150 card-shadow overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 border-b border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <tr>
                  <th className="p-5">Name</th>
                  <th className="p-5">Role</th>
                  <th className="p-5">Tenure</th>
                  <th className="p-5">Current Affiliation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-655 font-light">
                {pastExecutives.map((past, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 font-semibold text-slate-800">{past.name}</td>
                    <td className="p-5">{past.role}</td>
                    <td className="p-5 font-mono text-xs text-slate-500">{past.tenure}</td>
                    <td className="p-5 text-xs text-slate-550">
                      <span>{past.company}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
