import { useEffect, useState } from "react";

import axios from "axios";

import DocumentCard from "./DocumentCard";

const DocumentGrid = ({ selectedDocument, setSelectedDocument }) => {
  /*
    States
  */

  const [documents, setDocuments] = useState([]);

  const [loading, setLoading] = useState(true);

  /*
    Fetch Documents
  */

  const getDocuments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/user/documents",

        {
          withCredentials: true,
        },
      );

      setDocuments(response.data.documents);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  /*
    Initial Fetch
  */

  useEffect(() => {
    getDocuments();
  }, []);

  /*
    Loading State
  */

  if (loading) {
    return <h1 className="text-zinc-400">Loading documents...</h1>;
  }

  /*
    Empty State
  */

  if (documents.length === 0) {
    return <h1 className="text-zinc-500">No documents uploaded</h1>;
  }

  return (
    <div className="space-y-4">
      {documents.map((document) => (
        <DocumentCard
          key={document._id}
          document={document}
          selectedDocument={selectedDocument}
          setSelectedDocument={setSelectedDocument}
        />
      ))}
    </div>
  );
};

export default DocumentGrid;
