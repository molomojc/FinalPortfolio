// src/components/Header.js
import React, { useState } from 'react';
import { HomeIcon, AboutMeIcon, EducationIcon, ProjectsIcon, ContactIcon, MenuIcon, XIcon } from './Icons'; // Assuming Icons.js is in the same folder
import { generateId } from '../utils/helpers'; // Adjust path as needed

const Header = ({ currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: generateId(), name: 'Home', page: 'home', icon: <HomeIcon /> },
    { id: generateId(), name: 'About Me', page: 'about_me', icon: <AboutMeIcon /> },
    { id: generateId(), name: 'Education', page: 'education', icon: <EducationIcon /> }, 
    { id: generateId(), name: 'Projects', page: 'projects', icon: <ProjectsIcon /> },
    { id: generateId(), name: 'Contact', page: 'contact', icon: <ContactIcon /> },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-slate-800/50 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="text-2xl font-bold text-sky-400 hover:text-sky-300 transition-colors">
              SimpleSite
            </a>
          </div>
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.page);
                  setIsMobileMenuOpen(false); 
                }}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-150 ease-in-out
                  ${currentPage === item.page
                    ? 'bg-sky-500 text-white shadow-md'
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50'
                  }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-slate-800/95 backdrop-blur-sm shadow-xl p-2 space-y-1 sm:px-3 z-40 rounded-b-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.page);
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors
                ${currentPage === item.page
                  ? 'bg-sky-500 text-white'
                  : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
