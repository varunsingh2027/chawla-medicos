import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Export Healthcare</h2>
            <p className="lead">
              With over two decades of experience in the healthcare industry, 
              Export Healthcare has been a trusted name in providing quality 
              medical services and products to our community.
            </p>
            
            <div className="about-details">
              <div className="detail-item">
                <h4>🎯 Our Mission</h4>
                <p>
                  To provide accessible, affordable, and quality healthcare 
                  solutions that improve the well-being of our patients and 
                  their families.
                </p>
              </div>
              
              <div className="detail-item">
                <h4>👁️ Our Vision</h4>
                <p>
                  To be the leading healthcare provider in the region, known 
                  for our commitment to excellence, innovation, and patient care.
                </p>
              </div>
              
              <div className="detail-item">
                <h4>💡 Our Values</h4>
                <ul>
                  <li>Compassionate Care</li>
                  <li>Professional Excellence</li>
                  <li>Ethical Practices</li>
                  <li>Patient-Centered Approach</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Happy Patients</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Medical Products</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Emergency Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
