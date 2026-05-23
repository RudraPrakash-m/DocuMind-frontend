import { FileText, Search, Sparkles } from "lucide-react";

const SearchModal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  const results = [
    {
      title: "Q4 2025 Investor Memo.pdf",
      tag: "FINANCE",
      description: "...revenue grew 38% YoY driven by enterprise expansion...",
      type: "document",
    },

    {
      title: "Series B Term Sheet.pdf",
      tag: "LEGAL",
      description:
        "...pre-money valuation of $120M with a 1x non-participating...",
      type: "document",
    },

    {
      title: "Product Roadmap H1.pdf",
      tag: "PRODUCT",
      description: "...knowledge graph release scheduled for March...",
      type: "document",
    },

    {
      title: "Ask AI: Summarize all Q4 financials",
      tag: "AI",
      description: "Generate an AI summary across 12 finance documents",
      type: "ai",
    },

    {
      title: "Customer Discovery Notes.pdf",
      tag: "RESEARCH",
      description: "...top objection is integration time...",
      type: "document",
    },
  ];

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 backdrop-blur-sm pt-24"
    >
      {/* Modal */}
      <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl">
        {/* Search Header */}
        <div className="flex items-center border-b border-zinc-800 px-5 py-4">
          <Search size={20} className="mr-4 text-zinc-500" />

          <input
            type="text"
            placeholder="Search across all documents or ask AI..."
            autoFocus
            className="flex-1 bg-transparent text-lg text-white outline-none placeholder:text-zinc-500"
          />

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs text-zinc-400 hover:bg-zinc-800"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[500px] overflow-y-auto p-5">
          <p className="mb-4 text-xs font-semibold tracking-widest text-zinc-500">
            TOP RESULTS
          </p>

          <div className="space-y-2">
            {results.map((item, index) => (
              <div
                key={index}
                className="group flex cursor-pointer items-start gap-4 rounded-2xl px-4 py-4 transition hover:bg-zinc-900"
              >
                {/* Icon */}
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800">
                  {item.type === "ai" ? (
                    <Sparkles size={18} className="text-blue-400" />
                  ) : (
                    <FileText size={18} className="text-zinc-400" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>

                    <span className="rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-[10px] font-medium tracking-wide text-zinc-400">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-zinc-800 px-5 py-4 text-sm text-zinc-500">
          <div className="flex items-center gap-3">
            <span>⌘ K to open</span>

            <span>↑↓ to navigate</span>

            <span>↵ to select</span>
          </div>

          <p>Powered by DocuMind AI</p>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
