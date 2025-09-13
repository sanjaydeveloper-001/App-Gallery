import { motion } from "framer-motion";

export default function ProjectCard({ project, setSelected }) {
  return (
    <motion.article
      layout="position"
      onClick={() => setSelected(project)}
      whileHover={{ translateY: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="cursor-pointer bg-gray-50 rounded-lg border border-blue-200 p-3 sm:p-4 
                 w-full sm:w-[320px] md:w-[360px] max-w-full shadow-sm shadow-gray-300 hover:shadow-gray-200"
    >
      {/* Thumbnail */}
      <div className="mb-3 h-40">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full rounded-md object-cover border border-slate-200 shadow-md shadow-gray-300"
        />
      </div>

      {/* Title + Description */}
      <h3 className="text-base sm:text-lg font-medium">{project.title}</h3>
      <p className="text-xs sm:text-sm text-slate-500 mt-1">{project.short}</p>

      {/* Footer */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-full border border-blue-200 text-slate-600"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
