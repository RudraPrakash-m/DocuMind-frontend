import AskAiInput from "./AskAiInput";
import AiLoadingState from "./AiLoadingState";
import AiResponseCard from "./AiResponseCard";

const AiAssistantPanel = () => {

  const responses = [
    {
      id: 1,
      type: "summary",
      question:
        "Summarize all finance documents",

      response:
        "Revenue increased 38% YoY driven by enterprise expansion and new SaaS partnerships. Burn rate decreased by 12% due to infrastructure optimization.",
    },

    {
      id: 2,
      type: "question",
      question:
        "What are the biggest risks mentioned?",

      response:
        "The documents highlight customer churn risk, rising cloud infrastructure costs, and delayed enterprise onboarding as key concerns.",
    },
  ];

  return (
    <div className="flex h-[calc(100vh-140px)] flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">

      {/* Header */}
      <div className="border-b border-zinc-800 p-5">

        <h1 className="text-2xl font-semibold text-white">
          AI Workspace Assistant
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          Ask questions across all documents.
        </p>

      </div>

      {/* Responses */}
      <div className="flex-1 space-y-5 overflow-y-auto p-5">

        {responses.map((item) => (

          <AiResponseCard
            key={item.id}
            item={item}
          />

        ))}

        {/* Loading */}
        {/* <AiLoadingState /> */}

      </div>

      {/* Input */}
      <AskAiInput />

    </div>
  );
};

export default AiAssistantPanel;