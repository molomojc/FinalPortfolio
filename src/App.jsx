// App.jsx
import React, { useState } from 'react';
import ProjectsPage from './component/ProjectsPage';
import Navbar from './component/NavBar';
import Hero from './component/Hero';
import About from './component/about';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="bg-[#faf8fe] text-[#111217] selection:bg-[#111217] selection:text-[#faf8fe]">
      <Navbar />
      <Hero />
      <About />
      <ProjectsPage />
      {/* Status Banner */}
      <div className="px-6 md:px-20 mb-16 max-w-7xl mx-auto">
        <div className="bg-[#eeedf3] py-3 px-6 border-l-4 border-[#111217] flex items-center gap-3">
          <span className="material-symbols-outlined text-lg text-[#111217]">info</span>
          <p className="text-xs font-bold uppercase tracking-wide text-[#111217]">Please Note: This web is still in production</p>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;