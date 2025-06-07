// src/pages/EducationPage.js
import React from 'react';
import Card from '../components/Card'; // Adjust path as needed

const EducationPage = () => (
  <div className="animate-fadeIn">
    <Card title="Education" className="bg-transparent shadow-none p-0"> {/* Main page title wrapper */}
        <div className="space-y-8">
            {/* University of Johannesburg Card */}
            <div className="bg-slate-800 shadow-xl rounded-lg p-6 hover:shadow-sky-500/40 transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="text-xl font-semibold text-sky-400">University of Johannesburg</h3>
                    <p className="text-gray-400 text-sm sm:text-right mt-1 sm:mt-0">2022 - Present</p>
                </div>
                <p className="text-gray-300">BSc in Mathematical Sciences - Applied Mathematics & Computer Science</p>
            </div>

            {/* Gwenane Secondary School Card */}
            <div className="bg-slate-800 shadow-xl rounded-lg p-6 hover:shadow-sky-500/40 transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <h3 className="text-xl font-semibold text-sky-400">Gwenane Secondary School</h3>
                    <p className="text-gray-400 text-sm sm:text-right mt-1 sm:mt-0">2017 - 2021</p>
                </div>
                <p className="text-gray-300">National Senior Certificate - Bachelor's Pass</p>
            </div>
        </div>
    </Card>
  </div>
);

export default EducationPage;
