// src/components/Card.js
import React from 'react';

const Card = ({ title, children, className }) => (
  <div className={`bg-slate-800 shadow-xl rounded-lg p-6 mb-6 hover:shadow-sky-500/30 transition-shadow duration-300 ${className}`}>
    {title && <h2 className="text-2xl font-semibold mb-4 text-sky-400">{title}</h2>}
    <div className="space-y-4 text-gray-300">
      {children}
    </div>
  </div>
);

export default Card;
