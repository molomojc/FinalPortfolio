// src/pages/ContactPage.js
import React from 'react';
import Card from '../components/Card'; // Adjust path as needed

const ContactPage = () => (
  <div className="animate-fadeIn">
    <Card title="Contact Us">
      <p>
        Have questions or feedback? We'd love to hear from you!
        Since this is a demo, there isn't a real contact form, but here's how you might structure one.
      </p>
      <form className="space-y-4 mt-4" onSubmit={(e) => {
          e.preventDefault();
          const messageBox = document.createElement('div');
          messageBox.style.position = 'fixed'; messageBox.style.top = '20px'; messageBox.style.left = '50%';
          messageBox.style.transform = 'translateX(-50%)'; messageBox.style.padding = '15px 25px';
          messageBox.style.backgroundColor = '#10B981'; messageBox.style.color = 'white';
          messageBox.style.borderRadius = '8px'; messageBox.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
          messageBox.style.zIndex = '10000';
          messageBox.textContent = 'Form submitted (demo)!';
          document.body.appendChild(messageBox);
          setTimeout(() => { if (document.body.contains(messageBox)) document.body.removeChild(messageBox); }, 3000);
          e.target.reset(); 
      }}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
          <input type="text" name="name" id="name" className="w-full p-2 rounded-md bg-slate-700 border border-slate-600 focus:ring-sky-500 focus:border-sky-500 text-gray-100" placeholder="John Doe" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
          <input type="email" name="email" id="email" className="w-full p-2 rounded-md bg-slate-700 border border-slate-600 focus:ring-sky-500 focus:border-sky-500 text-gray-100" placeholder="you@example.com" required />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
          <textarea name="message" id="message" rows="4" className="w-full p-2 rounded-md bg-slate-700 border border-slate-600 focus:ring-sky-500 focus:border-sky-500 text-gray-100" placeholder="Your message..." required></textarea>
        </div>
        <button type="submit" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-75">
          Send Message
        </button>
      </form>
    </Card>
  </div>
);

export default ContactPage;
