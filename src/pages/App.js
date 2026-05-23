import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll reveal for sections
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    // Navbar shadow on scroll
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 50) {
        nav?.classList.add('shadow-md');
      } else {
        nav?.classList.remove('shadow-md');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#faf8fe] text-[#111217] font-hanken">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-[#c4c7c8]/30 bg-[#faf8fe]/80">
        <div className="flex justify-between items-center px-6 md:px-20 py-5 max-w-7xl mx-auto">
          <div className="font-bold text-2xl tracking-tighter text-[#111217]">JACOB MOLOMO</div>
          <div className="hidden md:flex items-center gap-10">
            <a href="#" className="text-xs font-semibold uppercase tracking-wider border-b border-[#111217] text-[#111217]">Home</a>
            <a href="#about" className="text-xs font-semibold uppercase tracking-wider text-[#444748] hover:text-[#111217] transition">About</a>
            <a href="#projects" className="text-xs font-semibold uppercase tracking-wider text-[#444748] hover:text-[#111217] transition">Projects</a>
            <a href="#contact" className="text-xs font-semibold uppercase tracking-wider text-[#444748] hover:text-[#111217] transition">Contact</a>
          </div>
          <button className="text-xs font-semibold uppercase tracking-wider px-5 py-2 border border-[#111217] text-[#111217] hover:bg-[#111217] hover:text-white transition">
            Resume
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-44 pb-28 px-6 md:px-20 min-h-screen flex items-center">
        <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto w-full">
          <div className="col-span-12 md:col-span-7">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#5d5f5f] uppercase">Introduction</span>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mt-6 mb-6 text-[#111217]">
              I am <span className="text-[#444748]">Jacob Molomo</span>
            </h1>
            <p className="text-xl text-[#2f3034] mb-10 max-w-xl leading-relaxed">
              Aspiring Software Engineer | Data Scientist. Bridging the gap between mathematical precision and human-centric software solutions.
            </p>
            <div className="flex gap-8">
              <a href="#projects" className="bg-[#111217] text-white px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#2f3034] transition">
                View Projects
              </a>
              <a href="#about" className="border-b border-[#111217] pb-1 text-xs font-bold uppercase tracking-wider text-[#111217] hover:opacity-70">
                Learn More
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 relative mt-10 md:mt-0">
            <div className="w-full max-w-md aspect-[0.75] bg-[#eeedf3] overflow-hidden rounded-xl relative group">
              <img
                alt="Jacob Molomo"
                className="w-full h-full object-cover mask-gradient grayscale group-hover:grayscale-0 transition duration-700"
                src="https://lh3.googleusercontent.com/aida/ADBb0uhXKCjJ8Ueftxzer3kTqGPXpBJqMbyZeCW5a-_UYapUzZHsHjegkbadToaE67yO2BeuGsS2ZR5CMGw_ttnbclkYHPdzuQrgeLXSDJ5nOK3SIZMiyWYsp2gHCtBQnpWjsRXOUQsfOQ1Bzwa0AZRqHLb_hUSvev5Jbeypn-pdeakH33JkaMbsSEYLEu2oqrSWHUb58K3HW5w1l2v8ICri5fg_BAjthkT-uL9kh7cZo_HPfNx5gcayD14FV57r"
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-24 px-6 md:px-20 bg-white" id="about">
        <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto">
          <div className="col-span-12 md:col-span-4">
            <h2 className="text-3xl font-medium tracking-tight text-[#111217]">Academic Foundation</h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <div className="space-y-8">
              <p className="text-lg text-[#2f3034] leading-relaxed">
                Holding a <span className="font-semibold text-[#111217]">BSc in Mathematical Sciences</span> in Applied Maths & Computer Science, my approach to engineering is rooted in rigorous logic and analytical depth.
              </p>
              <p className="text-base text-[#2f3034] leading-relaxed">
                I specialize in translating complex mathematical models into efficient, scalable software. Whether it's architecting data pipelines or crafting intuitive user interfaces, my goal is always to create tools that feel both powerful and effortlessly human.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5d5f5f]">Core Expertise</span>
                  <ul className="mt-4 space-y-2 text-[#111217] font-medium">
                    <li className="flex items-center gap-2">✓ Software Engineering</li>
                    <li className="flex items-center gap-2">✓ Applied Mathematics</li>
                    <li className="flex items-center gap-2">✓ Data Analysis</li>
                  </ul>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#5d5f5f]">Technical Stack</span>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Python', 'SQL', 'TensorFlow', 'React', 'Node.js'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-[#eeedf3] text-[#111217] text-sm rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section Preview */}
      <section className="py-24 px-6 md:px-20" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-[0.2em] text-[#5d5f5f] uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-2 text-[#111217]">Selected Work</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-[#e3e2e7]">
            <p className="text-[#2f3034] mb-6 text-base">
              Here are some of the projects I've been working on — full-stack applications, ML models, networking protocols, and data structures implementations.
            </p>
            
            {/* Simple projects grid - you can add more projects here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Cinema-Streaming App', description: 'Full-stack streaming app with user authentication and recommendations.', tags: ['React', 'Node.js', 'AI'] },
                { name: 'MedApp', description: 'Java-based COVID-19 diagnosis using ML on X-ray images.', tags: ['Java', 'ML'] },
                { name: 'BTCUSD Prediction', description: 'Powerful tool for visualizing and predicting Bitcoin prices.', tags: ['Python', 'TensorFlow'] }
              ].map((project, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden border border-[#e3e2e7] hover:shadow-md transition">
                  <div className="h-48 bg-gradient-to-br from-[#eeedf3] to-[#e3e2e7] flex items-center justify-center">
                    <span className="text-[#5d5f5f]">Project Preview</span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2 text-[#111217]">{project.name}</h3>
                    <p className="text-sm text-[#2f3034] mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-[#eeedf3] text-[#111217] text-xs rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Status Banner */}
      <div className="px-6 md:px-20 mb-16 max-w-7xl mx-auto">
        <div className="bg-[#eeedf3] py-3 px-6 border-l-4 border-[#111217] flex items-center gap-3">
          <span className="material-symbols-outlined text-lg text-[#111217]">info</span>
          <p className="text-xs font-bold uppercase tracking-wide text-[#111217]">Please Note: This web is still in production</p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="pb-24 px-6 md:px-20 text-center" id="contact">
        <div className="max-w-5xl mx-auto border-t border-[#e3e2e7] pt-20">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-10 text-[#111217]">
            Let's build something significant.
          </h2>
          <div className="flex justify-center">
            <a href="mailto:hello@jacobmolomo.com" className="group">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5d5f5f] block mb-2 group-hover:text-[#111217] transition">
                Email Me
              </span>
              <div className="text-2xl md:text-4xl font-medium border-b-2 border-transparent group-hover:border-[#111217] pb-1 text-[#111217]">
                hello@jacobmolomo.com
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#eeedf3] py-10 px-6 md:px-20 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-6">
          <div className="text-xs font-bold tracking-wide text-[#111217]">JACOB MOLOMO</div>
          <div className="flex gap-8 text-sm text-[#2f3034]">
            <a href="#" className="hover:text-[#111217] transition">LinkedIn</a>
            <a href="#" className="hover:text-[#111217] transition">GitHub</a>
            <a href="#" className="hover:text-[#111217] transition">Twitter</a>
            <a href="#" className="hover:text-[#111217] transition">Email</a>
          </div>
          <div className="text-sm text-[#2f3034]">© 2024 Jacob Molomo. Built with precision.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;