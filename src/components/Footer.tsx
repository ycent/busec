import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 text-slate-500">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="/logo.jpg"
                  alt="BUSEC Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black tracking-tight text-xs text-busec-navy group-hover:text-busec-blue transition-colors duration-300 leading-none">
                  Babcock University Students’
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mt-0.5 leading-none">
                  Entrepreneurship Club
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-slate-500 font-light">
              The digital headquarters of student entrepreneurship. We equip builders with the capital, mentorship, and network needed to construct businesses that scale.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 hover:text-busec-blue transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 hover:text-busec-blue transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-100 hover:text-busec-blue transition-colors" aria-label="X (formerly Twitter)">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-busec-navy font-bold text-xs uppercase tracking-wider mb-6">Navigation</h4>
            <ul className="space-y-3.5 text-xs">
              <li>
                <Link href="/about" className="hover:text-busec-blue transition-colors flex items-center group">
                  <span>About Us</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all ml-1 duration-200" />
                </Link>
              </li>
              <li>
                <Link href="/executives" className="hover:text-busec-blue transition-colors flex items-center group">
                  <span>Executives & Council</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all ml-1 duration-200" />
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-busec-blue transition-colors flex items-center group">
                  <span>Photo Gallery</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all ml-1 duration-200" />
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-busec-blue transition-colors flex items-center group">
                  <span>Resources & Toolkit</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all ml-1 duration-200" />
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-busec-blue transition-colors flex items-center group">
                  <span>Builder Stories</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all ml-1 duration-200" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Flagship Activities */}
          <div>
            <h4 className="font-display text-busec-navy font-bold text-xs uppercase tracking-wider mb-6">Flagships</h4>
            <ul className="space-y-3.5 text-xs">
              <li>
                <Link href="/bic" className="hover:text-busec-blue transition-colors flex items-center group">
                  <span>Babcock Innovation Challenge (BIC)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all ml-1 duration-200" />
                </Link>
              </li>
              <li>
                <Link href="/bew" className="hover:text-busec-blue transition-colors flex items-center group">
                  <span>Entrepreneurship Week (BEW)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all ml-1 duration-200" />
                </Link>
              </li>
              <li>
                <Link href="/activities#creative-summit" className="hover:text-busec-blue transition-colors flex items-center group">
                  <span>Creative Summit</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all ml-1 duration-200" />
                </Link>
              </li>
              <li>
                <Link href="/activities#workshops" className="hover:text-busec-blue transition-colors flex items-center group">
                  <span>Workshops & Seminars</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all ml-1 duration-200" />
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-busec-blue transition-colors flex items-center group">
                  <span>Become a Partner / Sponsor</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all ml-1 duration-200" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-display text-busec-navy font-bold text-xs uppercase tracking-wider mb-2">Location & Contact</h4>
            <div className="flex items-start space-x-3 text-xs font-light leading-relaxed">
              <MapPin className="w-4 h-4 text-busec-gold flex-shrink-0 mt-0.5" />
              <span>Babcock University, Ilishan-Remo, Ogun State, Nigeria</span>
            </div>
            <div className="flex items-center space-x-3 text-xs font-light">
              <Mail className="w-4 h-4 text-busec-gold flex-shrink-0" />
              <a href="mailto:info@busec.org" className="hover:text-busec-blue transition-colors">info@busec.org</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-xs">
          <p>© {new Date().getFullYear()} BUSEC. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-800 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-800 transition-colors">Terms of Service</a>
            <Link href="/admin" className="text-slate-400 hover:text-busec-blue transition-colors">Admin Gateway</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
