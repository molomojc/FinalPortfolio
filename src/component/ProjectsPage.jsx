// components/ProjectsPage.jsx
import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const generateId = () => `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

const initialProjects = [
  { id: generateId(), name: 'Cinema-Streaming App', description: 'A full-stack application for streaming movies and TV shows. Features user authentication, personalized recommendations, and a sleek UI.', imageUrl: 'https://raw.githubusercontent.com/molomojc/netfly/main/Home.png', githubUrl: 'https://github.com/molomojc/netfly', tags: ['React', 'Node.js', 'AI'] },
  { id: generateId(), name: 'MedApp', description: 'A Java Based application to aid doctors diagnose COVID-19 patients using Machine Learning algorithms. using similarity based on xray images.', imageUrl: 'https://raw.githubusercontent.com/molomojc/MiniProject/main/Home.png', githubUrl: 'https://github.com/molomojc/MiniProject', tags: ['Java'] },
  { id: generateId(), name: 'BTCUSD price prediction', description: 'A powerful tool for visualizing complex datasets. Offers interactive charts and dashboards for insightful data analysis.', imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale', githubUrl: 'https://github.com/molomojc/ML_BOT', tags: ['Python'] },
  { id: generateId(), name: 'TCP_CLIENT_SERVER', description: 'An innovative network system, That allows Staff and Student to send and retrieve Images of women whom impacted their lives.', imageUrl: 'https://raw.githubusercontent.com/molomojc/TCP_CONNECTION/main/TCPimg.png', githubUrl: 'https://github.com/molomojc/TCP_CONNECTION', tags: ['JAVA'] },
  { id: generateId(), name: 'HTTP Client-Server', description: 'Handling HTTP requests and responses using Multi-threading.', imageUrl: 'https://raw.githubusercontent.com/molomojc/HTTP_SERVER/main/HTTPimg.png', githubUrl: 'https://github.com/molomojc/HTTP_SERVER', tags: ['JAVA'] },
  { id: generateId(), name: 'UDP_CLIENT-SERVER', description: 'A simple UDP client-server application that allows users to send and receive request over a network using the User Datagram Protocol (UDP).', imageUrl: 'https://raw.githubusercontent.com/molomojc/UDP_CLIENT_SERVER/main/UDP.png', githubUrl: 'https://github.com/molomojc/UDP_CLIENT_SERVER', tags: ['JAVA'] },
  { id: generateId(), name: 'SMTP Client', description: 'A simple SMTP client application that allows users to send to a specific email address using the Simple Mail Transfer Protocol (SMTP).', imageUrl: 'https://raw.githubusercontent.com/molomojc/SMTP_AU/main/SMTP.png', githubUrl: 'https://github.com/molomojc/SMTP_AU', tags: ['JAVA'] },
  { id: generateId(), name: 'PuTTy Server', description: 'A simple Weather application that allows users to get the current weather information for a specific location.', imageUrl: 'https://raw.githubusercontent.com/molomojc/PuTTy_Server/main/PuttyServer.png', githubUrl: 'https://github.com/molomojc/PuTTy_Server', tags: ['JAVA'] },
  { id: generateId(), name: 'GENERICS', description: 'Intro to Generics in Java, a simple application that demonstrates the use of generics in Java programming.', imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale', githubUrl: 'https://github.com/molomojc/JavaGenerics_Intro', tags: ['JAVA'] },
  { id: generateId(), name: 'ArrayList implementation', description: 'demonstrate the implementation of an ArrayList in Java, showcasing basic operations like add, remove, and get.', imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale', githubUrl: 'https://github.com/molomojc/ArrayList_Implementation', tags: ['JAVA'] },
  { id: generateId(), name: 'Queue implementation', description: 'demonstrates the implementation of a Queue in Java, showcasing basic operations like enqueue, dequeue, and peek.', imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale', githubUrl: 'https://github.com/molomojc/Queue_Implementation', tags: ['JAVA'] },
  { id: generateId(), name: 'AVL Tree implementation', description: 'demonstrate the implementation of an AVL Tree in Java, showcasing basic operations like insert, delete, and balance.', imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale', githubUrl: 'https://github.com/molomojc/AVL_TREE_Implementation', tags: ['JAVA'] },
  { id: generateId(), name: 'Doubly Linked List implementation', description: 'demonstrate the implementation of a Doubly Linked List in Java, showcasing basic operations like add, remove, and traverse.', imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale', githubUrl: 'https://github.com/molomojc/DoublyLinkedList_implementation', tags: ['JAVA'] },
  { id: generateId(), name: 'HashTable implementation', description: 'demonstrate the implementation of a HashTable in Java, showcasing basic operations like put, get, and remove.', imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale', githubUrl: 'https://github.com/molomojc/HashTable', tags: ['JAVA'] },
  { id: generateId(), name: 'Heap Sort implementation', description: 'demonstrate the implementation of Heap Sort in Java, showcasing the sorting of an array using the heap data structure.', imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale', githubUrl: 'https://github.com/molomojc/HeapImplementtation', tags: ['JAVA'] },
  { id: generateId(), name: 'Singly Linked List implementation', description: 'demonstrate the implementation of a Singly Linked List in Java, showcasing basic operations like add, remove, and traverse.', imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale', githubUrl: 'https://github.com/molomojc/SInglyLinkedList_Implementation', tags: ['JAVA'] },
  { id: generateId(), name: 'Skip List implementation', description: 'demonstrate the implementation of a Skip List in Java, showcasing basic operations like insert, delete, and search.', imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale', githubUrl: 'https://github.com/molomojc/SkipList_Implementation', tags: ['JAVA'] },
  { id: generateId(), name: 'Tree implementation', description: 'demonstrate the implementation of a Tree in Java, showcasing basic operations like insert, delete, and traverse.', imageUrl: 'https://specials-images.forbesimg.com/imageserve/64d24936a0c9451a52034c63/Training-machine-learning-model-concept/960x0.jpg?fit=scale', githubUrl: 'https://github.com/molomojc/TreeImplementation', tags: ['JAVA'] }
];

const ProjectsPage = () => {
  const [projects, setProjects] = useState(initialProjects);

  const addProject = (newProject) => {
    setProjects(prev => [newProject, ...prev]);
  };

  return (
    <section className="py-24 px-6 md:px-20" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <span className="text-xs font-bold tracking-[0.2em] text-[#5d5f5f] uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-2 text-[#111217]">Selected Work</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-[#e3e2e7]">
          
          <p className="text-[#2f3034] mt-6 mb-6 text-base">
            Here are some of the projects I've been working on — full-stack applications, ML models, networking protocols, and data structures implementations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;