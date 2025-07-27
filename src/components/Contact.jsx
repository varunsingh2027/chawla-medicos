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
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Method 1: Try FormSubmit with proper configuration
      const formData2 = new FormData();
      formData2.append('name', formData.name);
      formData2.append('email', formData.email);
      formData2.append('phone', formData.phone);
      formData2.append('service', formData.service);
      formData2.append('message', formData.message);
      formData2.append('_subject', `New Contact Form Submission from ${formData.name}`);
      formData2.append('_next', window.location.href);
      formData2.append('_captcha', 'false');

      const response = await fetch('https://formsubmit.co/varunsingh04.online@gmail.com', {
        method: 'POST',
        body: formData2
      });

      // FormSubmit redirects on success, so if we reach here without error, it worked
      if (response.ok || response.redirected) {
        alert('Thank you for your message! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setIsLoading(false);
        return;
      }
    } catch (error) {
      console.log('FormSubmit failed, trying alternative...', error);
    }

    try {
      // Method 2: Alternative service - EmailJS (you need to set this up)
      // For now, this will fail and go to mailto
      throw new Error('EmailJS not configured yet');
    } catch (error) {
      console.log('Alternative services failed, using mailto...', error);
    }

    // Fallback: Open email client with pre-filled content
    const emailSubject = `Contact Form Submission from ${formData.name}`;
    const emailBody = `Hi,

I'm contacting you through your website contact form.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Interested: ${formData.service}

Message:
${formData.message}

Best regards,
${formData.name}`;

    const mailtoLink = `mailto:varunsingh04.online@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open in new tab to avoid navigation issues
    window.open(mailtoLink, '_blank');
    
    alert('Your email client will open with a pre-filled message. Please click Send to complete your message submission.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    setIsLoading(false);
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
                Main: +91-9311459973<br/>
                Emergency: +91-9311459973<br/>
                WhatsApp: +91-9311459973
              </p>
            </div>
            
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email Us</h3>
              <p>
                varunsingh04.online@gmail.com<br/>
                appointments@exporthealthcare.com<br/>
                emergency@exporthealthcare.com
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
              
              <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
