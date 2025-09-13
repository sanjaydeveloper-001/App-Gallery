import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ProfileImage from '../assets/Profile.jpg';
import { Links } from "../data/projects";

export default function Profile({ showProfile, setShowProfile }) {
  if (!showProfile) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60"
      onClick={() => setShowProfile(false)}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="w-full max-w-lg bg-white rounded-xl shadow-xl border border-blue-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Section */}
        <div className="p-6 flex flex-col items-center text-center">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-40 h-40 rounded-full border-6 border-blue-300 object-cover"
          />
          <h2 className="mt-4 text-3xl font-bold text-slate-800">
            SANJAY D
          </h2>
          <p className="text-slate-600 mt-1">MERN Developer • B.Tech IT</p>
          <p className="text-slate-500 mt-2 max-w-md">
            Passionate about building interactive web apps, currently completed <strong>30 Apps in 30 Days</strong>.
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-4 mt-2 pb-6">
          <a
            href={Links.GitHub}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-blue-100 hover:bg-gray-100"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={Links.LinkedIn}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-blue-100 hover:bg-gray-100"
          >
            <FaLinkedin size={20} className="text-blue-600" />
          </a>
          <a
            href={Links.LeetCode}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full border border-blue-100 hover:bg-gray-100"
          >
            <SiLeetcode size={22} className="text-orange-500" />
          </a>
        </div>

        {/* Close Button */}
        <div onClick={() => setShowProfile(false)} className="cursor-pointer p-4 border-t hover:bg-gray-100 border-blue-200 flex justify-center">
          Close
        </div>
      </motion.div>
    </motion.div>
  );
}
