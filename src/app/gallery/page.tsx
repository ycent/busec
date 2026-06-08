"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { galleryAlbums, GalleryAlbum } from "@/lib/mockData";
import { Film, X, ZoomIn } from "lucide-react";

const initialCategories = [
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
  const [albums, setAlbums] = useState<GalleryAlbum[]>([]);

  useEffect(() => {
    const storedAlbums = localStorage.getItem("busec_gallery_albums");
    let currentAlbums: GalleryAlbum[] = [];
    if (storedAlbums) {
      currentAlbums = JSON.parse(storedAlbums);
      let modified = false;
      galleryAlbums.forEach(staticAlbum => {
        const exists = currentAlbums.some(a => a.id === staticAlbum.id);
        if (!exists) {
          currentAlbums.push(staticAlbum);
          modified = true;
        }
      });
      if (modified) {
        localStorage.setItem("busec_gallery_albums", JSON.stringify(currentAlbums));
      }
    } else {
      const oldCustom = localStorage.getItem("busec_custom_gallery");
      const customList = oldCustom ? JSON.parse(oldCustom) : [];
      currentAlbums = [...customList, ...galleryAlbums];
      localStorage.setItem("busec_gallery_albums", JSON.stringify(currentAlbums));
    }
    setAlbums(currentAlbums);
  }, []);

  const combinedAlbums = albums;

  // Dynamically compute unique categories based on albums list
  const customCategories = Array.from(new Set(albums.map(album => album.category)));
  const categories = ["All", ...Array.from(new Set([...initialCategories.slice(1), ...customCategories]))];

  const allMedia = albums.flatMap((album) =>
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
      <section className="relative pt-36 pb-10 overflow-hidden bg-slate-55 border-b border-slate-100">
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
      <section className="pt-10 pb-20 bg-white">
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
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 [column-fill:_balance] box-border">
              {filteredMedia.map((media, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImage(media.url)}
                  className="break-inside-avoid relative group rounded-xl overflow-hidden mb-2 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-0.5 bg-slate-900"
                >
                  <img
                    src={media.url}
                    alt={media.albumTitle}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-all duration-500 ease-out opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-[10px] font-bold text-busec-yellow uppercase tracking-widest translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      {media.category}
                    </span>
                    <h4 className="text-white font-display font-semibold text-sm mt-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-[50ms]">
                      {media.albumTitle}
                    </h4>
                  </div>
                  <div className="absolute top-4 right-4 p-2 rounded-xl bg-white/95 backdrop-blur-sm border border-slate-200/50 opacity-0 group-hover:opacity-100 transition-all duration-300 text-busec-navy shadow-md transform scale-90 group-hover:scale-100">
                    <ZoomIn className="w-3.5 h-3.5" />
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
