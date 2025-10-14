import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We're here to answer any questions you may have about our services
        </motion.p>
      </div>
      
      <motion.section 
        className="contact-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="contact-info-card">
          <div className="contact-details">
            <h2>Get in Touch</h2>
            <p className="contact-intro">Our team of experts is ready to help you achieve your international education and career goals.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="icon-container">
                  <i className="icon email-icon">✉️</i>
                </div>
                <div className="method-details">
                  <h3>Email Us</h3>
                  <p><a href="mailto:info@consultancyweb.com">info@consultancyweb.com</a></p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="icon-container">
                  <i className="icon phone-icon">📞</i>
                </div>
                <div className="method-details">
                  <h3>Call Us</h3>
                  <p><a href="tel:+12345678901">+1 234 567 8901</a></p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="icon-container">
                  <i className="icon location-icon">📍</i>
                </div>
                <div className="method-details">
                  <h3>Visit Us</h3>
                  <p>123 Jamnagar Main Road</p>
                  <p>Jamnagar, Gujarat 361001</p>
                  <p>India</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="icon-container">
                  <i className="icon hours-icon">🕒</i>
                </div>
                <div className="method-details">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9am - 6pm</p>
                  <p>Saturday: 10am - 2pm</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Connect With Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">🐦</a>
                <a href="#" className="social-icon">📸</a>
                <a href="#" className="social-icon">👔</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="form-card">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter your full name" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Enter your email address" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select 
                id="service" 
                name="service" 
                value={formData.service} 
                onChange={handleChange} 
                required
              >
                <option value="" disabled>Select a service</option>
                <option value="study">Study Abroad</option>
                <option value="work">Work Abroad</option>
                <option value="visa">Visa Assistance</option>
                <option value="documentation">Documentation</option>
                <option value="other">Other Services</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Tell us how we can help you..." 
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </motion.section>
      
      <section className="map-section">
        <h2>Find Us</h2>
        <div className="map-container">
          {/* Map placeholder - in a real implementation, you would integrate Google Maps or another map service */}
          <div className="map-placeholder">
            <div className="map-pin"></div>
            <div className="map-address">
              <p>123 Jamnagar Main Road</p>
              <p>Jamnagar, Gujarat 361001</p>
              <p>India</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How do I schedule a consultation?</h3>
            <p>You can schedule a consultation by filling out our contact form, calling us directly, or visiting our office during business hours.</p>
          </div>
          <div className="faq-item">
            <h3>What services do you offer?</h3>
            <p>We offer comprehensive services including study abroad counseling, work visa assistance, documentation support, and more.</p>
          </div>
          <div className="faq-item">
            <h3>How long does the process take?</h3>
            <p>The timeline varies depending on your destination country and specific requirements. Our consultants will provide you with a detailed timeline during your consultation.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer virtual consultations?</h3>
            <p>Yes, we offer both in-person and virtual consultations to accommodate your schedule and location.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;