// src/components/ProjectCardItem.js
import React from 'react';
import { GitHubIcon } from './Icons'; // Adjust path as needed

const ProjectCardItem = ({ project }) => (
  <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden flex flex-col hover:shadow-sky-500/40 transition-all duration-300">
    <img 
        src={project.imageUrl} 
        alt={project.name} 
        className="w-full h-48 object-cover" 
        onError={(e) => {
            e.target.onerror = null; // Prevents looping if placeholder also fails
            e.target.src='https://placehold.co/600x400/7f1d1d/ffffff?text=Image+Error&font=montserrat';
        }}
    />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-semibold text-sky-400 mb-2">{project.name}</h3>
      <p className="text-gray-400 text-sm mb-3 flex-grow">{project.description}</p>
      <div className="mb-4">
        {project.tags && project.tags.map(tag => (
          <span key={tag} className="inline-block bg-slate-700 text-sky-300 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center w-full bg-slate-700 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-75"
      >
        <GitHubIcon />
        View on GitHub
      </a>
    </div>
  </div>
);

export default ProjectCardItem;
