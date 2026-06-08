"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { bicEditions as initialBic, BICEdition, bewEditions as initialBew, BEWEdition } from "@/lib/mockData";
import { Download, Plus, CheckCircle, XCircle, Database, Key, Copy, Check } from "lucide-react";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState("overview");

  const [applications, setApplications] = useState<any[]>([]);
  const [bicEditions, setBicEditions] = useState<BICEdition[]>([]);
  const [bewEditions, setBewEditions] = useState<BEWEdition[]>([]);

  const [copiedSchema, setCopiedSchema] = useState(false);
  const dbSchemaSql = `
-- BUSEC 2027 PostgreSQL Database Schema

-- 1. Membership Applications
CREATE TABLE membership_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(100) NOT NULL,
    matric_number VARCHAR(15) UNIQUE NOT NULL,
    department VARCHAR(100) NOT NULL,
    level VARCHAR(10) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    interests TEXT,
    why_join TEXT,
    owns_business VARCHAR(10) DEFAULT 'No',
    payment_reference VARCHAR(50) UNIQUE,
    payment_status VARCHAR(20) DEFAULT 'Paid',
    application_status VARCHAR(30) DEFAULT 'Pending Approval',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Events & Registrations
CREATE TABLE events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL,
    date DATE NOT NULL,
    location VARCHAR(100),
    description TEXT
);

CREATE TABLE event_registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_id UUID REFERENCES events(id) ON DELETE CASCADE,
    student_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    matric_number VARCHAR(15) NOT NULL,
    registered_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. BIC Platform (Edition-based)
CREATE TABLE bic_editions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(20) UNIQUE NOT NULL, -- e.g. 'BIC 7.0'
    theme VARCHAR(250) NOT NULL,
    year VARCHAR(10) NOT NULL,
    overview TEXT NOT NULL,
    accent_color VARCHAR(50) DEFAULT 'border-busec-yellow text-busec-yellow',
    bg_color VARCHAR(50) DEFAULT 'bg-busec-yellow/10',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bic_winners (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    edition_id UUID REFERENCES bic_editions(id) ON DELETE CASCADE,
    rank VARCHAR(30) NOT NULL, -- e.g. '1st Place'
    company VARCHAR(100) NOT NULL,
    founder VARCHAR(150) NOT NULL,
    prize VARCHAR(50) NOT NULL,
    description TEXT,
    image_url VARCHAR(255)
);

-- 4. BEW Platform (Edition-based)
CREATE TABLE bew_editions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    year VARCHAR(10) UNIQUE NOT NULL, -- e.g. '2027'
    theme VARCHAR(250) NOT NULL,
    dates VARCHAR(100) NOT NULL,
    recap TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
  `;

  const [bicForm, setBicForm] = useState({
    name: "",
    theme: "",
    year: "",
    overview: ""
  });

  const [bewForm, setBewForm] = useState({
    year: "",
    theme: "",
    dates: "",
    recap: ""
  });

  const [showcaseForm, setShowcaseForm] = useState({
    badge: "Live Showcase",
    title: "Babcock Innovation Challenge 7.0",
    desc: "Our top student builders compete live for equity-free seed capital.",
    link: "/bic",
    linkText: "Learn more about BIC",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1600"
  });

  useEffect(() => {
    const storedApps = localStorage.getItem("busec_membership_applications");
    if (storedApps) {
      setApplications(JSON.parse(storedApps));
    } else {
      const defaultApps = [
        {
          id: "APP-01",
          fullName: "Esther Omosehin",
          matricNumber: "23/0422",
          department: "Accounting",
          level: "400L",
          email: "esther@babcock.edu.ng",
          phone: "08123456789",
          interests: "FinTech, SaaS",
          paymentRef: "PAY-ESTHER89D",
          paymentStatus: "Paid",
          status: "Approved",
          date: "05/20/2027"
        },
        {
          id: "APP-02",
          fullName: "Tobi Alao",
          matricNumber: "23/0115",
          department: "Computer Science",
          level: "400L",
          email: "tobi@babcock.edu.ng",
          phone: "08098765432",
          interests: "Agritech, logistics",
          paymentRef: "PAY-TOBI15A",
          paymentStatus: "Paid",
          status: "Approved",
          date: "05/21/2027"
        }
      ];
      localStorage.setItem("busec_membership_applications", JSON.stringify(defaultApps));
      setApplications(defaultApps);
    }

    const storedBic = localStorage.getItem("busec_bic_editions");
    if (storedBic) {
      setBicEditions(JSON.parse(storedBic));
    } else {
      localStorage.setItem("busec_bic_editions", JSON.stringify(initialBic));
      setBicEditions(initialBic);
    }

    const storedBew = localStorage.getItem("busec_bew_editions");
    if (storedBew) {
      setBewEditions(JSON.parse(storedBew));
    } else {
      localStorage.setItem("busec_bew_editions", JSON.stringify(initialBew));
      setBewEditions(initialBew);
    }

    const storedShowcase = localStorage.getItem("busec_hero_showcase");
    if (storedShowcase) {
      setShowcaseForm(JSON.parse(storedShowcase));
    }
  }, []);

  const handleSaveShowcase = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("busec_hero_showcase", JSON.stringify(showcaseForm));
    alert("Homepage hero showcase card updated! Go to the home page to view the change.");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "busec2027" || password === "admin") {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Invalid admin access key code.");
    }
  };

  const handleAppStatus = (appId: string, newStatus: string) => {
    const updated = applications.map((app) =>
      app.id === appId ? { ...app, status: newStatus } : app
    );
    setApplications(updated);
    localStorage.setItem("busec_membership_applications", JSON.stringify(updated));
  };

  const exportAppsToCSV = () => {
    const headers = ["ID", "Full Name", "Matric Number", "Department", "Level", "Email", "Phone", "Payment Ref", "Payment Status", "Status", "Date"];
    const rows = applications.map(app => [
      app.id,
      app.fullName,
      app.matricNumber,
      app.department,
      app.level,
      app.email,
      app.phone,
      app.paymentRef,
      app.paymentStatus,
      app.status,
      app.date
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(","), ...rows.map(e => e.map(val => `"${val}"`).join(","))].join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `BUSEC_Members_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCreateBic = (e: React.FormEvent) => {
    e.preventDefault();
    if (bicForm.name && bicForm.theme && bicForm.year) {
      const newEdition: BICEdition = {
        id: "bic-" + Date.now(),
        name: bicForm.name,
        theme: bicForm.theme,
        year: bicForm.year,
        overview: bicForm.overview,
        accentColor: "border-busec-yellow text-busec-yellow",
        bgColor: "bg-busec-yellow/10",
        timeline: [
          { date: "Soon", title: "Submissions Phase", desc: "Applications will open." }
        ],
        winners: [],
        judges: [],
        speakers: [],
        sponsors: ["ALX Nigeria", "BUSEC Alumni"],
        gallery: []
      };

      const updated = [newEdition, ...bicEditions];
      setBicEditions(updated);
      localStorage.setItem("busec_bic_editions", JSON.stringify(updated));

      setBicForm({ name: "", theme: "", year: "", overview: "" });
      alert(`${bicForm.name} created! Verify the client platform page to see changes.`);
    }
  };

  const handleCreateBew = (e: React.FormEvent) => {
    e.preventDefault();
    if (bewForm.year && bewForm.theme && bewForm.dates) {
      const newEdition: BEWEdition = {
        id: "bew-" + Date.now(),
        year: bewForm.year,
        theme: bewForm.theme,
        dates: bewForm.dates,
        recap: bewForm.recap,
        schedule: [
          { time: "09:00 AM", day: "Day 1", title: "Orientation Keynote", speakers: "Advisory Board", location: "Main Hall" }
        ],
        speakers: [],
        sponsors: ["Flutterwave"],
        gallery: []
      };

      const updated = [newEdition, ...bewEditions];
      setBewEditions(updated);
      localStorage.setItem("busec_bew_editions", JSON.stringify(updated));

      setBewForm({ year: "", theme: "", dates: "", recap: "" });
      alert(`BEW ${bewForm.year} created! Verify the client platform page to see changes.`);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(dbSchemaSql);
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2000);
  };

  if (!isAuthenticated) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen flex items-center justify-center pt-28 bg-slate-50">
          <div className="w-full max-w-md p-8 rounded-3xl bg-white border border-slate-150 space-y-6 text-center shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-busec-blue/5 border border-busec-blue/10 flex items-center justify-center text-busec-blue mx-auto">
              <Key className="w-6 h-6" />
            </div>
            
            <div className="space-y-2">
              <h2 className="font-display font-black text-xl text-busec-navy tracking-tight">Admin Gateway</h2>
              <p className="text-xs text-slate-500 font-light">Access authorization required. Enter the dashboard passkey.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Admin Passkey</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter access code..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-busec-blue transition-all"
                />
              </div>

              {authError && (
                <div className="text-xs font-semibold text-rose-600 bg-rose-50 p-3 rounded-lg border border-rose-100">
                  {authError}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-4 bg-busec-yellow text-busec-navy font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-busec-navy hover:text-white transition-all shadow-md shadow-busec-yellow/10"
              >
                Unlock Dashboard
              </button>
            </form>
            
            <div className="pt-2 text-[10px] text-slate-450 leading-normal font-light">
              Note: For evaluation purposes, use the passkey <code className="text-busec-blue bg-busec-blue/5 px-1 py-0.5 rounded font-mono font-semibold">admin</code> or <code className="text-busec-blue bg-busec-blue/5 px-1 py-0.5 rounded font-mono font-semibold">busec2027</code>.
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="relative pt-36 pb-20 overflow-hidden bg-slate-55 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-busec-blue/5 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-busec-blue uppercase tracking-widest bg-busec-blue/5 px-3.5 py-1.5 rounded-full">
              Control Center
            </span>
            <h1 className="font-display font-black text-4xl text-busec-navy tracking-tight leading-none">
              BUSEC Admin Portal
            </h1>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-xs font-bold text-rose-600 rounded-xl transition-all"
          >
            Lock Dashboard
          </button>
        </div>
      </section>

      {/* Main Admin Console Panel */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Panel Sidebar tabs */}
          <div className="lg:col-span-3 space-y-1">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === "overview" ? "bg-busec-blue text-white shadow-sm" : "text-slate-655 hover:bg-slate-50 hover:text-busec-blue"
              }`}
            >
              Control Center Overview
            </button>
            <button
              onClick={() => setActiveTab("membership")}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                activeTab === "membership" ? "bg-busec-blue text-white shadow-sm" : "text-slate-655 hover:bg-slate-50 hover:text-busec-blue"
              }`}
            >
              <span>Student Members</span>
              <span className={`px-2 py-0.5 text-[9px] rounded font-mono font-bold ${activeTab === "membership" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-550"}`}>
                {applications.filter(app => app.status === "Pending Approval").length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("bic")}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === "bic" ? "bg-busec-blue text-white shadow-sm" : "text-slate-655 hover:bg-slate-50 hover:text-busec-blue"
              }`}
            >
              Configure BIC Editions
            </button>
            <button
              onClick={() => setActiveTab("bew")}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === "bew" ? "bg-busec-blue text-white shadow-sm" : "text-slate-655 hover:bg-slate-50 hover:text-busec-blue"
              }`}
            >
              Configure BEW Editions
            </button>
            <button
              onClick={() => setActiveTab("showcase")}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                activeTab === "showcase" ? "bg-busec-blue text-white shadow-sm" : "text-slate-655 hover:bg-slate-50 hover:text-busec-blue"
              }`}
            >
              Configure Hero Card
            </button>
            <button
              onClick={() => setActiveTab("schema")}
              className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                activeTab === "schema" ? "bg-busec-blue text-white shadow-sm" : "text-slate-655 hover:bg-slate-50 hover:text-busec-blue"
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>PostgreSQL DB Schema</span>
            </button>
          </div>

          {/* Right Panel Workspace content */}
          <div className="lg:col-span-9 bg-slate-50 border border-slate-150 p-6 md:p-8 rounded-3xl min-h-[500px] card-shadow">
            
            {/* TAB: Overview */}
            {activeTab === "overview" && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-display font-bold text-xl text-slate-850">Ecosystem Overview</h3>
                  <p className="text-xs text-slate-500 font-light mt-1">Real-time statistics of local database models.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-6 rounded-2xl bg-white border border-slate-150 card-shadow space-y-1">
                    <span className="text-[10px] font-bold text-slate-450 uppercase tracking-widest block">Total Applications</span>
                    <span className="font-display font-black text-3xl text-busec-blue block">{applications.length}</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-slate-150 card-shadow space-y-1">
                    <span className="text-[10px] font-bold text-slate-450 uppercase tracking-widest block">BIC Editions</span>
                    <span className="font-display font-black text-3xl text-busec-blue block">{bicEditions.length}</span>
                  </div>
                  <div className="p-6 rounded-2xl bg-white border border-slate-150 card-shadow space-y-1">
                    <span className="text-[10px] font-bold text-slate-450 uppercase tracking-widest block">BEW Editions</span>
                    <span className="font-display font-black text-3xl text-busec-blue block">{bewEditions.length}</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Membership Management */}
            {activeTab === "membership" && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-850">Student Members Registration</h3>
                    <p className="text-xs text-slate-500 font-light mt-1">Audit, approve and export student candidate registers.</p>
                  </div>
                  <button
                    onClick={exportAppsToCSV}
                    className="flex items-center justify-center space-x-1.5 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-100 text-xs font-bold text-busec-blue rounded-xl transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Export CSV Register</span>
                  </button>
                </div>

                <div className="overflow-x-auto border border-slate-150 rounded-2xl bg-white shadow-sm">
                  {applications.length > 0 ? (
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100 border-b border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        <tr>
                          <th className="p-4">Name</th>
                          <th className="p-4">Matric</th>
                          <th className="p-4">Department & Level</th>
                          <th className="p-4">Ref</th>
                          <th className="p-4">Status</th>
                          <th className="p-4 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700 font-light">
                        {applications.map((app) => (
                          <tr key={app.id} className="hover:bg-slate-50/50 transition-colors">
                            <td className="p-4 font-semibold text-slate-850">{app.fullName}</td>
                            <td className="p-4 font-mono text-slate-600">{app.matricNumber}</td>
                            <td className="p-4">
                              <div>{app.department}</div>
                              <div className="text-[10px] text-slate-450">{app.level}</div>
                            </td>
                            <td className="p-4 font-mono text-[10px] text-slate-455">{app.paymentRef}</td>
                            <td className="p-4">
                              <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                                app.status === "Approved" ? "bg-emerald-50 text-emerald-600 border border-emerald-150" :
                                app.status === "Rejected" ? "bg-rose-50 text-rose-600 border border-rose-150" :
                                "bg-amber-50 text-amber-600 border border-amber-150"
                              }`}>
                                {app.status}
                              </span>
                            </td>
                            <td className="p-4 flex items-center justify-center space-x-2">
                              {app.status === "Pending Approval" && (
                                <>
                                  <button
                                    onClick={() => handleAppStatus(app.id, "Approved")}
                                    className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-600 hover:text-white border border-emerald-100 text-emerald-600 transition-colors cursor-pointer"
                                    title="Approve Member"
                                  >
                                    <CheckCircle className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleAppStatus(app.id, "Rejected")}
                                    className="p-1.5 rounded-lg bg-rose-50 hover:bg-rose-600 hover:text-white border border-rose-100 text-rose-600 transition-colors cursor-pointer"
                                    title="Reject Member"
                                  >
                                    <XCircle className="w-4 h-4" />
                                  </button>
                                </>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="text-center py-12 text-slate-450">No applications registered yet.</div>
                  )}
                </div>
              </div>
            )}

            {/* TAB: Configure BIC Editions */}
            {activeTab === "bic" && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-display font-bold text-xl text-slate-850">Create BIC Edition</h3>
                  <p className="text-xs text-slate-500 font-light mt-1">Configure and release a new Babcock Innovation Challenge accelerator cycle.</p>
                </div>

                <form onSubmit={handleCreateBic} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Edition Code</label>
                      <input
                        type="text"
                        required
                        value={bicForm.name}
                        onChange={(e) => setBicForm({ ...bicForm, name: e.target.value })}
                        placeholder="e.g. BIC 8.0"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-450 focus:outline-none focus:border-busec-blue transition-all"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Edition Theme Title</label>
                      <input
                        type="text"
                        required
                        value={bicForm.theme}
                        onChange={(e) => setBicForm({ ...bicForm, theme: e.target.value })}
                        placeholder="e.g. Scaling Local Logistics and Food Channels"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-450 focus:outline-none focus:border-busec-blue transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Calendar Year</label>
                      <input
                        type="text"
                        required
                        value={bicForm.year}
                        onChange={(e) => setBicForm({ ...bicForm, year: e.target.value })}
                        placeholder="e.g. 2028"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-450 focus:outline-none focus:border-busec-blue transition-all"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Overview & Brief Details</label>
                      <textarea
                        rows={3}
                        required
                        value={bicForm.overview}
                        onChange={(e) => setBicForm({ ...bicForm, overview: e.target.value })}
                        placeholder="Provide deep information about targets, participants, and goals..."
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-450 focus:outline-none focus:border-busec-blue transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-busec-yellow text-busec-navy font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center space-x-1.5 hover:bg-busec-navy hover:text-white transition-all shadow-md shadow-busec-yellow/10"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Launch BIC Cycle</span>
                  </button>
                </form>
              </div>
            )}

            {/* TAB: Configure BEW Editions */}
            {activeTab === "bew" && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-display font-bold text-xl text-slate-850">Create BEW Edition</h3>
                  <p className="text-xs text-slate-500 font-light mt-1">Configure and release a new annual Entrepreneurship Week conference.</p>
                </div>

                <form onSubmit={handleCreateBew} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Conference Year</label>
                      <input
                        type="text"
                        required
                        value={bewForm.year}
                        onChange={(e) => setBewForm({ ...bewForm, year: e.target.value })}
                        placeholder="e.g. 2028"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-455 focus:outline-none focus:border-busec-blue transition-all"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Conference Theme Title</label>
                      <input
                        type="text"
                        required
                        value={bewForm.theme}
                        onChange={(e) => setBewForm({ ...bewForm, theme: e.target.value })}
                        placeholder="e.g. Engineering Future-proof Products"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-455 focus:outline-none focus:border-busec-blue transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Conference Dates</label>
                      <input
                        type="text"
                        required
                        value={bewForm.dates}
                        onChange={(e) => setBewForm({ ...bewForm, dates: e.target.value })}
                        placeholder="e.g. October 15-20, 2028"
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-455 focus:outline-none focus:border-busec-blue transition-all"
                      />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Recap / Overview Brief</label>
                      <textarea
                        rows={3}
                        required
                        value={bewForm.recap}
                        onChange={(e) => setBewForm({ ...bewForm, recap: e.target.value })}
                        placeholder="Provide details about dates, locations, panels, and keynote highlights..."
                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-455 focus:outline-none focus:border-busec-blue transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-busec-yellow text-busec-navy font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center space-x-1.5 hover:bg-busec-navy hover:text-white transition-all shadow-md shadow-busec-yellow/10"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Launch BEW Summit</span>
                  </button>
                </form>
              </div>
            )}

            {/* TAB: Showcase Card */}
            {activeTab === "showcase" && (
              <form onSubmit={handleSaveShowcase} className="space-y-6 animate-in fade-in duration-200">
                <div className="border-b border-slate-200 pb-4">
                  <h3 className="font-display font-bold text-xl text-slate-850">Configure Hero Showcase Card</h3>
                  <p className="text-xs text-slate-500 font-light mt-1">Update the featured card overlay text, images, and links displayed in the homepage hero section.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Card Badge</label>
                    <input
                      type="text"
                      value={showcaseForm.badge}
                      onChange={(e) => setShowcaseForm({ ...showcaseForm, badge: e.target.value })}
                      placeholder="e.g. Live Showcase"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-busec-blue"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Card Title</label>
                    <input
                      type="text"
                      value={showcaseForm.title}
                      onChange={(e) => setShowcaseForm({ ...showcaseForm, title: e.target.value })}
                      placeholder="e.g. Babcock Innovation Challenge 7.0"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-busec-blue"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Card Description</label>
                    <textarea
                      value={showcaseForm.desc}
                      onChange={(e) => setShowcaseForm({ ...showcaseForm, desc: e.target.value })}
                      placeholder="Describe the flagship showcase item..."
                      rows={3}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-busec-blue resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">CTA Target Link</label>
                    <input
                      type="text"
                      value={showcaseForm.link}
                      onChange={(e) => setShowcaseForm({ ...showcaseForm, link: e.target.value })}
                      placeholder="e.g. /bic"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-busec-blue"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">CTA Button Text</label>
                    <input
                      type="text"
                      value={showcaseForm.linkText}
                      onChange={(e) => setShowcaseForm({ ...showcaseForm, linkText: e.target.value })}
                      placeholder="e.g. Learn more about BIC"
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-busec-blue"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Image URL</label>
                    <input
                      type="text"
                      value={showcaseForm.image}
                      onChange={(e) => setShowcaseForm({ ...showcaseForm, image: e.target.value })}
                      placeholder="Enter image URL..."
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-busec-blue"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-busec-blue hover:bg-busec-navy text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-busec-blue/15"
                  >
                    Save Showcase Configuration
                  </button>
                </div>
              </form>
            )}

            {/* TAB: PostgreSQL DB Schema */}
            {activeTab === "schema" && (
              <div className="space-y-8 animate-in fade-in duration-200">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-slate-850">PostgreSQL Configuration Setup</h3>
                    <p className="text-xs text-slate-500 font-light mt-1">SQL script representing the core database design schema.</p>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center space-x-1.5 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-xs font-bold text-busec-blue rounded-xl transition-all"
                  >
                    {copiedSchema ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedSchema ? "Copied SQL!" : "Copy SQL Schema"}</span>
                  </button>
                </div>

                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white font-mono text-[10px] text-slate-700 p-5 overflow-y-auto max-h-96 shadow-sm">
                  <pre>{dbSchemaSql}</pre>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
