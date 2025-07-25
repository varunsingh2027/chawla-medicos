import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🏥',
      title: 'General Medicine',
      description: 'Comprehensive primary healthcare services for all age groups with experienced physicians.',
      features: ['Health Checkups', 'Preventive Care', 'Chronic Disease Management']
    },
    {
      icon: '💉',
      title: 'Vaccination Services',
      description: 'Complete vaccination programs for children and adults following international guidelines.',
      features: ['Child Immunization', 'Travel Vaccines', 'Annual Flu Shots']
    },
    {
      icon: '🔬',
      title: 'Laboratory Tests',
      description: 'State-of-the-art diagnostic laboratory with accurate and timely test results.',
      features: ['Blood Tests', 'Urine Analysis', 'Pathology Services']
    },
    {
      icon: '🩺',
      title: 'Specialized Care',
      description: 'Expert consultation and treatment in various medical specialties.',
      features: ['Cardiology', 'Diabetes Care', 'Hypertension Management']
    },
    {
      icon: '🚑',
      title: 'Emergency Care',
      description: '24/7 emergency medical services with rapid response and critical care.',
      features: ['Emergency Response', 'Critical Care', 'Ambulance Service']
    },
    {
      icon: '💊',
      title: 'Pharmacy Services',
      description: 'Complete pharmacy with genuine medicines and healthcare products.',
      features: ['Prescription Medicines', 'Health Supplements', 'Medical Equipment']
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <h2>Our Medical Services</h2>
          <p>
            We offer comprehensive healthcare services designed to meet all your 
            medical needs under one roof with the highest standards of care.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <button className="service-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
