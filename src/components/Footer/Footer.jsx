import './Footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@consultancyweb.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Education Lane, New York, NY 10001</p>
          <div className="social-icons">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/study-abroad">Study Abroad</a></li>
            <li><a href="/work-abroad">Work Abroad</a></li>
            <li><a href="/universities">Universities</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li><a href="/study-abroad">Education Counseling</a></li>
            <li><a href="/study-abroad">Visa Assistance</a></li>
            <li><a href="/study-abroad">University Applications</a></li>
            <li><a href="/work-abroad">Job Placement</a></li>
            <li><a href="/work-abroad">Resume Building</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Study Destinations</h3>
          <ul>
            <li><a href="/study-abroad">United States</a></li>
            <li><a href="/study-abroad">United Kingdom</a></li>
            <li><a href="/study-abroad">Canada</a></li>
            <li><a href="/study-abroad">Australia</a></li>
            <li><a href="/study-abroad">Germany</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <p>Stay updated with the latest opportunities and news</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your Email Address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 ConsultancyWeb. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/sitemap">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;