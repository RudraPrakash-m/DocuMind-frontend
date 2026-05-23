import DocumentCard from "./DocumentCard";

const DocumentGrid = ({
  selectedDocument,
  setSelectedDocument,
}) => {

  const documents = [
    {
      id: 1,
      title: "Investor Memo.pdf",
      type: "pdf",

      tags: [
        "finance",
        "investors",
      ],

      content:
        "Revenue increased 32% YoY.",

      fileUrl: "/sample.pdf",
    },

    {
      id: 2,
      title: "Architecture.md",
      type: "markdown",

      tags: [
        "engineering",
        "backend",
      ],

      content:
        "# System Architecture\n\nThis system uses MERN stack.",
    },
  ];

  return (
    <div className="space-y-4">

      {documents.map((document) => (

        <DocumentCard
          key={document.id}
          document={document}
          selectedDocument={
            selectedDocument
          }
          setSelectedDocument={
            setSelectedDocument
          }
        />

      ))}

    </div>
  );
};

export default DocumentGrid;