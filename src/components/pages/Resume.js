import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import resume from '../utils/resume/Resume.pdf'
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function Resume() {

  return (

    <div className='main-container'>
        <Document file={resume}>
          <Page pageNumber={1} renderAnnotationLayer={false}/>
          <Page pageNumber={2} renderAnnotationLayer={false}/>
          <Page pageNumber={3} renderAnnotationLayer={false}/>
        </Document>
    </div>
  )

}