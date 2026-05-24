import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";

const MarkdownViewer = ({ fileUrl }) => {
  const [content, setContent] = useState("");

  /*
    Fetch Markdown File
  */

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(fileUrl);

        const text = await response.text();

        setContent(text);
      } catch (error) {
        console.log(error);
      }
    };

    if (fileUrl) {
      fetchMarkdown();
    }
  }, [fileUrl]);

  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownViewer;
