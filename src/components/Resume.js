import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume">
      <iframe src="resume.pdf" width="100%" height="600px" title="Resume"></iframe>
      <a href="resume.pdf" download>
        <button className="download-btn">Download Resume</button>
      </a>
    </section>
  );
};

export default Resume;
