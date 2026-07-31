"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Award, Calendar, Users, BookOpen, Briefcase, Zap, Home, Info, Image, FileText, Handshake } from "lucide-react";

const activitiesList = [
  { name: "Babcock Innovation Challenge (BIC)", href: "/bic", desc: "Flagship entrepreneurship competition & accelerator", icon: Award },
  { name: "Babcock Entrepreneurship Week (BEW)", href: "/bew", desc: "Annual gathering of students, founders & leaders", icon: Calendar },
  { name: "Babcock Creative Summit", href: "/activities#creative-summit", desc: "Showcasing student creativity & tech innovation", icon: Zap },
  { name: "Babcock Student Entrepreneurship Conference", href: "/activities#workshops", desc: "Practical skills for business builders", icon: BookOpen },
  { name: "Networking Events", href: "/activities#networking", desc: "Connect with co-founders and industry pros", icon: Users },
  { name: "Outreach Projects", href: "/activities#outreach", desc: "Community-driven entrepreneurship initiatives", icon: Briefcase },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Executives", href: "/executives" },
    { name: "Gallery", href: "/gallery" },
    { name: "Resources", href: "/resources" },
    { name: "Stories", href: "/stories" },
    { name: "Partners", href: "/partners" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-light py-2 md:py-4 shadow-sm"
            : "bg-white/80 backdrop-blur-md py-3 md:py-5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-all duration-300">
                <img
                  src="/logo.jpg"
                  alt="BUSEC Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black tracking-tight text-xs md:text-sm text-busec-navy group-hover:text-busec-blue transition-colors duration-300 leading-none">
                  Babcock University Students’
                </span>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mt-0.5 leading-none">
                  Entrepreneurship Club
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/"
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                  pathname === "/" ? "text-busec-blue" : "text-slate-655 hover:text-busec-blue"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                  pathname === "/about" ? "text-busec-blue" : "text-slate-655 hover:text-busec-blue"
                }`}
              >
                About
              </Link>

              {/* Activities Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 flex items-center space-x-1 ${
                    pathname.startsWith("/activities") || pathname === "/bic" || pathname === "/bew"
                      ? "text-busec-blue"
                      : "text-slate-655 hover:text-busec-blue"
                  }`}
                >
                  <span>Activities</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {dropdownOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-96 rounded-2xl bg-white border border-slate-150 shadow-xl p-4 grid gap-2 grid-cols-1">
                    <div className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2 mb-1">
                      Featured Programs
                    </div>
                    {activitiesList.map((act) => {
                      const Icon = act.icon;
                      return (
                        <Link
                          key={act.name}
                          href={act.href}
                          className="flex items-start space-x-3.5 p-2 rounded-xl hover:bg-slate-50 transition-all duration-200 group"
                        >
                          <div className="flex-shrink-0 mt-0.5 text-slate-400 group-hover:text-busec-blue transition-colors duration-200">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-800 group-hover:text-busec-blue transition-colors duration-200">
                              {act.name}
                            </h4>
                            <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 font-light">
                              {act.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                    <Link
                      href="/activities"
                      className="mt-2 text-center text-xs font-bold text-busec-blue hover:underline block pt-2 border-t border-slate-100"
                    >
                      View All Activities & Events
                    </Link>
                  </div>
                )}
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
                    pathname === link.href ? "text-busec-blue" : "text-slate-655 hover:text-busec-blue"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/join"
                className="ml-4 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-busec-yellow text-busec-navy border border-busec-blue hover:bg-busec-navy hover:text-white transition-all duration-300 shadow-md shadow-busec-yellow/15 flex items-center space-x-1"
              >
                <span>Join BUSEC</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-busec-blue hover:bg-slate-50 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white border-t border-slate-100 flex flex-col p-6 pt-24 space-y-6 overflow-y-auto animate-in slide-in-from-right duration-300">
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3.5 p-3.5 rounded-2xl text-sm font-extrabold transition-all group ${
                pathname === "/" 
                  ? "text-busec-blue bg-busec-blue/5 border-l-4 border-busec-blue pl-4" 
                  : "text-slate-700 hover:bg-slate-50 hover:text-busec-blue border-l-4 border-transparent"
              }`}
            >
              <Home className={`w-4 h-4 transition-colors ${
                pathname === "/" ? "text-busec-blue" : "text-slate-400 group-hover:text-busec-blue"
              }`} />
              <span>Home</span>
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-3.5 p-3.5 rounded-2xl text-sm font-extrabold transition-all group ${
                pathname === "/about" 
                  ? "text-busec-blue bg-busec-blue/5 border-l-4 border-busec-blue pl-4" 
                  : "text-slate-700 hover:bg-slate-50 hover:text-busec-blue border-l-4 border-transparent"
              }`}
            >
              <Info className={`w-4 h-4 transition-colors ${
                pathname === "/about" ? "text-busec-blue" : "text-slate-400 group-hover:text-busec-blue"
              }`} />
              <span>About</span>
            </Link>

            {/* Mobile Activities Header */}
            <div className="p-3 border-y border-slate-100/80 my-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-3.5 px-2">Featured Programs</span>
              <div className="grid grid-cols-1 gap-2">
                {activitiesList.map((act) => {
                  const ActIcon = act.icon;
                  return (
                    <Link
                      key={act.name}
                      href={act.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 p-2.5 rounded-xl transition-all group ${
                        pathname === act.href 
                          ? "text-busec-blue bg-busec-blue/5" 
                          : "text-slate-600 hover:text-busec-blue hover:bg-slate-55"
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg transition-colors ${
                        pathname === act.href ? "bg-busec-blue/10 text-busec-blue" : "bg-slate-105 text-slate-450 group-hover:bg-busec-blue/10 group-hover:text-busec-blue"
                      }`}>
                        <ActIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold leading-none">{act.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {navLinks.slice(2).map((link) => {
              const iconMap: { [key: string]: any } = {
                "Executives": Users,
                "Gallery": Image,
                "Resources": BookOpen,
                "Stories": FileText,
                "Partners": Handshake
              };
              const LinkIcon = iconMap[link.name] || BookOpen;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3.5 p-3.5 rounded-2xl text-sm font-extrabold transition-all group ${
                    pathname === link.href 
                      ? "text-busec-blue bg-busec-blue/5 border-l-4 border-busec-blue pl-4" 
                      : "text-slate-700 hover:bg-slate-50 hover:text-busec-blue border-l-4 border-transparent"
                  }`}
                >
                  <LinkIcon className={`w-4 h-4 transition-colors ${
                    pathname === link.href ? "text-busec-blue" : "text-slate-400 group-hover:text-busec-blue"
                  }`} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="pt-4 pb-8">
            <Link
              href="/join"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 rounded-xl text-center text-sm font-bold uppercase tracking-wider bg-busec-yellow text-busec-navy border border-busec-blue hover:bg-busec-navy hover:text-white transition-all duration-300 block"
            >
              Join BUSEC
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
