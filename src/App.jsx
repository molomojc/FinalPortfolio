import React, { useState, useEffect } from 'react';
import './App.scss'; 
import HomePage from './pages/HomePage';
import AboutMePage from './pages/AboutMePage';
import EducationPage from './pages/EducationPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';


const generateId = () => `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;


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

export default App;