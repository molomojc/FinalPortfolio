// components/About.jsx
import React from 'react';

const About = () => {
  return (
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
  );
};

export default About;