import Header from "./components/Header";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "./data/projects.jsx";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

export default function ChallengeGallery() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [showProfile , setShowProfile] = useState(false);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const q = query.toLowerCase();
      const tags = p.tags.map((t) => t.toLowerCase());

      // Filter by tag
      const matchesFilter =
        filter === "all" ? true : tags.includes(filter.toLowerCase());

      // Filter by search query
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.short.toLowerCase().includes(q) ||
        tags.some((t) => t.includes(q));

      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  return (
    <div className="min-h-screen bg-blue-100 text-gray-800">
      <Header setShowProfile={setShowProfile} />

      <main className="max-w-[100%] mx-auto px-4 pt-6">
        {/* Search + Filters */}
        <section className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-6">
          {/* Search Input */}
          <div className="flex-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects"
              className="w-full md:w-96 px-3 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 text-sm sm:text-base bg-white"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { key: "all", label: "All" },
              { key: "react", label: "React" },
              { key: "api", label: "API" },
              { key: "ai", label: "AI" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-3 py-1 text-sm rounded-md border ${
                  filter === key
                    ? "bg-white border-blue-300 text-blue-700 font-medium shadow-sm"
                    : "bg-white border-blue-200 text-gray-700 hover:bg-blue-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section aria-live="polite">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-start"
          >
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} setSelected={setSelected} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="mt-6 text-center text-gray-500 text-sm sm:text-base">
              No projects found.
            </div>
          )}
        </section>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal selected={selected} setSelected={setSelected} />
        )}
        {showProfile && (
          <Profile showProfile={showProfile} setShowProfile={setShowProfile} />
        )}
      </AnimatePresence>
      {/* Footer */}
        <Footer filtered={filtered} setShowProfile={setShowProfile}/>
    </div>
  );
}
