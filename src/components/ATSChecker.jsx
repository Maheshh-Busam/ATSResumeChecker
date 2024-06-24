import React, { useState } from 'react';
import axios from 'axios';
import './ATSChecker.css';
import { useNavigate } from 'react-router-dom';

const ATSChecker = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [resume, setResume] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(null);
  const navigate = useNavigate();
  const [fileName, setFileName] = useState('No file chosen');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setResume(file);
    } else {
      setFileName('No file chosen');
    }
  };

  const handleATSResult = () => {
    if (!jobDescription || !resume) return;

    // Sample ATS result data
    const sampleResult = 'Your resume matches 70% of the job description requirements.';
    setResult(sampleResult);
  };

  const handleScore = () => {
    if (!jobDescription || !resume) return;

    // Sample ATS score data
    const sampleScore = 'Score: 85/100';
    setScore(sampleScore);
  };

  return (
    <div className="container ats-content">
      <h1>Track Resume 😎</h1>
      <h3 className='jd-heading'>Please provide your Job Description and upload your resume</h3>
      <textarea
        className="textarea"
        required
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        placeholder="Job Description"
      ></textarea>
      <div className="input-file">
        <label className='button' htmlFor="fileInput">Upload your Resume</label>
        <span>{fileName}</span>
        <input
          id="fileInput"
          type="file"
          required
          onChange={handleFileChange}
          accept="application/pdf"
        />
      </div>

      <div className='btns'>
        <button
          className="button"
          onClick={handleATSResult}
          disabled={!jobDescription || !resume}
        >
          Check ATS Result
        </button>
        <button
          className="button"
          onClick={handleScore}
          disabled={!jobDescription || !resume}
        >
          Check Score
        </button>
        <button
          className='button'
          onClick={() => navigate('/howitworks')}
        >
          How it works?
        </button>
      </div>

      {result && <div className="result">{result}</div>}
      {score && <div className="result">{score}</div>}
    </div>
  );
};

export default ATSChecker;
