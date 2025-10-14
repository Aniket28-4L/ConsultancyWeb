import './Documentation.css';


const Documentation = () => {
  return (
    <div className="documentation">
      <h1>Documentation Guide</h1>
      <div className="documentation-intro">
        <p>Proper documentation is essential for a successful application process. Below is a comprehensive guide to all the documents you may need for your consultancy services.</p>
      </div>
      <section className="document-types">
        <div className="doc-section educational-documents">
          <div className="doc-category">
            <h2>Educational Documents</h2>
            <ul>
              <li>Academic Transcripts (all semesters/years)</li>
              <li>Degree Certificates (original and translated)</li>
              <li>Course Completion Certificates</li>
              <li>Standardized Test Scores (SAT, GRE, GMAT)</li>
              <li>Language Proficiency Certificates (IELTS, TOEFL)</li>
            </ul>
          </div>
        </div>
        
        <div className="doc-section professional-documents">
          <div className="doc-category">
            <h2>Professional Documents</h2>
            <ul>
              <li>Resume/CV (updated and formatted)</li>
              <li>Work Experience Letters</li>
              <li>Professional Certifications</li>
              <li>Reference Letters from Employers</li>
              <li>Portfolio of Work (if applicable)</li>
            </ul>
          </div>
        </div>
        
        <div className="doc-section personal-documents">
          <div className="doc-category">
            <h2>Personal Documents</h2>
            <ul>
              <li>Passport (valid for at least 6 months)</li>
              <li>Birth Certificate</li>
              <li>Marriage Certificate (if applicable)</li>
              <li>ID Cards/Driver's License</li>
              <li>Passport-sized Photographs</li>
            </ul>
          </div>
        </div>
        
        <div className="doc-section financial-documents">
          <div className="doc-category">
            <h2>Financial Documents</h2>
            <ul>
              <li>Bank Statements (last 6 months)</li>
              <li>Sponsorship Letters</li>
              <li>Scholarship Award Letters</li>
              <li>Proof of Assets</li>
              <li>Tax Returns (if applicable)</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;