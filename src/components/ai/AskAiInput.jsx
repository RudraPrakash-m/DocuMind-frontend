import {
  ArrowUp,
  Paperclip,
} from "lucide-react";

const AskAiInput = () => {

  return (
    <div className="border-t border-zinc-800 p-4">

      <div className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3">

        {/* Attachment */}
        <button className="text-zinc-500 transition hover:text-white">

          <Paperclip size={18} />

        </button>

        {/* Input */}
        <input
          type="text"
          placeholder="Ask AI anything about your documents..."
          className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
        />

        {/* Send */}
        <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white transition hover:bg-blue-400">

          <ArrowUp size={18} />

        </button>

      </div>

    </div>
  );
};

export default AskAiInput;