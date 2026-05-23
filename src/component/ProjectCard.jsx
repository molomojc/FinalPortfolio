// components/ProjectCard.jsx
import React from 'react';

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.074 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ProjectCard = ({ project }) => {
  const handleImageError = (e) => {
    e.target.src = 'https://placehold.co/600x400/2f3034/ffffff?text=Project+Preview&font=montserrat';
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md border border-[#e3e2e7] flex flex-col">
      <img
        src={project.imageUrl}
        alt={project.name}
        className="w-full h-48 object-cover bg-[#eeedf3] transition-transform duration-500 hover:scale-105"
        onError={handleImageError}
      />
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold tracking-tight mb-2 text-[#111217]">{project.name}</h3>
        <p className="text-sm text-[#2f3034] leading-relaxed mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-2.5 py-0.5 bg-[#eeedf3] text-[#111217] text-xs font-semibold rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider border-b border-[#111217] pb-1 w-fit text-[#111217] hover:opacity-70 transition"
        >
          <GitHubIcon />
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;