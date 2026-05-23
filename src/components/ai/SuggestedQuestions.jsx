const SuggestedQuestions = () => {

  const questions = [
    "Summarize all finance reports",
    "What risks are mentioned most?",
    "Compare Q1 vs Q2 performance",
    "Show engineering blockers",
    "What decisions were made?",
  ];

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-5">

      <h2 className="mb-5 text-lg font-semibold text-white">
        Suggested Questions
      </h2>

      <div className="space-y-3">

        {questions.map((question, index) => (

          <button
            key={index}
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-left text-sm text-zinc-300 transition hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
          >

            {question}

          </button>

        ))}

      </div>

    </div>
  );
};

export default SuggestedQuestions;