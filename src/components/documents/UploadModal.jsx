const UploadModal = ({
  setIsUploadOpen,
}) => {

  return (
    <div
      onClick={(e) => {
        if (
          e.target === e.currentTarget
        ) {
          setIsUploadOpen(false);
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    >

      <div className="w-full max-w-lg rounded-3xl border border-zinc-800 bg-zinc-950 p-6">

        <h1 className="mb-5 text-2xl font-semibold text-white">
          Upload Document
        </h1>

        {/* Upload Area */}
        <div className="flex h-56 items-center justify-center rounded-2xl border-2 border-dashed border-zinc-700 bg-zinc-900">

          <p className="text-zinc-500">
            Drag & drop files here
          </p>

        </div>

        {/* Footer */}
        <div className="mt-5 flex justify-end gap-3">

          <button
            onClick={() =>
              setIsUploadOpen(false)
            }
            className="rounded-xl border border-zinc-800 px-4 py-2 text-sm text-white"
          >

            Cancel

          </button>

          <button className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white">

            Upload

          </button>

        </div>

      </div>

    </div>
  );
};

export default UploadModal;