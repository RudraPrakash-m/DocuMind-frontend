const AiLoadingState = () => {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
      <div className="flex gap-1">
        <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400"></div>

        <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:0.2s]"></div>

        <div className="h-2 w-2 animate-bounce rounded-full bg-blue-400 [animation-delay:0.4s]"></div>
      </div>

      <p className="text-sm text-zinc-400">AI is analyzing documents...</p>
    </div>
  );
};

export default AiLoadingState;
