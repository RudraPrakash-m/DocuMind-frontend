import { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";

import "react-pdf/dist/Page/TextLayer.css";

/*
  PDF Worker
*/

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = ({ fileUrl }) => {
  return (
    <div className="h-[80vh] overflow-hidden rounded-2xl">
      <iframe src={fileUrl} title="PDF Viewer" className="h-full w-full" />
    </div>
  );
};

export default PdfViewer;
