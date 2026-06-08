"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { galleryAlbums } from "@/lib/mockData";
import { Film, X, ZoomIn } from "lucide-react";

const categories = [
  "All",
  "Entrepreneurship Week",
  "BIC",
  "Creative Summit",
  "Workshops",
  "Networking Events",
  "Outreach Activities",
  "Executive Retreats"
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const allMedia = galleryAlbums.flatMap((album) =>
    album.images.map((img) => ({
      url: img,
      albumTitle: album.title,
      category: album.category
    }))
  );

  const filteredMedia = selectedCategory === "All"
    ? allMedia
    : allMedia.filter((media) => media.category === selectedCategory);

  return (
    <>
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-slate-55 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-busec-blue/5 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 text-center z-10 space-y-6">
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-busec-navy tracking-tight leading-none max-w-4xl mx-auto">
            Capturing the Movement
          </h1>
          <p className="text-base sm:text-lg text-slate-655 max-w-2xl mx-auto font-light leading-relaxed">
            Real event photographs of live pitches, entrepreneurship week discussions, developer boot camps, and ecosystem collaborations.
          </p>
        </div>
      </section>

      {/* Category Selectors & Media Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 space-y-12">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pb-4 border-b border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-busec-yellow text-busec-navy shadow-md shadow-busec-yellow/15 scale-[1.02]"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-busec-blue"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Media Grid */}
          {filteredMedia.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMedia.map((media, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImage(media.url)}
                  className="relative group rounded-2xl overflow-hidden aspect-4/3 border border-slate-150 bg-slate-50 cursor-pointer shadow-sm hover:shadow-lg transition-all duration-350"
                >
                  <img
                    src={media.url}
                    alt={media.albumTitle}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-all duration-500 opacity-95 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col justify-end p-5">
                    <span className="text-[10px] font-bold text-busec-yellow uppercase tracking-widest">
                      {media.category}
                    </span>
                    <h4 className="text-white font-display font-semibold text-sm mt-1">
                      {media.albumTitle}
                    </h4>
                  </div>
                  <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/90 border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-350 text-busec-blue shadow-sm">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-50 border border-slate-150 rounded-3xl">
              <Film className="w-10 h-10 text-slate-400 mx-auto mb-4" />
              <h3 className="font-display font-semibold text-slate-600">No media found in this category</h3>
              <p className="text-xs text-slate-400 mt-1">Check back later for photos from upcoming events.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            onClick={() => setActiveImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <img
              src={activeImage}
              alt="Ecosystem moment enlarged"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
