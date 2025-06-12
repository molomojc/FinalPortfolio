import React, { use, useState } from 'react';

//const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;


const AboutMePage = () => {
    const linkedInUrl = "https://www.linkedin.com/in/jacob-molomo-002428242/";
    const githubUrl = "https://github.com/molomojc";
    const [summary, setSummary] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState('');
    const [api, setApi] =useState('');

    const handleGenerateSummary = async () => {
        setIsGenerating(true);
        setError('');
        setSummary('');

        const prompt = "Write a compelling and professional 2-3 sentence summary for a portfolio 'About Me' page. The person is an aspiring Software Engineer and Data Scientist, currently pursuing a BSc in Mathematical Sciences with a focus on Applied Mathematics and Computer Science. Highlight passion for technology, problem-solving, and creating meaningful applications.";
        
        try {
            let chatHistory = [{ role: "user", parts: [{ text: prompt }] }];
            const payload = { contents: chatHistory };
           // const apiKey = '
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${api}`;
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API call failed with status: ${response.status}`);
            }

            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 && result.candidates[0].content && result.candidates[0].content.parts && result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                setSummary(text);
            } else {
                throw new Error("Unexpected response structure from API.");
            }
        } catch (err) {
            console.error("Error generating summary:", err);
            setError("Sorry, something went wrong while generating the summary. Please try again.");
        } finally {
            setIsGenerating(false);
        }
    };
    const handleDownloadCV = () => {
        const cvUrl = "/Jacob_Molomo_CV4.pdf"; // Updated path to be relative to the public folder
        const link = document.createElement('a');
        link.href = cvUrl;
        link.setAttribute('download', 'Jacob_Molomo_CV.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

        
         const Card = ({ title, children, className }) => (
            <div className={`card ${className}`}>
              {title && <h2 className="card-title">{title}</h2>}
              <div className="card-content">
                {children}
              </div>
            </div>
             );
        
const SparklesIcon = ({ className = "w-5 h-5 mr-2" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 12.75l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 18l-1.035.259a3.375 3.375 0 00-2.456 2.456L18 21.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 18l1.035-.259a3.375 3.375 0 002.456-2.456L18 12.75z" />
    </svg>
  );
  const LinkedInIcon = ({ className = "w-5 h-5 mr-2" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const DownloadIcon = ({ className = "w-5 h-5 mr-2" }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);     

const GitHubIcon = ({ className = "w-5 h-5 mr-2" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.074 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
    return (
        <div className="page-container">
            <Card title="About Me">
                <p className="about-text">
                    Hello! I'm Jacob Molomo, an aspiring Software Engineer and Data Scientist currently pursuing a BSc in Mathematical Sciences with a focus on Applied Mathematics and Computer Science. I'm passionate about leveraging technology to solve complex problems and create meaningful applications.
                </p>
 <input
                            type="text"
                            value={api}
                            onChange={(e) => setApi(e.target.value)}
                            placeholder="API Key "
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: 'var(--border-radius)',
                                backgroundColor: 'var(--card-bg-light)',
                                border: '1px solid ',
                                color: 'var(--text-white)',
                              }}
                 />
                <div className="ai-summary-section">
               
                    <button
                        onClick={handleGenerateSummary}
                        disabled={isGenerating}
                        className="generate-button"
                    >
                        <SparklesIcon className="sparkles-icon" />
                        {isGenerating ? 'Generating...' : '✨ Generate AI Professional Summary'}
                    </button>
                    {isGenerating && <div className="generating-text">Brewing up some words...</div>}
                    {error && <p className="error-message">{error}</p>}
                    {summary && (
                        <div className="summary-container">
                            <h3 className="summary-title">Generated Summary:</h3>
                            <p className="summary-text">{summary}</p>
                        </div>
                    )}
                </div>

                <p className="about-text">
                    This portfolio showcases some of my work and educational journey. Feel free to connect with me or explore my projects.
                </p>

                <div className="social-buttons">
                    <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="linkedin-button">
                        <LinkedInIcon className="social-icon"/>
                        My LinkedIn Profile
                    </a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-button">
                        <GitHubIcon className="social-icon"/>
                        My GitHub Profile
                    </a>
                </div>
                <div className="download-section">
                     <button onClick={handleDownloadCV} className="download-button">
                        <DownloadIcon className="download-icon"/>
                        Download My CV
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default AboutMePage;