import './Process.css';
import { useState } from 'react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(null);

  const timelineSteps = [
    {
      id: 1,
      title: "Initial Consultation",
      description: "Understand your goals and preferences",
      details: "Our experts will meet with you to discuss your academic background, career aspirations, and destination preferences to create a personalized plan.",
      icon: "👋"
    },
    {
      id: 2,
      title: "Profile Assessment",
      description: "Evaluate qualifications and eligibility",
      details: "We conduct a thorough assessment of your academic records, work experience, language proficiency, and other relevant qualifications to determine suitable options.",
      icon: "📋"
    },
    {
      id: 3,
      title: "Documentation",
      description: "Prepare and verify required documents",
      details: "Our team assists you in gathering, preparing, and verifying all necessary documents including academic transcripts, recommendation letters, and financial statements.",
      icon: "📑"
    },
    {
      id: 4,
      title: "Application",
      description: "Submit applications and track progress",
      details: "We handle the submission of your applications to selected institutions, ensuring all requirements are met and deadlines are respected. You'll receive regular updates on your application status.",
      icon: "📤"
    },
    {
      id: 5,
      title: "Visa Assistance",
      description: "Guide through visa application process",
      details: "Our visa specialists provide comprehensive support for your visa application, including document preparation, interview coaching, and application submission guidance.",
      icon: "✈️"
    }
  ];

  const handleStepClick = (id) => {
    setActiveStep(activeStep === id ? null : id);
  };

  return (
    <div className="process">
      <h1>Our Process</h1>
      <div className="timeline-container">
        <div className="timeline-progress-bar">
          <div className="timeline-progress" style={{ width: `${(activeStep || 0) * 20}%` }}></div>
        </div>
        <section className="timeline">
          {timelineSteps.map((step) => (
            <div 
              key={step.id} 
              className={`timeline-item ${activeStep === step.id ? 'active' : ''}`}
              onClick={() => handleStepClick(step.id)}
            >
              <div className="timeline-icon">{step.icon}</div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p className="timeline-description">{step.description}</p>
                {activeStep === step.id && (
                  <div className="timeline-details">
                    <p>{step.details}</p>
                  </div>
                )}
              </div>
              <div className="timeline-number">{step.id}</div>
            </div>
          ))}
        </section>
      </div>

      <section className="requirements">
        <h2>Required Documents</h2>
        <ul>
          <li>Educational Certificates</li>
          <li>Language Test Scores</li>
          <li>Financial Statements</li>
          <li>Passport and Photos</li>
        </ul>
      </section>
    </div>
  );
};

export default Process;