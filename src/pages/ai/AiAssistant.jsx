import AiAssistantPanel from "../../components/ai/AiAssistantPanel";
import AiSummaryCard from "../../components/ai/AiSummaryCard";
import SuggestedQuestions from "../../components/ai/SuggestedQuestions";

const AiAssistant = () => {
  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[320px_1fr]">
      {/* Left Sidebar */}
      <div className="space-y-6">
        <AiSummaryCard />

        <SuggestedQuestions />
      </div>

      {/* Main Chat */}
      <AiAssistantPanel />
    </div>
  );
};

export default AiAssistant;
