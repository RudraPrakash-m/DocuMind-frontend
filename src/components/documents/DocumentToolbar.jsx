import {
  Plus,
  Search,
} from "lucide-react";

const DocumentToolbar = ({
  setIsUploadOpen,
}) => {

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4">

      {/* Top */}
      <div className="mb-4 flex items-center justify-between">

        <div>

          <h1 className="text-2xl font-semibold text-white">
            Documents
          </h1>

          <p className="mt-1 text-sm text-zinc-500">
            Manage uploaded files
          </p>

        </div>

        {/* Upload */}
        <button
          onClick={() =>
            setIsUploadOpen(true)
          }
          className="flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-400"
        >

          <Plus size={18} />

          Upload

        </button>

      </div>

      {/* Search */}
      <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3">

        <Search
          size={18}
          className="text-zinc-500"
        />

        <input
          type="text"
          placeholder="Search documents..."
          className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-500"
        />

      </div>

    </div>
  );
};

export default DocumentToolbar;