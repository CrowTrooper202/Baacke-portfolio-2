import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../utils/resume/Resume.pdf'
export default function Resume() {
  // import Resume from '../utils/resume/Resume.pdf'
  // const Resume = () => {

  // <div className='main-container'>
  //   <Document file={resume}>
  //       <Page pageNumber={1}/>
  //   </Document>
  // </div>

  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({ numPages }) {
  //   setNumPages(numPages);
  // }

  return (
    // <div>
    //   <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
    //     <Page pageNumber={pageNumber} />
    //   </Document>
    //   <p>
    //     Page {pageNumber} of {numPages}
    //   </p>
    // </div>
     <div className='main-container'>
    <Document file={resume}>
        <Page pageNumber={1}/>
        <Page pageNumber={2}/>
        <Page pageNumber={3}/>
    </Document>
  </div>
  )
  //   }
  //   Resume()
}