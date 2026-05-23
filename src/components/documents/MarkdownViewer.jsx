import MarkdownViewer from "./MarkdownViewer";
import PdfViewer from "./PdfViewer";

const DocumentViewer = ({
  selectedDocument,
}) => {

  if (!selectedDocument) {

    return (
      <div className="flex h-[80vh] items-center justify-center rounded-3xl border border-dashed border-zinc-800 bg-zinc-950">

        <p className="text-zinc-500">
          Select a document
        </p>

      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-5">

      {/* Header */}
      <div className="mb-5 border-b border-zinc-800 pb-4">

        <h1 className="text-2xl font-semibold text-white">
          {selectedDocument.title}
        </h1>

      </div>

      {/* Viewer */}
      {selectedDocument.type ===
      "pdf" ? (

        <PdfViewer
          fileUrl={
            selectedDocument.fileUrl
          }
        />

      ) : (

        <MarkdownViewer
          content={
            selectedDocument.content
          }
        />

      )}

    </div>
  );
};

export default DocumentViewer;