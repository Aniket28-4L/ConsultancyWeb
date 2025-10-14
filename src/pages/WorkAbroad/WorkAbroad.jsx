import './WorkAbroad.css';
import { useState } from 'react';

const WorkAbroad = () => {
  const [activeCountry, setActiveCountry] = useState('canada');
  const [activeTab, setActiveTab] = useState('overview');

  const countries = [
    { id: 'canada', name: 'Canada', flag: '🇨🇦' },
    { id: 'australia', name: 'Australia', flag: '🇦🇺' },
    { id: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
    { id: 'germany', name: 'Germany', flag: '🇩🇪' },
    { id: 'singapore', name: 'Singapore', flag: '🇸🇬' },
  ];

  const countryData = {
    canada: {
      overview: 'Canada offers excellent work opportunities with its Express Entry system for skilled workers. With high quality of life, universal healthcare, and multicultural environment, it\'s a top destination for professionals.',
      industries: ['Technology', 'Healthcare', 'Finance', 'Engineering', 'Education'],
      requirements: ['Express Entry Profile', 'Language Proficiency (IELTS/CELPIP)', 'Education Assessment', 'Work Experience Proof'],
      salary: 'CAD 60,000 - 120,000 annually depending on profession and location',
      benefits: ['Universal Healthcare', '1-year path to Permanent Residency', 'Family-friendly policies', 'Strong social security']
    },
    australia: {
      overview: 'Australia\'s points-based immigration system welcomes skilled workers in various fields. With its strong economy, excellent weather, and high standard of living, it remains a popular choice for expatriates.',
      industries: ['Mining', 'Healthcare', 'IT', 'Construction', 'Education'],
      requirements: ['Skills Assessment', 'Points-Based Eligibility', 'English Proficiency', 'Health Examination'],
      salary: 'AUD 70,000 - 130,000 annually depending on profession and location',
      benefits: ['Universal Healthcare', 'Excellent work-life balance', 'Outdoor lifestyle', 'Strong economy']
    },
    uk: {
      overview: 'The UK\'s new points-based immigration system offers pathways for skilled workers. With its rich history, cultural diversity, and global business connections, it provides excellent career advancement opportunities.',
      industries: ['Finance', 'Technology', 'Healthcare', 'Creative Arts', 'Research'],
      requirements: ['Job Offer from Approved Sponsor', 'Skill Level Requirements', 'English Language Proficiency', 'Salary Threshold'],
      salary: '£30,000 - £80,000 annually depending on profession and location',
      benefits: ['National Health Service (NHS)', 'Cultural diversity', 'Strong financial sector', 'World-class education']
    },
    germany: {
      overview: 'Germany\'s strong economy and engineering excellence make it attractive for skilled professionals. With its EU membership, central location, and high quality of life, it offers excellent career prospects.',
      industries: ['Engineering', 'Automotive', 'IT', 'Renewable Energy', 'Pharmaceuticals'],
      requirements: ['EU Blue Card', 'German Language Skills', 'Recognized Qualifications', 'Job Contract'],
      salary: '€45,000 - €90,000 annually depending on profession and location',
      benefits: ['Universal Healthcare', 'Strong work protections', 'Excellent public transportation', 'Central European location']
    },
    singapore: {
      overview: 'Singapore\'s global business hub status attracts professionals from around the world. With its strategic location, tax benefits, and modern infrastructure, it offers excellent opportunities in finance and technology.',
      industries: ['Finance', 'Technology', 'Shipping', 'Healthcare', 'Education'],
      requirements: ['Employment Pass', 'Qualifying Salary', 'Educational Qualifications', 'Work Experience'],
      salary: 'SGD 60,000 - 150,000 annually depending on profession and seniority',
      benefits: ['Low tax rates', 'Modern infrastructure', 'Safe environment', 'Strategic location in Asia']
    }
  };

  return (
    <div className="work-abroad">
      <div className="hero-section">
        <h1>Work Abroad</h1>
        <p className="hero-text">Discover global career opportunities and take your professional journey to new heights</p>
      </div>

      <section className="country-selector">
        <h2>Explore Opportunities by Country</h2>
        <div className="country-selector-wrapper">
          <div className="country-tabs">
            {countries.map(country => (
              <button 
                key={country.id}
                className={`country-tab ${activeCountry === country.id ? 'active' : ''}`}
                onClick={() => setActiveCountry(country.id)}
              >
                <span className="country-flag">{country.flag}</span>
                <span className="country-name">{country.name}</span>
                {activeCountry === country.id && <span className="active-indicator"></span>}
              </button>
            ))}
          </div>
        </div>

        <div className="country-content">
          <div className="country-nav">
            <button 
              className={`nav-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`nav-button ${activeTab === 'industries' ? 'active' : ''}`}
              onClick={() => setActiveTab('industries')}
            >
              Key Industries
            </button>
            <button 
              className={`nav-button ${activeTab === 'requirements' ? 'active' : ''}`}
              onClick={() => setActiveTab('requirements')}
            >
              Requirements
            </button>
            <button 
              className={`nav-button ${activeTab === 'benefits' ? 'active' : ''}`}
              onClick={() => setActiveTab('benefits')}
            >
              Benefits
            </button>
          </div>

          <div className="country-details">
            {activeTab === 'overview' && (
              <div className="tab-content overview">
                <h3>Working in {countries.find(c => c.id === activeCountry).name}</h3>
                <p>{countryData[activeCountry].overview}</p>
                <div className="salary-info">
                  <h4>Average Salary Range:</h4>
                  <p className="salary">{countryData[activeCountry].salary}</p>
                </div>
              </div>
            )}

            {activeTab === 'industries' && (
              <div className="tab-content industries">
                <h3>Key Industries in {countries.find(c => c.id === activeCountry).name}</h3>
                <div className="industry-list">
                  {countryData[activeCountry].industries.map((industry, index) => (
                    <div key={index} className="industry-item">
                      <div className="industry-icon">🏢</div>
                      <div className="industry-name">{industry}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div className="tab-content requirements">
                <h3>Visa Requirements for {countries.find(c => c.id === activeCountry).name}</h3>
                <ul className="requirements-list">
                  {countryData[activeCountry].requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="tab-content benefits">
                <h3>Benefits of Working in {countries.find(c => c.id === activeCountry).name}</h3>
                <ul className="benefits-list">
                  {countryData[activeCountry].benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="job-markets">
        <h2>Global Job Markets</h2>
        <div className="market-grid">
          <div className="market-card">
            <div className="card-icon">💻</div>
            <h3>Tech Industry</h3>
            <p>Software Development, Data Science, AI</p>
            <ul>
              <li>High Demand Skills</li>
              <li>Competitive Salaries</li>
              <li>Growth Opportunities</li>
            </ul>
          </div>
          <div className="market-card">
            <div className="card-icon">🏥</div>
            <h3>Healthcare</h3>
            <p>Medical Professionals, Nursing, Research</p>
            <ul>
              <li>Global Demand</li>
              <li>Professional Development</li>
              <li>Work-Life Balance</li>
            </ul>
          </div>
          <div className="market-card">
            <div className="card-icon">🏦</div>
            <h3>Finance</h3>
            <p>Banking, Investment, FinTech</p>
            <ul>
              <li>International Exposure</li>
              <li>Lucrative Compensation</li>
              <li>Career Advancement</li>
            </ul>
          </div>
          <div className="market-card">
            <div className="card-icon">🔧</div>
            <h3>Engineering</h3>
            <p>Civil, Mechanical, Electrical</p>
            <ul>
              <li>Infrastructure Projects</li>
              <li>Technical Innovation</li>
              <li>Global Standards</li>
            </ul>
          </div>
        </div>
      </section>



      <section className="testimonials">
        <h2>Success Stories</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <div className="testimonial-image">👨‍💼</div>
            <p className="testimonial-text">"The consultancy helped me secure a software engineering position in Canada. Their guidance throughout the visa process was invaluable."</p>
            <p className="testimonial-author">- Michael Chen, Software Engineer</p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-image">👩‍⚕️</div>
            <p className="testimonial-text">"As a nurse, I found excellent opportunities in Australia through their specialized healthcare placement program."</p>
            <p className="testimonial-author">- Sarah Johnson, Registered Nurse</p>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-image">👨‍🔧</div>
            <p className="testimonial-text">"Their expertise in German work permits helped me transition smoothly into my engineering role in Munich."</p>
            <p className="testimonial-author">- Ahmed Hassan, Mechanical Engineer</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start Your International Career?</h2>
        <p>Our experts will guide you through every step of the process</p>
        <a href="/" className="cta-button">Schedule a Consultation</a>
      </section>
    </div>
  );
};

export default WorkAbroad;