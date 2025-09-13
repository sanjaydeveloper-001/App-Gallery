import profileImg from '../assets/Profile.jpg';

export default function Header({ setShowProfile }) {
  return (
    <header className="w-full bg-white shadow-sm px-6 py-4 flex flex-col sm:flex-row items-center justify-between">
      {/* Title + Subtitle */}
      <div className="text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
          Vanilla to Vision <span className="text-blue-600">30 Apps</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-500 mt-1">
          Strengthening frontend skills through{" "}
          <span className="font-medium text-slate-700">daily app builds</span>.
        </p>
      </div>

      {/* Profile Button */}
      <div className="mt-3 sm:mt-0">
        <button
          onClick={() => setShowProfile(true)}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-slate-300 rounded-md shadow-sm hover:bg-slate-50 transition cursor-pointer"
        >
          <img src={profileImg} className="text-slate-600 rounded-full h-8 w-8" size={18} />
          <span>About Me</span>
        </button>
      </div>
    </header>
  );
}
