import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Links } from "../data/projects";

export default function Footer({filtered, setShowProfile}) {
  return (
    <footer className={`mt-10 bg-white py-6 w-full  ${filtered.length < 6 ? 'fixed bottom-0' : '' }`}>
      <div className="max-w-full mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-600">
        
        {/* Left */}
        <p className="text-center sm:text-left">
          © All rights reserved. 2025
        </p>
        
        {/* Middle */}
        <p className="text-center">
          Made with ❤️ by <span onClick={()=> setShowProfile(true)} className="font-bold cursor-pointer">Sanjay</span>
        </p>
        
        {/* Right */}
        <div className="flex gap-4 text-slate-600 text-lg">
          <a
            href={Links.GitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900"
          >
            <FaGithub />
          </a>
          <a
            href={Links.LinkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin />
          </a>
          <a
            href={Links.LeetCode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500"
          >
            <SiLeetcode/>
          </a>
        </div>
      </div>
    </footer>
  );
}
