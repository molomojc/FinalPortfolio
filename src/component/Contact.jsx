// components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
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
              jacobmolomo8@gmail.com
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;