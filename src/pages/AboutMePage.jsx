// src/pages/AboutMePage.js
import React from 'react';
import Card from '../components/Card'; // Adjust path as needed
import { GitHubIcon, LinkedInIcon, DownloadIcon } from '../components/Icons'; // Adjust path
import { handleDownloadCV } from '../utils/helpers'; // Adjust path

const AboutMePage = () => {
    // Placeholder links - replace with your actual URLs
    const linkedInUrl = "https://www.linkedin.com/in/yourprofile"; 
    const githubUrl = "https://github.com/yourusername"; 
    
    return (
        <div className="animate-fadeIn">
            <Card title="About Me">
                <p className="text-lg mb-6">
                    Hello! I'm Jacob Molomo, an aspiring Software Engineer and Data Scientist currently pursuing a 
                    BSc in Mathematical Sciences with a focus on Applied Mathematics and Computer Science. 
                    I'm passionate about leveraging technology to solve complex problems and create meaningful applications.
                </p>
                <p className="mb-6">
                    This portfolio showcases some of my work and educational journey. Feel free to connect with me 
                    or explore my projects.
                </p>
                
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                    <a
                        href={linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75"
                    >
                        <LinkedInIcon className="w-6 h-6 mr-3"/>
                        My LinkedIn Profile
                    </a>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center bg-slate-600 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75"
                    >
                        <GitHubIcon className="w-6 h-6 mr-3"/>
                        My GitHub Profile
                    </a>
                </div>
                <div className="mt-6">
                     <button
                        onClick={handleDownloadCV} // Use the imported helper
                        className="w-full inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-75"
                    >
                        <DownloadIcon className="w-6 h-6 mr-3"/>
                        Download My CV
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default AboutMePage;
