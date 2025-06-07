// src/pages/ProjectsPage.js
import React from 'react';
import Card from '../components/Card'; // Adjust path as needed
import ProjectCardItem from '../components/ProjectCardItem'; // Adjust path
import { generateId } from '../utils/helpers'; // Adjust path

const demoProjects = [
  {
    id: generateId(),
    name: 'Awesome Project Alpha',
    description: 'A revolutionary app that changes the way you do things. Built with cutting-edge technology and a focus on user experience.',
    imageUrl: 'https://placehold.co/600x400/0284c7/ffffff?text=Project+Alpha&font=montserrat', 
    githubUrl: 'https://github.com/username/awesome-project-alpha', // Replace
    tags: ['React', 'Node.js', 'AI']
  },
  {
    id: generateId(),
    name: 'Service Bot Beta',
    description: 'An automated service bot designed to streamline customer support and improve response times. Integrates with multiple platforms.',
    imageUrl: 'https://placehold.co/600x400/16a34a/ffffff?text=Service+Bot&font=montserrat', 
    githubUrl: 'https://github.com/username/service-bot-beta', // Replace
    tags: ['Python', 'NLP', 'Cloud']
  },
  {
    id: generateId(),
    name: 'Data Visualizer Gamma',
    description: 'A powerful tool for visualizing complex datasets. Offers interactive charts and dashboards for insightful data analysis.',
    imageUrl: 'https://placehold.co/600x400/c026d3/ffffff?text=DataViz+Gamma&font=montserrat', 
    githubUrl: 'https://github.com/username/dataviz-gamma', // Replace
    tags: ['D3.js', 'JavaScript', 'Big Data']
  }
];

const ProjectsPage = () => (
  <div className="animate-fadeIn">
    <Card title="My Projects" className="bg-transparent shadow-none p-0"> {/* Main page title wrapper */}
      <p className="text-lg text-gray-300 mb-8">
        Here are some of the projects I've been working on. Feel free to explore them on GitHub.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {demoProjects.map(project => (
          <ProjectCardItem key={project.id} project={project} />
        ))}
      </div>
    </Card>
  </div>
);

export default ProjectsPage;
