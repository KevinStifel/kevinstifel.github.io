"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiZoomIn, FiX } from "react-icons/fi";
import "./Portfolio.css";

type FilterType = "all" | "moviesapp" | "maximiseapp";

const portfolioItems = [
  {
    id: 1,
    title: "MoviesApp",
    category: "moviesapp",
    type: "video",
    src: "/videos/movies.mp4",
    thumbnail: "/img/app-1.jpg",
    description: "App demo (video)",
  },
  {
    id: 2,
    title: "Maximise",
    category: "maximiseapp",
    type: "image",
    src: "/img/maximise/maximise1.jpg",
    thumbnail: "/img/maximise/maximise1.jpg",
    description: "Flutter app — screenshot 1",
  },
  {
    id: 3,
    title: "Maximise",
    category: "maximiseapp",
    type: "image",
    src: "/img/maximise/maximise2.jpg",
    thumbnail: "/img/maximise/maximise2.jpg",
    description: "Flutter app — screenshot 2",
  },
  {
    id: 4,
    title: "Maximise",
    category: "maximiseapp",
    type: "image",
    src: "/img/maximise/maximise3.jpg",
    thumbnail: "/img/maximise/maximise3.jpg",
    description: "Flutter app — screenshot 3",
  },
  {
    id: 5,
    title: "Maximise",
    category: "maximiseapp",
    type: "image",
    src: "/img/maximise/maximise4.jpg",
    thumbnail: "/img/maximise/maximise4.jpg",
    description: "Flutter app — screenshot 4",
  },
  {
    id: 6,
    title: "Maximise",
    category: "maximiseapp",
    type: "image",
    src: "/img/maximise/maximise5.jpg",
    thumbnail: "/img/maximise/maximise5.jpg",
    description: "Flutter app — screenshot 5",
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "moviesapp", label: "MoviesApp" },
  { id: "maximiseapp", label: "MaximiseApp" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-[var(--surface-color)]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-[var(--heading-color)]">
            Flutter Portfolio
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id as FilterType)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-[var(--accent-color)] text-white"
                  : "bg-[var(--background-color)] text-[var(--default-color)] hover:bg-[var(--accent-color)]/10"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                className="group relative bg-[var(--background-color)] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                layout
                onClick={() => setSelectedItem(item)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.type === "video" ? (
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <FiPlay className="w-8 h-8 text-white" />
                      </div>
                    ) : (
                      <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                        <FiZoomIn className="w-8 h-8 text-white" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-[var(--heading-color)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--default-color)]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <FiX className="w-8 h-8 text-white" />
            </button>

            <div
              className="max-w-5xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === "video" ? (
                <video
                  src={selectedItem.src}
                  className="w-full max-h-[80vh] rounded-lg"
                  controls
                  autoPlay
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
              )}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-white mb-1">
                  {selectedItem.title}
                </h3>
                <p className="text-white/80">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
