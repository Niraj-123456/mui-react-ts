import React, { useState } from "react";

import { Document, Page } from "react-pdf/dist/esm/entry.vite";
import Resume from "../../assets/resume.pdf";

function Pdf() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ pages }: any) {
    setNumPages(pages);
  }
  return (
    <div>
      <Document file={Resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default Pdf;
