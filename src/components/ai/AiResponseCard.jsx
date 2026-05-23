import { Sparkles } from "lucide-react";

const AiResponseCard = ({ item }) => {

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">

      {/* Question */}
      <div className="mb-4 flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">

          <Sparkles size={18} />

        </div>

        <div>

          <p className="text-xs uppercase tracking-wide text-zinc-500">
            AI Question
          </p>

          <h2 className="text-sm font-medium text-white">
            {item.question}
          </h2>

        </div>

      </div>

      {/* Response */}
      <p className="text-sm leading-relaxed text-zinc-300">
        {item.response}
      </p>

    </div>
  );
};

export default AiResponseCard;