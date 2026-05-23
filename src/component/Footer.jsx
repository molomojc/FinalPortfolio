// components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;