import { motion } from "framer-motion";
import { Links } from "../data/projects";

export default function ProjectModal({ selected, setSelected }) {
  if (!selected) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60"
      onClick={() => setSelected(null)} // close when clicking backdrop
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full max-w-3xl bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()} // prevent modal close on inside click
      >
        <div className="p-4 sm:p-6">
          <div className="flex flex-col md:flex-row items-start gap-4">
            
            {/* Thumbnail (Image instead of Placeholder) */}
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src={selected.image}
                alt={selected.title}
                className="rounded-lg border border-slate-200 object-cover w-full h-48 sm:h-64 md:h-full"
              />
            </div>

            {/* Details */}
            <div className="flex-1 w-full">
              <h2 className="text-lg sm:text-xl font-semibold">
                {selected.title}
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                {selected.short}
              </p>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap mt-4">
                {selected.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs sm:text-sm px-2 py-1 rounded-full border border-slate-200 text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3">
                {
                selected.title != "MongoDB CRUD API" ? 
                <a
                  href={selected.preview}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center px-4 py-2 border rounded-md border-slate-300 hover:bg-gray-100"
                >
                  Live Preview
                </a> :
                ''
                }
                <a
                  href={`${Links.GitRepo}${selected.repoName}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto text-center px-4 py-2 border rounded-md border-slate-300 hover:bg-gray-100"
                >
                  View Repo
                </a>
                <button
                  onClick={() => setSelected(null)}
                  className="w-full sm:w-auto text-center px-4 py-2 border rounded-md border-slate-300 hover:bg-gray-100"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
