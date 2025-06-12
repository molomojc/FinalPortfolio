import React from 'react';


const Card = ({ title, children, className }) => (
    <div className={`card ${className}`}>
      {title && <h2 className="card-title">{title}</h2>}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
  
  
  const EducationPage = () => (
    <div className="page-container">
      <Card title="Education" className="education-card">
          <div className="education-items">
              <div className="education-item">
                  <div className="education-header">
                      <h3 className="institution">University of Johannesburg</h3>
                      <p className="duration">2022 - Present</p>
                  </div>
                  <p className="degree">BSc in Mathematical Sciences - Applied Mathematics & Computer Science</p>
              </div>
              <div className="education-item">
                  <div className="education-header">
                      <h3 className="institution">Gwenane Secondary School</h3>
                      <p className="duration">2017 - 2021</p>
                  </div>
                  <p className="degree">National Senior Certificate - Bachelor's Pass</p>
              </div>
          </div>
      </Card>
    </div>
  );

  export default EducationPage;