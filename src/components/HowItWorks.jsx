import React from 'react';
import './HowItWorks.css'

const HowItWorks = () => {
  return (
    <div className='content'>
      <h1>How ATS Resume Checker Work</h1>
      <p>
        An ATS (Applicant Tracking System) resume checker is a tool used by employers to automate the initial screening of resumes. Here's a step-by-step explanation of how it typically works:
      </p>
      <ol>
        <li ><strong>Resume Submission:</strong> Job seekers submit their resumes through the company's website or job portal.</li>
        <li><strong>Parsing:</strong> The ATS parses the resume, extracting relevant information such as contact details, work experience, education, skills, and qualifications.</li>
        <li><strong>Keyword Matching:</strong> The ATS compares the content of the resume against the job description to identify keywords and phrases relevant to the position.</li>
        <li><strong>Score Assignment:</strong> Based on the keyword matching, the ATS assigns a score to the resume indicating how well it matches the job requirements.</li>
        <li><strong>Formatting Check:</strong> The ATS also checks the formatting of the resume to ensure it is readable and well-structured.</li>
        <li><strong>Ranking:</strong> The ATS ranks the resumes based on their scores, with higher-ranked resumes typically being considered for further review by human recruiters.</li>
        <li><strong>Database Storage:</strong> The ATS stores the resumes in its database for future reference and analysis.</li>
        <li><strong>Feedback:</strong> Some ATSs provide feedback to the job seeker, indicating areas where their resume could be improved for better matching with job requirements.</li>
        <li><strong>Candidate Tracking:</strong> Throughout the hiring process, the ATS tracks the progress of each candidate, from initial application to final decision.</li>
        <li><strong>Compliance Check:</strong> The ATS may also perform a compliance check to ensure that the resume meets legal and regulatory requirements.</li>
      </ol>
      
      <p>
        Overall, the ATS resume checker streamlines the initial screening process, helping employers efficiently identify the most qualified candidates for a position.
      </p>
    </div>
  );
};

export default HowItWorks;
