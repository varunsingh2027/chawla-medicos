import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const features = [
    {
      icon: '🚚',
      title: 'Worldwide Shipping',
      description: 'Get your medicine delivered to the desired destination on timely and safely.'
    },
    {
      icon: '💰',
      title: 'Money Back Guarantee',
      description: '100% Money back guarantee on all lost or return parcel.'
    },
    {
      icon: '✅',
      title: 'Product Quality',
      description: 'All unprecedented generic products are 100% quality approved product.'
    },
    {
      icon: '🎧',
      title: '24*7 Customer Support',
      description: 'Our Expert customer support team available 24x7 for quick response.'
    },
    {
      icon: '💲',
      title: 'Best Price Guarantee',
      description: 'Assurance of best price on all generic medicines.'
    }
  ];

  const whyChooseUs = [
    {
      icon: '🌍',
      title: 'Worldwide Shipping',
      description: 'Get your medicine delivered to the desired destination on timely and safely.'
    },
    {
      icon: '❤️',
      title: 'Goodwill and Care',
      description: 'We care not only quality of drugs but also quality of customer service'
    },
    {
      icon: '💰',
      title: 'Lowest Price Guarantee',
      description: 'Assurance of best price on all generic medicines.'
    },
    {
      icon: '📞',
      title: '24x7 Customer Support',
      description: 'Our Expert customer support team available 24x7 for quick response.'
    },
    {
      icon: '🏆',
      title: '100% Quality & Certified Products',
      description: 'All unprecedented generic products are 100% quality approved product.'
    },
    {
      icon: '💵',
      title: 'Money Back Guarantee',
      description: '100% Money back guarantee on all lost or return parcel.'
    }
  ];

  const brands = [
    'Natco',
    'Biocon',
    'Emcure',
    'Cipla',
    'Hetero',
    'Roche'
  ];

  return (
    <section className="about-section" id="categories">
      <div className="container">
        {/* Main Content */}
        <div className="about-content">
          <h2>
            <span>BEST</span>
            <span>PHARMACEUTICAL</span>
            <span>EXPORTER</span>
            <span>AND</span>
            <span>SUPPLIER</span>
            <span>IN</span>
            <span className="highlight-india">INDIA</span>
          </h2>
          <p className="about-description">
            The accessible, simple and affordable medicines in no time! Export Healthcare, one of the world's leading suppliers/ exporters, has been known for providing affordable medicines globally around the world for so long. We aim to provide prescription medicines so that our customers can have smooth and seamless healthcare experience. Your health is of paramount importance to us so we cater to provide quality medicines at the cost that won't hamper your pocket. With so many medicines in the warehouse, we strive to deliver the best in class for our patients suffering from chronic ailments. Export Healthcare is your one-stop shop destination for medicines like Hepatitis B(HIV), Hepatitis C, AntiCancer, Ayurvedic, chronic Kidney disease, arthritis medicines. For many people around the globe, we have been one of the most trusted sources where they can find medicine they need for their ailment.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-choose-card">
                <div className="why-choose-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brands Section */}
        <div className="brands-section">
          <h2>Our Valuable Brands</h2>
          <div className="brands-grid">
            {brands.map((brand, index) => (
              <div key={index} className="brand-card">
                <span>{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
