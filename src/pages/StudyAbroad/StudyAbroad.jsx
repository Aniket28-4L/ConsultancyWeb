import './StudyAbroad.css';
const StudyAbroad = () => {
  return (
    <div className="study-abroad">
      <h1>Study Abroad</h1>
      <section className="countries">
        <h2>Popular Study Destinations</h2>
        <div className="country-grid">
          <div className="country-card">
            <h3>United States</h3>
            <ul>
              <li>Top Universities</li>
              <li>Diverse Programs</li>
              <li>Research Opportunities</li>
            </ul>
          </div>
          <div className="country-card">
            <h3>United Kingdom</h3>
            <ul>
              <li>Historic Institutions</li>
              <li>Quality Education</li>
              <li>Cultural Experience</li>
            </ul>
          </div>
          <div className="country-card">
            <h3>Canada</h3>
            <ul>
              <li>Affordable Education</li>
              <li>Work Opportunities</li>
              <li>Quality of Life</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="courses">
        <h2>Available Courses</h2>
        <div className="courses-grid">
          <div className="course-card">
            <h3>Bachelor's Degree</h3>
            <p>3-4 years undergraduate programs in various disciplines</p>
            <ul>
              <li>Engineering & Technology</li>
              <li>Business & Management</li>
              <li>Arts & Humanities</li>
              <li>Science & Medicine</li>
            </ul>
            <button className="course-btn">Learn More</button>
          </div>
          <div className="course-card">
            <h3>Master's Degree (MS)</h3>
            <p>1-2 years specialized graduate programs</p>
            <ul>
              <li>Computer Science & IT</li>
              <li>Engineering & Technology</li>
              <li>Data Science & Analytics</li>
              <li>Research-focused Programs</li>
            </ul>
            <button className="course-btn">Learn More</button>
          </div>
          <div className="course-card">
            <h3>MBA Programs</h3>
            <p>1-2 years business administration degrees</p>
            <ul>
              <li>General Management</li>
              <li>Finance & Accounting</li>
              <li>Marketing & Strategy</li>
              <li>Entrepreneurship</li>
            </ul>
            <button className="course-btn">Learn More</button>
          </div>
          <div className="course-card">
            <h3>PhD Programs</h3>
            <p>3-5 years doctoral research degrees</p>
            <ul>
              <li>Academic Research</li>
              <li>Specialized Fields</li>
              <li>Fully-funded Opportunities</li>
              <li>Teaching Assistantships</li>
            </ul>
            <button className="course-btn">Learn More</button>
          </div>
        </div>
      </section>

      <section className="requirements">
        <h2>Admission Requirements</h2>
        <ul>
          <li>Academic Transcripts</li>
          <li>Language Proficiency (IELTS/TOEFL)</li>
          <li>Statement of Purpose</li>
          <li>Letters of Recommendation</li>
        </ul>
      </section>

      <section className="scholarships">
        <h2>Scholarship Opportunities</h2>
        <div className="scholarship-list">
          <div className="scholarship-item">
            <h3>Merit-Based Scholarships</h3>
            <p>Available for outstanding academic achievements</p>
          </div>
          <div className="scholarship-item">
            <h3>Country-Specific Grants</h3>
            <p>Special funding opportunities by country</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroad;