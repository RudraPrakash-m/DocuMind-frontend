import {
  FileText,
  FileCode,
} from "lucide-react";

import DocumentTags from "./DocumentTags";

const DocumentCard = ({
  document,
  selectedDocument,
  setSelectedDocument,
}) => {

  const isSelected =
    selectedDocument?.id ===
    document.id;

  return (
    <button
      onClick={() =>
        setSelectedDocument(document)
      }
      className={`w-full rounded-2xl border p-4 text-left transition ${
        isSelected
          ? "border-blue-500 bg-blue-500/10"
          : "border-zinc-800 bg-zinc-950 hover:border-zinc-700 hover:bg-zinc-900"
      }`}
    >

      {/* Top */}
      <div className="mb-3 flex items-center gap-3">

        {/* Icon */}
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900">

          {document.type === "pdf" ? (
            <FileText
              size={18}
              className="text-red-400"
            />
          ) : (
            <FileCode
              size={18}
              className="text-blue-400"
            />
          )}

        </div>

        {/* Info */}
        <div>

          <h2 className="text-sm font-medium text-white">
            {document.title}
          </h2>

          <p className="mt-1 text-xs text-zinc-500">
            {document.type}
          </p>

        </div>

      </div>

      {/* Tags */}
      <DocumentTags
        tags={document.tags}
      />

    </button>
  );
};

export default DocumentCard;