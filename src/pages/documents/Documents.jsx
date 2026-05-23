import { useState } from "react";
import DocumentToolbar from "../../components/documents/DocumentToolbar";
import DocumentGrid from "../../components/documents/DocumentGrid";
import DocumentViewer from "../../components/documents/MarkdownViewer";
import UploadModal from "../../components/documents/UploadModal";

const Documents = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const [isUploadOpen, setIsUploadOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[380px_1fr]">
      {/* Left */}
      <div className="space-y-5">
        <DocumentToolbar setIsUploadOpen={setIsUploadOpen} />

        <DocumentGrid
          selectedDocument={selectedDocument}
          setSelectedDocument={setSelectedDocument}
        />
      </div>

      {/* Right */}
      <DocumentViewer selectedDocument={selectedDocument} />

      {/* Upload Modal */}
      {isUploadOpen && <UploadModal setIsUploadOpen={setIsUploadOpen} />}
    </div>
  );
};

export default Documents;
