// components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
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
              src="https://lh3.googleusercontent.com/aida/ADBb0uhXKCjJ8Ueftxzer3kTqGPXpBJqMbyZeCW5a-_UYapUzZHsHjegkbadToaE67yO2BeuGsS2ZR5CMGw_ttnbclkYHPdzuQrgeLXSDJ5nOK3SIZMiyWYsp2gHCtBQnpWjsRXOUQsfOQ1Bzwa0AZRqHLb_hUSvev5Jbeypn-pdeakH33JkaMbsSEYLEu2oqrSWHUb58K3HW5w1l2v8ICri5fg_BAjthkT-uL9kh7cZo_HPfN5xgcayD14FV57r"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .mask-gradient {
          mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
        }
      `}</style>
    </header>
  );
};

export default Hero;