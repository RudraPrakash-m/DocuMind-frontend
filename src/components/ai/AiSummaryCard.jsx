import { BrainCircuit } from "lucide-react";

const AiSummaryCard = () => {

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-5">

      <div className="mb-5 flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">

          <BrainCircuit size={20} />

        </div>

        <div>

          <h2 className="text-lg font-semibold text-white">
            AI Summary
          </h2>

          <p className="text-xs text-zinc-500">
            Workspace insights
          </p>

        </div>

      </div>

      <p className="text-sm leading-relaxed text-zinc-400">
        Finance documents indicate strong growth in
        enterprise adoption while engineering reports
        highlight scaling concerns around infrastructure.
      </p>

    </div>
  );
};

export default AiSummaryCard;