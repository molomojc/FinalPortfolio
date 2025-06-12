import React from 'react';



// --- Page Components ---
const Card = ({ title, children, className }) => (
  <div className={`card ${className}`}>
    {title && <h2 className="card-title">{title}</h2>}
    <div className="card-content">
      {children}
    </div>
  </div>
);

//onlick function which direct to my linkedin profile
function handleLinkedInClick() {
  window.open('https://www.linkedin.com/in/jacob-molomo-002428242/', '_blank');
}




const ContactPage = () => (
  <div className="page-container">
    <Card title="Contact Us">
      <form className="contact-form" onSubmit={(e) => {
          handleLinkedInClick();
          e.preventDefault(); // Prevent default form submission
      }}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" name="name" id="name" className="form-input" placeholder="John Doe" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input type="email" name="email" id="email" className="form-input" placeholder="you@example.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea name="message" id="message" rows="4" className="form-textarea" placeholder="Your message..." required></textarea>
        </div>
        <button type="submit" className="submit-button" >
          Send Message
        </button>
      </form>
    </Card>
  </div>
);

export default ContactPage;