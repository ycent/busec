// Mock Data for BUSEC Redesign 2027
// BUSEC brand colors and images of real student communities

export interface BICEdition {
  id: string;
  name: string;
  theme: string;
  year: string;
  overview: string;
  accentColor: string; // Tailored color theme for each edition
  bgColor: string;
  timeline: { date: string; title: string; desc: string }[];
  winners: { rank: string; company: string; founder: string; prize: string; desc: string; image: string }[];
  judges: { name: string; title: string; company: string; image: string }[];
  speakers: { name: string; title: string; company: string; image: string }[];
  sponsors: string[]; // logo mock text
  gallery: string[];
}

export interface BEWEdition {
  id: string;
  year: string;
  theme: string;
  dates: string;
  recap: string;
  schedule: { time: string; day: string; title: string; speakers: string; location: string }[];
  speakers: { name: string; title: string; company: string; image: string }[];
  sponsors: string[];
  gallery: string[];
}

export interface Executive {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  tenure: string;
}

export interface PastExecutive {
  name: string;
  role: string;
  tenure: string;
  company: string;
}

export interface Resource {
  id: string;
  title: string;
  category: "Startup Guides" | "Business Templates" | "Funding" | "Marketing" | "Finance" | "Leadership" | "Innovation" | "Technology" | "Student Businesses";
  description: string;
  downloadUrl: string;
  fileSize: string;
}

export interface FundingOpportunity {
  id: string;
  title: string;
  organization: string;
  amount: string;
  deadline: string;
  eligibility: string;
  link: string;
}

export interface StudentBusiness {
  id: string;
  name: string;
  founder: string;
  industry: string;
  description: string;
  logo: string;
  socials: { twitter?: string; instagram?: string; linkedin?: string };
}

export interface BuilderStory {
  id: string;
  title: string;
  founder: string;
  company: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

export interface GalleryAlbum {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  images: string[];
}

// -------------------------------------------------------------
// MOCK DATA IMPLEMENTATION
// -------------------------------------------------------------

export const bicEditions: BICEdition[] = [
  {
    id: "bic-7",
    name: "BIC 7.0",
    theme: "Catalyzing Youth Led Solutions for African Markets",
    year: "2027",
    overview: "The 7th edition of the Babcock Innovation Challenge (BIC) focuses on building scalable, hyper-local solutions to address infrastructure, fintech, agritech, and education gaps across emerging African economies.",
    accentColor: "border-busec-yellow text-busec-yellow",
    bgColor: "bg-busec-yellow/10",
    timeline: [
      { date: "June 10, 2027", title: "Applications Open", desc: "Open to all Babcock students with valid ideas." },
      { date: "July 20, 2027", title: "Idea Boot Camp", desc: "Intensive 3-week design thinking and validation sprints." },
      { date: "August 15, 2027", title: "Semifinal Showdown", desc: "Top 20 teams present to selection panels." },
      { date: "September 12, 2027", title: "Grand Finale", desc: "Top 8 pitch live at the Babcock Amphitheater for N5,000,000 in equity-free cash." }
    ],
    winners: [
      {
        rank: "1st Place",
        company: "FarmLink",
        founder: "Tobi Alao (Computer Science, 400L)",
        prize: "₦2,500,000",
        desc: "A mobile-first B2B agricultural logistics platform connecting smallholder farmers in Ogun State directly with bulk urban buyers.",
        image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=800"
      },
      {
        rank: "2nd Place",
        company: "Scriba AI",
        founder: "Habeeb Muhammed (Software Engineering, 300L)",
        prize: "₦1,500,000",
        desc: "Local-language transcription tool for health clinics in remote areas, facilitating patient record keeping in Yoruba, Hausa, and Igbo.",
        image: "https://images.unsplash.com/photo-1581056771107-24a5f45f3c0c?auto=format&fit=crop&q=80&w=800"
      },
      {
        rank: "3rd Place",
        company: "DuesPay",
        founder: "Esther Omosehin (Accounting, 400L)",
        prize: "₦1,000,000",
        desc: "Payment processing portal for student organizations that automates financial tracking, audit trails, and dues collection.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
      }
    ],
    judges: [
      { name: "Kola Aina", title: "General Partner", company: "Ventures Platform", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" },
      { name: "Odunayo Eweniyi", title: "Co-Founder & COO", company: "PiggyVest", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" },
      { name: "Bosun Tijani", title: "Partner", company: "CcHUB", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" }
    ],
    speakers: [
      { name: "Shola Akinlade", title: "Co-Founder & CEO", company: "Paystack", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300" },
      { name: "Iyinoluwa Aboyeji", title: "Founder", company: "Future Africa", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" }
    ],
    sponsors: ["Paystack", "Piggyvest", "Ventures Platform", "Moniepoint", "ALX Nigeria"],
    gallery: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "bic-6",
    name: "BIC 6.0",
    theme: "Pioneering the Post-Digital Economy",
    year: "2026",
    overview: "BIC 6.0 gathered 40+ startup ideas with a strong focus on using artificial intelligence, cloud infrastructure, and logistics optimization to make student life and enterprise management simpler.",
    accentColor: "border-sky-400 text-sky-400",
    bgColor: "bg-sky-400/10",
    timeline: [
      { date: "Completed", title: "Submission Phase", desc: "Received 56 applications." },
      { date: "Completed", title: "Hackathon Stage", desc: "Three days of building prototypes." },
      { date: "Completed", title: "Pitch Night", desc: "Broadcast live at the Main Auditorium." }
    ],
    winners: [
      {
        rank: "Winner",
        company: "TechHub SpeedCode",
        founder: "Babcock Devs Guild",
        prize: "₦2,000,000",
        desc: "A developer typing platform that enables speed programming competitions in real-time.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
      }
    ],
    judges: [
      { name: "Eloho Omame", title: "Partner", company: "TLcom Capital", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300" }
    ],
    speakers: [
      { name: "Mitchell Elegbe", title: "Group MD / CEO", company: "Interswitch", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=300" }
    ],
    sponsors: ["Interswitch", "TLcom Capital", "Wema Bank"],
    gallery: [
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

export const bewEditions: BEWEdition[] = [
  {
    id: "bew-2027",
    year: "2027",
    theme: "The Builders Blueprint: Constructing Multimillion Dollar Ventures",
    dates: "October 12-16, 2027",
    recap: "BEW 2027 is BUSEC's flagship event of the year, bringing together Nigeria's top tech executors, capital allocators, and industry experts for five days of panels, masterclasses, and venture builders workshops.",
    schedule: [
      { time: "09:00 AM", day: "Monday (Day 1)", title: "Opening Address: The State of African Venture", speakers: "BUSEC Executive Council & Dean of School", location: "Main Auditorium" },
      { time: "11:30 AM", day: "Monday (Day 1)", title: "Panel: Scaling From Campus to Nigeria's Main Streets", speakers: "Tobi Alao (FarmLink), Esther Omosehin", location: "School of Computing Hall" },
      { time: "02:00 PM", day: "Tuesday (Day 2)", title: "Masterclass: Supabase & Next.js for Rapid Prototyping", speakers: "Julian Akpesiri (Lead Architect)", location: "Babcock Tech Hub Lab" }
    ],
    speakers: [
      { name: "Gbenga Agboola", title: "CEO", company: "Flutterwave", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=300" },
      { name: "Yanmo Omorogbe", title: "Co-Founder", company: "Bamboo", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=300" }
    ],
    sponsors: ["Flutterwave", "Bamboo", "Piggyvest", "Paystack"],
    gallery: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

export const currentExecutives: Executive[] = [
  {
    name: "Habeeb Muhammed",
    role: "President",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    bio: "Habeeb is a 400L Software Engineering student with experience building and scaling developer utilities. He leads BUSEC's vision of becoming Africa's premium student builder ecosystem.",
    linkedin: "https://linkedin.com/in/habeeb-muhammed",
    tenure: "2026/2027"
  },
  {
    name: "Esther Omosehin",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    bio: "Esther is an Accounting major passionate about venture building and financial technology. She directs BUSEC's external relations, treasury management, and corporate sponsorships.",
    linkedin: "https://linkedin.com/in/esther-omosehin",
    tenure: "2026/2027"
  },
  {
    name: "Julian Akpesiri",
    role: "Technical Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    bio: "Julian is a full-stack engineer and a community builder. He runs BUSEC's digital platforms, student business databases, and leads developer mentorship initiatives.",
    linkedin: "https://linkedin.com/in/julian-akpesiri",
    tenure: "2026/2027"
  }
];

export const pastExecutives: PastExecutive[] = [
  { name: "Chidiebere Ejikonye", role: "President", tenure: "2025/2026", company: "Software Engineer at Moniepoint" },
  { name: "Samuel Oguntoye", role: "Vice President", tenure: "2025/2026", company: "Product Manager at Paystack" },
  { name: "Maro Athora", role: "General Secretary", tenure: "2024/2025", company: "Founder at ArtLink" }
];

export const resourcesList: Resource[] = [
  { id: "res-1", title: "BUSEC Business Plan Template 2027", category: "Business Templates", description: "Comprehensive, structured financial & operational model tailored for Nigerian campus validation.", downloadUrl: "#", fileSize: "1.2 MB" },
  { id: "res-2", title: "Babcock Pitch Deck Blueprint", category: "Startup Guides", description: "Learn how to structure your slide deck to pitch to local and institutional angel investors.", downloadUrl: "#", fileSize: "4.5 MB" },
  { id: "res-3", title: "Supabase Integration Guide for Next.js 15", category: "Technology", description: "A technical walkthrough explaining how to setup database triggers, storage buckets, and auth.", downloadUrl: "#", fileSize: "850 KB" },
  { id: "res-4", title: "Campus Marketing & Go-To-Market Playbook", category: "Marketing", description: "Actionable tactics to grow your consumer base at Babcock University without spending capital.", downloadUrl: "#", fileSize: "2.1 MB" }
];

export const fundingOpportunities: FundingOpportunity[] = [
  { id: "fund-1", title: "Tony Elumelu Foundation Grant", organization: "TEF", amount: "$5,000 Equity-free", deadline: "June 30, 2027", eligibility: "African entrepreneurs under 3 years in business", link: "https://tefconnect.com" },
  { id: "fund-2", title: "Wema Bank Hackaholics 8.0", organization: "Wema ALAT", amount: "₦10,000,000 Pool", deadline: "August 15, 2027", eligibility: "Tech startups building financial or societal inclusion tools", link: "https://hackaholics.wemabank.com" },
  { id: "fund-3", title: "BUSEC Seed Incubation Grant", organization: "BUSEC Alumni Network", amount: "₦500,000", deadline: "September 30, 2027", eligibility: "Registered BUSEC members pitching at the Pitch Sprints", link: "/join" }
];

export const studentBusinesses: StudentBusiness[] = [
  { id: "biz-1", name: "FarmLink", founder: "Tobi Alao", industry: "Agricultural Logistics", description: "Connecting Ogun State crop producers directly to retail shops.", logo: "FL", socials: { twitter: "@farmlinkng", linkedin: "farmlink-nigeria" } },
  { id: "biz-2", name: "DuesPay", founder: "Esther Omosehin", industry: "FinTech / SaaS", description: "Financial operations and audit trails built exclusively for student clubs.", logo: "DP", socials: { twitter: "@duespay" } },
  { id: "biz-3", name: "ArtLink", founder: "Maro Athora", industry: "Creative Marketplace", description: "Connecting student designers, artists, and illustrators to commercial gigs.", logo: "AL", socials: { instagram: "@artlink_hq" } }
];

export const builderStories: BuilderStory[] = [
  {
    id: "story-1",
    title: "Building DuesPay: How We Handled ₦2M in Campus Transactions",
    founder: "Esther Omosehin",
    company: "DuesPay",
    excerpt: "We built a simple payment link dashboard to solve accounting nightmares for the Babcock Tax Club, and ended up processing fees for 15+ student associations.",
    content: "When I was elected as the Treasurer of the Tax Club, I spent two weeks manually cross-referencing bank statements, WhatsApp receipt photos, and physical student matric logs. It was a nightmare. I called Julian, our tech director, and said 'We need to build a payment receipt verifier.' That weekend, we wired a Next.js frontend to a Paystack API endpoint. By Monday, we went live. Over the next month, 4 other departments requested the same tool. That is how DuesPay was born. In under one semester, we handled over 2 million Naira in student transactions with zero chargebacks. We're now preparing to raise a pre-seed round.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    date: "May 25, 2027",
    category: "Fintech"
  },
  {
    id: "story-2",
    title: "From Dorm Room to VC Pitch: The Journey of FarmLink",
    founder: "Tobi Alao",
    company: "FarmLink",
    excerpt: "Winning BIC 7.0 gave us the capital to rent our first pickup truck. Today we transport 2 tons of cassava weekly from Ilishan to Lagos markets.",
    content: "It started when I visited a local farm behind the Babcock campus for a agricultural study project. I saw bags of tomatoes rotting on the ground simply because the farmer couldn't find a driver to haul them to the Ilishan main market. Back in my room in Samuel Akande Hall, I wrote a basic algorithm matching available local transport drivers with farm harvesters. When we presented at the Babcock Innovation Challenge 7.0, the judges saw the real-world value immediately. Winning the 2.5 million Naira cash prize changed everything. We didn't buy fancy equipment; we rented a truck and paid drivers. Today, FarmLink helps 22 smallholder farmers earn a stable livelihood by providing direct links to major buyers.",
    image: "https://images.unsplash.com/photo-1589923188900-85dae04000d9?auto=format&fit=crop&q=80&w=800",
    date: "June 02, 2027",
    category: "AgriTech"
  }
];

export const galleryAlbums: GalleryAlbum[] = [
  {
    id: "album-bic-5",
    title: "Babcock Innovation Challenge 5.0",
    category: "BIC",
    coverImage: "/images/gallery/img-1.jpg",
    images: [
      "/images/gallery/img-1.jpg",
      "/images/gallery/img-2.jpg",
      "/images/gallery/img-3.jpg",
      "/images/gallery/img-4.jpg",
      "/images/gallery/img-5.jpg",
      "/images/gallery/img-6.jpg",
      "/images/gallery/img-7.jpg",
      "/images/gallery/img-8.jpg",
      "/images/gallery/img-9.jpg",
      "/images/gallery/img-10.jpg",
      "/images/gallery/img-11.jpg",
      "/images/gallery/img-12.jpg",
      "/images/gallery/img-13.jpg",
      "/images/gallery/img-14.jpg",
      "/images/gallery/img-15.jpg",
      "/images/gallery/img-16.jpg",
      "/images/gallery/img-17.jpg",
      "/images/gallery/img-18.jpg",
      "/images/gallery/img-19.jpg",
      "/images/gallery/img-20.jpg",
      "/images/gallery/img-21.jpg",
      "/images/gallery/img-22.jpg",
      "/images/gallery/img-23.jpg",
      "/images/gallery/img-24.jpg",
      "/images/gallery/img-25.jpg",
      "/images/gallery/img-26.jpg",
      "/images/gallery/img-27.jpg",
      "/images/gallery/img-28.jpg",
      "/images/gallery/img-29.jpg",
      "/images/gallery/img-30.jpg",
      "/images/gallery/img-31.jpg",
      "/images/gallery/img-32.jpg",
      "/images/gallery/img-33.jpg",
      "/images/gallery/img-34.jpg",
      "/images/gallery/img-35.jpg",
      "/images/gallery/img-36.jpg",
      "/images/gallery/img-37.jpg",
      "/images/gallery/img-38.jpg",
      "/images/gallery/img-39.jpg",
      "/images/gallery/img-40.jpg",
      "/images/gallery/img-41.jpg",
      "/images/gallery/img-42.jpg",
      "/images/gallery/img-43.jpg",
      "/images/gallery/img-44.jpg",
      "/images/gallery/img-45.jpg",
      "/images/gallery/img-46.jpg",
      "/images/gallery/img-47.jpg",
      "/images/gallery/img-48.jpg",
      "/images/gallery/img-49.jpg",
      "/images/gallery/img-50.jpg"
    ]
  },
  {
    id: "album-creative-summit",
    title: "Creative Summit",
    category: "Creative Summit",
    coverImage: "/images/creative-summit/img-1.jpg",
    images: [
      "/images/creative-summit/img-1.jpg",
      "/images/creative-summit/img-2.jpg",
      "/images/creative-summit/img-3.jpg",
      "/images/creative-summit/img-4.jpg",
      "/images/creative-summit/img-5.jpg",
      "/images/creative-summit/img-6.jpg",
      "/images/creative-summit/img-7.jpg",
      "/images/creative-summit/img-8.jpg",
      "/images/creative-summit/img-9.jpg",
      "/images/creative-summit/img-10.jpg",
      "/images/creative-summit/img-11.jpg",
      "/images/creative-summit/img-12.jpg",
      "/images/creative-summit/img-13.jpg",
      "/images/creative-summit/img-14.jpg",
      "/images/creative-summit/img-15.jpg",
      "/images/creative-summit/img-16.jpg",
      "/images/creative-summit/img-17.jpg",
      "/images/creative-summit/img-18.jpg",
      "/images/creative-summit/img-19.jpg",
      "/images/creative-summit/img-20.jpg",
      "/images/creative-summit/img-21.jpg",
      "/images/creative-summit/img-22.jpg",
      "/images/creative-summit/img-23.jpg",
      "/images/creative-summit/img-24.jpg",
      "/images/creative-summit/img-25.jpg",
      "/images/creative-summit/img-26.jpg",
      "/images/creative-summit/img-27.jpg",
      "/images/creative-summit/img-28.jpg",
      "/images/creative-summit/img-29.jpg",
      "/images/creative-summit/img-30.jpg",
      "/images/creative-summit/img-31.jpg",
      "/images/creative-summit/img-32.jpg",
      "/images/creative-summit/img-33.jpg",
      "/images/creative-summit/img-34.jpg",
      "/images/creative-summit/img-35.jpg",
      "/images/creative-summit/img-36.jpg",
      "/images/creative-summit/img-37.jpg",
      "/images/creative-summit/img-38.jpg",
      "/images/creative-summit/img-39.jpg",
      "/images/creative-summit/img-40.jpg",
      "/images/creative-summit/img-41.jpg",
      "/images/creative-summit/img-42.jpg",
      "/images/creative-summit/img-43.jpg",
      "/images/creative-summit/img-44.jpg",
      "/images/creative-summit/img-45.jpg",
      "/images/creative-summit/img-46.jpg",
      "/images/creative-summit/img-47.jpg",
      "/images/creative-summit/img-48.jpg",
      "/images/creative-summit/img-49.jpg",
      "/images/creative-summit/img-50.jpg"
    ]
  },
  {
    id: "album-entrepreneurship-week",
    title: "Entrepreneurship Week",
    category: "Entrepreneurship Week",
    coverImage: "/images/entrepreneurship-week/img-1.jpg",
    images: Array.from({ length: 95 }, (_, i) => `/images/entrepreneurship-week/img-${i + 1}.jpg`)
  },
  {
    id: "album-networking",
    title: "Networking Events",
    category: "Networking Events",
    coverImage: "/images/networking/img-1.jpg",
    images: Array.from({ length: 99 }, (_, i) => `/images/networking/img-${i + 1}.jpg`)
  },
  {
    id: "album-outreach",
    title: "Outreach Activities",
    category: "Outreach Activities",
    coverImage: "/images/outreach/img-1.jpg",
    images: Array.from({ length: 37 }, (_, i) => `/images/outreach/img-${i + 1}.jpg`)
  },
  {
    id: "album-workshops",
    title: "Workshops",
    category: "Workshops",
    coverImage: "/images/workshops/img-1.jpg",
    images: Array.from({ length: 22 }, (_, i) => `/images/workshops/img-${i + 1}.jpg`)
  }
];
