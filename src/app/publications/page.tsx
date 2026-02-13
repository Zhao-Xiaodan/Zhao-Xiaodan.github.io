"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import PublicationCard from "@/components/PublicationCard";
import { publications, categories, type PublicationCategory } from "@/data/publications";

export default function PublicationsPage() {
  const [activeCategory, setActiveCategory] = useState<PublicationCategory | "All">("All");

  const filtered =
    activeCategory === "All"
      ? publications
      : publications.filter((p) => p.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <SectionHeading
        title="Publications"
        subtitle={`${publications.length} peer-reviewed publications across biophysics, diagnostics, and materials science`}
      />

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === "All"
              ? "bg-navy text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          All ({publications.length})
        </button>
        {categories.map((cat) => {
          const count = publications.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-navy text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Publication list */}
      <div className="space-y-4">
        {filtered.map((pub) => (
          <PublicationCard key={pub.id} pub={pub} />
        ))}
      </div>
    </div>
  );
}
