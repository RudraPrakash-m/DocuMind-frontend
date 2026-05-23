import { ChevronDown, FileText, Upload, X } from "lucide-react";

const UploadModal = ({ setIsUploadOpen }) => {
  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsUploadOpen(false);
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
    >
      {/* Modal */}
      <div className="w-full max-w-xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/40">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
          <h1 className="text-xl font-semibold text-white">Upload documents</h1>

          <button
            onClick={() => setIsUploadOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-xl text-zinc-500 transition hover:bg-zinc-900 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-5">
          {/* Upload Area */}
          <div className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/40 px-5 py-10 transition hover:border-zinc-600 hover:bg-zinc-900">
            {/* Icon */}
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-zinc-900 text-zinc-400">
              <Upload size={24} />
            </div>

            {/* Text */}
            <h2 className="text-lg font-semibold text-white">
              Drop files here, or browse
            </h2>

            <p className="mt-2 text-sm text-zinc-500">
              PDF, DOCX, MD, TXT · up to 100 MB
            </p>

            {/* Hidden Input */}
            <input type="file" className="hidden" />
          </div>

          {/* Selected File */}
          <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-900/60 px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Left */}
              <div className="flex items-center gap-3">
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
                  <FileText size={18} className="text-zinc-300" />
                </div>

                {/* Info */}
                <div>
                  <h2 className="text-sm font-medium text-white">
                    Q4-investor-memo.pdf
                  </h2>

                  <p className="mt-1 text-xs text-zinc-500">Ready for upload</p>
                </div>
              </div>

              {/* Size */}
              <p className="text-xs text-zinc-500">2.4 MB</p>
            </div>
          </div>

          {/* Workspace */}
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-zinc-400">
              Workspace
            </label>

            <button className="flex w-full items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-left transition hover:border-zinc-700">
              <span className="text-sm text-white">Finance</span>

              <ChevronDown size={18} className="text-zinc-500" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-3 border-t border-zinc-800 px-5 py-4">
          {/* Cancel */}
          <button
            onClick={() => setIsUploadOpen(false)}
            className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:text-white"
          >
            Cancel
          </button>

          {/* Upload */}
          <button className="rounded-xl bg-blue-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-400">
            Upload & analyze
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
