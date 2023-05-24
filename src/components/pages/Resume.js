import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../utils/resume/Resume.pdf'
export default function Resume() {

  return (
    
     <div className='main-container'>
    <Document file={resume}>
        <Page pageNumber={1}/>
        <Page pageNumber={2}/>
        <Page pageNumber={3}/>
    </Document>
  </div>
  )
  
}