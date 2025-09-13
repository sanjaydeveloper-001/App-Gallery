export default function Placeholder({ title }) {
  return (
    <div className="flex items-center justify-center w-full h-40 bg-slate-50 rounded-md border border-slate-200">
      <span className="text-slate-400 text-sm">{title}</span>
    </div>
  );
}
