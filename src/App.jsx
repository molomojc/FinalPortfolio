import React, { useState, useEffect } from 'react';
import './App.scss'; // Import the SCSS file

// Helper function to generate unique IDs
const generateId = () => `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;


// filepath: c:\Users\Jacob\Documents\FinalPortfolio\FinalProj\src\App.jsx
const fetchProfilePic = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('https://raw.githubusercontent.com/molomojc/Portfolio/main/Personn.png');
    }, 1500);
  });
};

// --- Icon Components ---
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.122 0l8.954 8.955M2.25 12v10.5a.75.75 0 00.75.75H21a.75.75 0 00.75-.75V12M2.25 12L12 2.25l9.75 9.75" />
  </svg>
);

const ContactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const ProjectsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m0 0l-3 2.25 3 2.25M6.75 12l3-2.25 3 2.25m-3 2.25l3 2.25M14.25 7.5l3 2.25-3 2.25m0 0l-3 2.25 3 2.25M14.25 12l3-2.25 3 2.25m-3 2.25l3 2.25M3.75 12h16.5" />
  </svg>
);

const GitHubIcon = ({ className = "w-5 h-5 mr-2" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.074 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const EducationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

const AboutMeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
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

const SparklesIcon = ({ className = "w-5 h-5 mr-2" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 12.75l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 18l-1.035.259a3.375 3.375 0 00-2.456 2.456L18 21.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 18l1.035-.259a3.375 3.375 0 002.456-2.456L18 12.75z" />
  </svg>
);

// --- Main App Component ---
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: generateId(), name: 'Home', page: 'home', icon: <HomeIcon /> },
    { id: generateId(), name: 'About Me', page: 'about_me', icon: <AboutMeIcon /> },
    { id: generateId(), name: 'Education', page: 'education', icon: <EducationIcon /> },
    { id: generateId(), name: 'Projects', page: 'projects', icon: <ProjectsIcon /> },
    { id: generateId(), name: 'Contact', page: 'contact', icon: <ContactIcon /> },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about_me':
        return <AboutMePage />;
      case 'education':
        return <EducationPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-container">
          <div className="header-content">
            <div className="logo">
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="logo-link">
                JM Molomo
              </a>
            </div>
            <nav className="desktop-nav">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`nav-button ${currentPage === item.page ? 'active' : ''}`}
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
            </nav>
            <div className="mobile-menu-button">
              <button
                onClick={toggleMobileMenu}
                className="menu-toggle"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.page);
                  setIsMobileMenuOpen(false);
                }}
                className={`mobile-nav-button ${currentPage === item.page ? 'active' : ''}`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </div>
        )}
      </header>
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="app-footer">
        <div className="footer-content">
          <p>Jacob Molomo's Portfolio</p>
        </div>
      </footer>
    </div>
  );
}

// --- Page Components ---
const Card = ({ title, children, className }) => (
  <div className={`card ${className}`}>
    {title && <h2 className="card-title">{title}</h2>}
    <div className="card-content">
      {children}
    </div>
  </div>
);

const HomePage = ({ setCurrentPage }) => {
    const [profilePic, setProfilePic] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getProfilePic = async () => {
            try {
                setLoading(true);
                const url = await fetchProfilePic();
                setProfilePic(url);
                setError(null);
            } catch (err) {
                setError('Failed to load this Image');
                console.error("Error fetching profile pic:", err);
            } finally {
                setLoading(false);
            }
        };
        getProfilePic();
    }, []);

    return (
        <div className="home-container">
            <div className="home-details">
                <h1 className="name">I AM <span className="name-highlight">JACOB MOLOMO</span></h1>
                <p className="description">ASPIRING SOFTWARE ENGINEER | DATA SCIENTIST</p>
                <p className="description2">BSc in Mathematical Sciences in Applied Maths & Computer Science</p>
                <button
                    className="talk-button"
                    onClick={() => setCurrentPage('about_me')}
                >
                    More About Me
                </button>
                <h1 className="notice">Please Note this web is still in production</h1>
            </div>
            <div className="profile-container">
                {isLoading ? (
                    <p className="loading-text">Loading Profile Picture...</p>
                ) : error ? (
                    <p className="error-text">{error}</p>
                ) : (
                    <img src={profilePic} alt="Profile" className="profile-pic" onError={(e) => e.target.src='https://placehold.co/600x400/ef4444/ffffff?text=Error+Loading&font=montserrat'} />
                )}
            </div>
        </div>
    );
};

const AboutMePage = () => {
    const linkedInUrl = "https://www.linkedin.com/in/jacob-molomo-002428242/";
    const githubUrl = "https://github.com/molomojc";
    const [summary, setSummary] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState('');

    const handleGenerateSummary = async () => {
      setIsGenerating(true);
      setError('');
      setSummary('');
  
      // The data you are sending to your secure backend function
      const requestBody = {
          prompt: "Write a compelling and professional 2-3 sentence summary for a portfolio 'About Me' page. The person is an aspiring Software Engineer and Data Scientist, currently pursuing a BSc in Mathematical Sciences with a focus on Applied Mathematics and Computer Science. Highlight passion for technology, problem-solving, and creating meaningful applications."
          // Note: No schema is needed for this simple text generation
      };
  
      try {
          // SAFE: Call your secure Netlify Function endpoint
          const response = await fetch('/.netlify/functions/generate', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(requestBody)
          });
  
          if (!response.ok) {
              throw new Error(`The request to the Netlify function failed.`);
          }
  
          const result = await response.json();
  
          // Check for the response from the Gemini API, which is passed through the function
          if (result.candidates && result.candidates[0]?.content?.parts?.[0]?.text) {
              const text = result.candidates[0].content.parts[0].text;
              setSummary(text);
          } else {
               // Handle potential errors returned from the Gemini API
              if (result.error) {
                   throw new Error(`Gemini API Error: ${result.error.message || 'Unknown error'}`);
              }
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
        const cvUrl = "public\Jacob_Molomo_CV4.pdf";
        const link = document.createElement('a');
        link.href = cvUrl;
        link.setAttribute('download', 'Jacob_Molomo_CV.pdf');
        document.body.appendChild(link);
        if (cvUrl === "public\Jacob_Molomo_CV4.pdf") {
            const messageBox = document.createElement('div');
            messageBox.className = "download-error-message";
            messageBox.textContent = 'CV download link is a placeholder. Please update the path.';
            document.body.appendChild(messageBox);
            setTimeout(() => { document.body.removeChild(messageBox); }, 4000);
            return;
        }
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="page-container">
            <Card title="About Me">
                <p className="about-text">
                    Hello! I'm Jacob Molomo, an aspiring Software Engineer and Data Scientist currently pursuing a BSc in Mathematical Sciences with a focus on Applied Mathematics and Computer Science. I'm passionate about leveraging technology to solve complex problems and create meaningful applications.
                </p>

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

const EducationPage = () => (
  <div className="page-container">
    <Card title="Education" className="education-card">
        <div className="education-items">
            <div className="education-item">
                <div className="education-header">
                    <h3 className="institution">University of Johannesburg</h3>
                    <p className="duration">2022 - Present</p>
                </div>
                <p className="degree">BSc in Mathematical Sciences - Applied Mathematics & Computer Science</p>
            </div>
            <div className="education-item">
                <div className="education-header">
                    <h3 className="institution">Gwenane Secondary School</h3>
                    <p className="duration">2017 - 2021</p>
                </div>
                <p className="degree">National Senior Certificate - Bachelor's Pass</p>
            </div>
        </div>
    </Card>
  </div>
);

const initialProjects = [
  {
    id: generateId(),
    name: 'Awesome Project Alpha',
    description: 'A revolutionary app that changes the way you do things. Built with cutting-edge technology and a focus on user experience.',
    imageUrl: 'https://placehold.co/600x400/0284c7/ffffff?text=Project+Alpha&font=montserrat',
    githubUrl: 'https://github.com/username/awesome-project-alpha',
    tags: ['React', 'Node.js', 'AI']
  },
  {
    id: generateId(),
    name: 'Service Bot Beta',
    description: 'An automated service bot designed to streamline customer support and improve response times. Integrates with multiple platforms.',
    imageUrl: 'https://placehold.co/600x400/16a34a/ffffff?text=Service+Bot&font=montserrat',
    githubUrl: 'https://github.com/username/service-bot-beta',
    tags: ['Python', 'NLP', 'Cloud']
  },
  {
    id: generateId(),
    name: 'Data Visualizer Gamma',
    description: 'A powerful tool for visualizing complex datasets. Offers interactive charts and dashboards for insightful data analysis.',
    imageUrl: 'https://placehold.co/600x400/c026d3/ffffff?text=DataViz+Gamma&font=montserrat',
    githubUrl: 'https://github.com/username/dataviz-gamma',
    tags: ['D3.js', 'JavaScript', 'Big Data']
  }
];

const ProjectCardItem = ({ project }) => (
  <div className="project-card">
    <img
        src={project.imageUrl}
        alt={project.name}
        className="project-image"
        onError={(e) => {e.target.onerror = null; e.target.src='https://placehold.co/600x400/7f1d1d/ffffff?text=Image+Error&font=montserrat'}}
    />
    <div className="project-content">
      <h3 className="project-title">{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tags && project.tags.map(tag => (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        <GitHubIcon className="github-icon" />
        View on GitHub
      </a>
    </div>
  </div>
);

const ProjectsPage = () => {
    const [projects, setProjects] = useState(initialProjects);
    const [idea, setIdea] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState('');

    const handleGenerateProject = async (e) => {
      e.preventDefault();
      if (!idea.trim()) {
          setError("Please enter a project idea first.");
          return;
      }
      setIsGenerating(true);
      setError('');
  
      // The data you are sending to your own backend function
      const requestBody = {
          prompt: `Generate a creative project idea based on the concept: "${idea}".
  Provide a catchy "name", a short "description" (1-2 sentences), and a list of 3-4 technology "tags".`,
          schema: {
              type: "OBJECT",
              properties: {
                  name: { type: "STRING" },
                  description: { type: "STRING" },
                  tags: {
                      type: "ARRAY",
                      items: { type: "STRING" }
                  }
              },
              required: ["name", "description", "tags"]
          }
      };
  
      try {
          // This is the SAFE way: Call your Netlify Function endpoint
          const response = await fetch('/.netlify/functions/generate', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(requestBody)
          });
  
          if (!response.ok) {
              throw new Error(`The request to the Netlify function failed.`);
          }
  
          const result = await response.json();
          
          if (result.candidates && result.candidates[0]?.content?.parts?.[0]?.text) {
              const generatedData = JSON.parse(result.candidates[0].content.parts[0].text);
              const newProject = {
                  id: generateId(),
                  name: `✨ ${generatedData.name}`,
                  description: generatedData.description,
                  tags: generatedData.tags,
                  imageUrl: `https://placehold.co/600x400/a855f7/ffffff?text=${encodeURIComponent(generatedData.name)}&font=montserrat`,
                  githubUrl: 'https://github.com/yourusername'
              };
              setProjects(prevProjects => [newProject, ...prevProjects]);
              setIdea('');
          } else {
              // If the Gemini API returns an error (which the Netlify function passes along)
              if (result.error) {
                   throw new Error(`Gemini API Error: ${result.error.message || 'Unknown error'}`);
              }
              throw new Error("Unexpected response structure from API.");
          }
      } catch (err) {
          console.error("Error generating project:", err);
          setError("Sorry, we couldn't brainstorm a project right now. Please try again.");
      } finally {
          setIsGenerating(false);
      }
  };

    return (
        <div className="page-container">
            <Card title="My Projects" className="projects-card">
                <div className="idea-generator">
                    <h3 className="generator-title">AI Project Idea Generator</h3>
                    <p className="generator-description">
                        Stuck for an idea? Describe a concept below, and let AI brainstorm a project for you!
                    </p>
                    <form onSubmit={handleGenerateProject} className="generator-form">
                        <input
                            type="text"
                            value={idea}
                            onChange={(e) => setIdea(e.target.value)}
                            placeholder="e.g., A fitness tracker for pets"
                            className="idea-input"
                        />
                        <button
                            type="submit"
                            disabled={isGenerating}
                            className="generate-button"
                        >
                            <SparklesIcon className="sparkles-icon" />
                            {isGenerating ? 'Brainstorming...' : '✨ Generate Project Idea'}
                        </button>
                        {isGenerating && <div className="generating-text">Thinking of something cool...</div>}
                        {error && <p className="error-message">{error}</p>}
                    </form>
                </div>

                <p className="projects-intro">
                    Here are some of the projects I've been working on.
                </p>
                <div className="projects-grid">
                    {projects.map(project => (
                        <ProjectCardItem key={project.id} project={project} />
                    ))}
                </div>
            </Card>
        </div>
    );
};

const ContactPage = () => (
  <div className="page-container">
    <Card title="Contact Us">
      <p className="contact-text">
        Have questions or feedback? We'd love to hear from you!
        Since this is a demo, there isn't a real contact form, but here's how you might structure one.
      </p>
      <form className="contact-form" onSubmit={(e) => {
          e.preventDefault();
          const messageBox = document.createElement('div');
          messageBox.className = "form-success-message";
          messageBox.textContent = 'Form submitted (demo)!';
          document.body.appendChild(messageBox);
          setTimeout(() => { document.body.removeChild(messageBox); }, 3000);
          e.target.reset();
      }}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" name="name" id="name" className="form-input" placeholder="John Doe" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" name="email" id="email" className="form-input" placeholder="you@example.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea name="message" id="message" rows="4" className="form-textarea" placeholder="Your message..." required></textarea>
        </div>
        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </Card>
  </div>
);

export default App;