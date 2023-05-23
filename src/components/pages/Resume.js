import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../utils/resume/Resume.pdf'
export default function Contact() {
    // import Resume from '../utils/resume/Resume.pdf'
    // const Resume = () => {
        return (
          <div className='main-container'>
            <Document file={resume}>
                <Page pageNumber={2}/>
            </Document>
          </div>
        )
    //   }
    //   Resume()
}