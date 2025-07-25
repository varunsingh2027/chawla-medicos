import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>
            Ready to take the next step in your healthcare journey? 
            Contact us today to schedule an appointment or ask any questions.
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Visit Us</h3>
              <p>
                123 Medical Street<br/>
                Healthcare District<br/>
                New Delhi - 110001
              </p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📞</div>
              <h3>Call Us</h3>
              <p>
                Main: +91-11-XXXXXXXX<br/>
                Emergency: +91-11-YYYYYYYY<br/>
                WhatsApp: +91-98XXXXXXXX
              </p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email Us</h3>
              <p>
                info@chawlamedicos.com<br/>
                appointments@chawlamedicos.com<br/>
                emergency@chawlamedicos.com
              </p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">🕒</div>
              <h3>Working Hours</h3>
              <p>
                Monday - Friday: 9:00 AM - 8:00 PM<br/>
                Saturday: 9:00 AM - 6:00 PM<br/>
                Sunday: Emergency Only
              </p>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="general">General Medicine</option>
                  <option value="vaccination">Vaccination</option>
                  <option value="laboratory">Laboratory Tests</option>
                  <option value="specialized">Specialized Care</option>
                  <option value="emergency">Emergency Care</option>
                  <option value="pharmacy">Pharmacy Services</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please describe your inquiry or appointment request..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
