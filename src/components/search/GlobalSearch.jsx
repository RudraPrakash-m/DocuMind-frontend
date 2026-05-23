import { Search } from "lucide-react";

const GlobalSearch = ({ setIsOpen }) => {
  return (
    <div className="flex flex-1 items-center justify-center px-10">
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-12 w-full max-w-3xl items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 px-4 shadow-sm transition hover:border-zinc-700"
      >
        {/* Left */}
        <div className="flex items-center gap-3">
          <Search size={18} className="text-zinc-500" />

          <span className="text-sm text-zinc-500">
            Search documents, ask AI...
          </span>
        </div>

        {/* Shortcut */}
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 text-xs text-zinc-400">
            ⌘
          </div>

          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 text-xs text-zinc-400">
            K
          </div>
        </div>
      </button>
    </div>
  );
};

export default GlobalSearch;
