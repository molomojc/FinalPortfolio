// components/Navbar.jsx
import React from 'react';


function handleLinkedInClick() {
  window.open('https://www.linkedin.com/in/jacob-molomo-002428242/', '_blank');
}

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-[#c4c7c8]/30 bg-[#faf8fe]/80">
      <div className="flex justify-between items-center px-6 md:px-20 py-5 max-w-7xl mx-auto">
        <div className="font-bold text-2xl tracking-tighter text-[#111217]">JACOB MOLOMO</div>
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-xs font-semibold uppercase tracking-wider border-b border-[#111217] text-[#111217]">Home</a>
          <a href="#about" className="text-xs font-semibold uppercase tracking-wider text-[#444748] hover:text-[#111217] transition">About</a>
          <a href="#projects" className="text-xs font-semibold uppercase tracking-wider text-[#444748] hover:text-[#111217] transition">Projects</a>
          <a href="#contact" className="text-xs font-semibold uppercase tracking-wider text-[#444748] hover:text-[#111217] transition">Contact</a>
        </div>
        <button  onClick={handleLinkedInClick}   className="text-xs font-semibold uppercase tracking-wider px-5 py-2 border border-[#111217] text-[#111217] hover:bg-[#111217] hover:text-white transition">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;