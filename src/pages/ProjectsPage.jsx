import React, { useState } from 'react';


//const GEMINI_API_KEY = process.env;


const generateId = () => `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

//function to convert github url image to a raw image url

const initialProjects = [
  {
    id: generateId(),
    name: 'Cinema-Streaming App',
    description: 'A full-stack application for streaming movies and TV shows. Features user authentication, personalized recommendations, and a sleek UI.',
    imageUrl: 'https://raw.githubusercontent.com/molomojc/netfly/main/Home.png',
    githubUrl: 'https://github.com/molomojc/netfly',
    tags: ['React', 'Node.js', 'AI']
  },
  {
    id: generateId(),
    name: 'MedApp',
    description: 'A Java Based application to aid doctors diagnose COVID-19 patients using Machine Learning algorithms. using similarity based on xray images.',
    imageUrl: 'https://raw.githubusercontent.com/molomojc/MiniProject/main/Home.png',
    githubUrl: 'https://github.com/molomojc/MiniProject',
    tags: ['Java']
  },
  {
    id: generateId(),
    name: 'BTCUSD price prediction',
    description: 'A powerful tool for visualizing complex datasets. Offers interactive charts and dashboards for insightful data analysis.',
    imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale',
    githubUrl: 'https://github.com/molomojc/ML_BOT',
    tags: ['Python']
  },
  {
    id: generateId(),
    name: 'TCP_CLient_SERVER',
    description: 'An innovative network system, That allows Staff and Student to send and retrieve Images of women whom impacted their lives.',
    imageUrl: 'https://raw.githubusercontent.com/molomojc/TCP_CONNECTION/main/TCPimg.png',
    githubUrl: 'https://github.com/molomojc/TCP_CONNECTION',
    tags: ['JAVA']
  },
  {
    id: generateId(),
    name: 'HTTP Client-Server',
    description: 'Handling HTTP requests and responses using Multi-threading.',
    imageUrl: 'https://raw.githubusercontent.com/molomojc/HTTP_SERVER/main/HTTPimg.png',
    githubUrl: 'https://github.com/molomojc/HTTP_SERVER',
    tags: ['JAVA']
  },
  {
    id: generateId(),
    name: 'UDP_CLIENT-SERVER',
    description: 'A simple UDP client-server application that allows users to send and receive request over a network using the User Datagram Protocol (UDP).',
    imageUrl: 'https://raw.githubusercontent.com/molomojc/UDP_CLIENT_SERVER/main/UDP.png',
    githubUrl: 'https://github.com/molomojc/UDP_CLIENT_SERVER',
    tags: ['JAVA']
  },
  {
    id: generateId(),
    name: 'SMTP Client',
    description: 'A simple SMTP client application that allows users to send to a specific email address using the Simple Mail Transfer Protocol (SMTP).',
    imageUrl: 'https://raw.githubusercontent.com/molomojc/SMTP_AU/main/SMTP.png',
    githubUrl: 'https://github.com/molomojc/SMTP_AU',
    tags: ['JAVA']
  },
  {
    id: generateId(),
    name: 'PuTTy Server',
    description: 'A simple Weather application that allows users to get the current weather information for a specific location.',
    imageUrl: 'https://raw.githubusercontent.com/molomojc/PuTTy_Server/main/PuttyServer.png',
    githubUrl: 'https://github.com/molomojc/PuTTy_Server',
    tags: ['JAVA']
  },
  {
    id: generateId(),
    name: 'GENERICS',
    description: 'Intro to Gnerics in Java, a simple application that demonstrates the use of generics in Java programming.',
    imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale',
    githubUrl: 'https://github.com/molomojc/JavaGenerics_Intro',
    tags: ['JAVA']
  },
  {
    id: generateId(),
    name: 'ArrayList implementation',
    description: 'demostrate the implementation of an ArrayList in Java, showcasing basic operations like add, remove, and get.',
    imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale',
    githubUrl: 'https://github.com/molomojc/ArrayList_Implementation',
    tags: ['JAVA']
  },
  {
    id: generateId(),
    name: 'Queue implementation',
    description: 'demostrates the implementation of a Queue in Java, showcasing basic operations like enqueue, dequeue, and peek.',
    imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale',
    githubUrl: 'https://github.com/molomojc/Queue_Implementation',
    tags: ['JAVA']
  },
  {
    id: generateId(),
    name: 'AVL Tree implementation',
    description: 'demostrate the implementation of an AVL Tree in Java, showcasing basic operations like insert, delete, and balance.',
    imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale',
    githubUrl: 'https://github.com/molomojc/AVL_TREE_Implementation',
    tags: ['JAVA']
  },
  {
    id: generateId(),
    name: 'Doubly Linked List implementation',
    description: 'demostrate the implementation of a Doubly Linked List in Java, showcasing basic operations like add, remove, and traverse.',
    imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale',
    githubUrl: 'https://github.com/molomojc/DoublyLinkedList_implementation',
    tags: ['JAVA']
  },
  {
    id: generateId(),
    name: 'HashTable implementation',
    description: 'demostrate the implementation of a HashTable in Java, showcasing basic operations like put, get, and remove.',
    imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale',
    githubUrl: 'https://github.com/molomojc/HashTable',
    tags: ['JAVA']
  },
  {
    id: generateId(),
    name: 'Heap Sort implementation',
    description: 'demostrate the implementation of Heap Sort in Java, showcasing the sorting of an array using the heap data structure.',
    imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale',
    githubUrl: 'https://github.com/molomojc/HeapImplementtation',
    tags: ['JAVA']
  }
  ,
  {
    id: generateId(),
    name: 'Singly Linked List implementation',
    description: 'demostrate the implementation of a Singly Linked List in Java, showcasing basic operations like add, remove, and traverse.',
    imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale',
    githubUrl: 'https://github.com/molomojc/SInglyLinkedList_Implementation',
    tags: ['JAVA']
  }
  ,
  {
    id: generateId(),
    name: 'Skip List implementation',
    description: 'demostrate the implementation of a Skip List in Java, showcasing basic operations like insert, delete, and search.',
    imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale',
    githubUrl: 'https://github.com/molomojc/SkipList_Implementation',
    tags: ['JAVA']
  }
  ,
  {
    id: generateId(),
    name: 'Tree implementation',
    description: 'demostrate the implementation of a Tree in Java, showcasing basic operations like insert, delete, and traverse.',
    imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale',
    githubUrl: 'https://github.com/molomojc/TreeImplementation',
    tags: ['JAVA']
  }
];

const Card = ({ title, children, className }) => (
  <div className={`card ${className}`}>
    {title && <h2 className="card-title">{title}</h2>}
    <div className="card-content">
      {children}
    </div>
  </div>
);

const GitHubIcon = ({ className = "w-5 h-5 mr-2" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.074 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.379.201 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);
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
    const [api, setApi] = useState('');

    const handleGenerateProject = async (e) => {
      e.preventDefault();
      if (!idea.trim()) {
          setError("Please enter a project idea first.");
          return;
      }
      setIsGenerating(true);
      setError('');

      const prompt = `Generate a creative project idea based on the concept: "${idea}".
Provide a catchy "name", a short "description" (1-2 sentences), and a list of 3-4 technology "tags".`;

      const payload = {
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          generationConfig: {
              responseMimeType: "application/json",
              responseSchema: {
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
          }
      };

      try {
         
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
          
          if (result.candidates && result.candidates[0]?.content?.parts?.[0]?.text) {
              const generatedData = JSON.parse(result.candidates[0].content.parts[0].text);
              const newProject = {
                  id: generateId(),
                  name: `✨ ${generatedData.name}`,
                  description: generatedData.description,
                  tags: generatedData.tags,
                  imageUrl: `https://venturebeat.com/wp-content/uploads/2023/05/Untitled-design-78.png?w=750`,
                  githubUrl: 'https://github.com/molomojc'
              };
              setProjects(prevProjects => [newProject, ...prevProjects]);
              setIdea('');
          } else {
              throw new Error("Unexpected response structure from API.");
          }
      } catch (err) {
          console.error("Error generating project:", err);
          setError("Sorry, we couldn't brainstorm a project right now. Please try again.");
      } finally {
          setIsGenerating(false);
      }
  };
    
  const SparklesIcon = ({ className = "w-5 h-5 mr-2" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM18 12.75l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 18l-1.035.259a3.375 3.375 0 00-2.456 2.456L18 21.75l-.259-1.035a3.375 3.375 0 00-2.456-2.456L14.25 18l1.035-.259a3.375 3.375 0 002.456-2.456L18 12.75z" />
    </svg>
  );

 

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
                        <input
                            type="text"
                            value={api}
                            onChange={(e) => setApi(e.target.value)}
                            placeholder="API Key "
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

export default ProjectsPage;