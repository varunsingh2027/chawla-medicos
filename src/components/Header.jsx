import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Select Language');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1000);
      if (window.innerWidth > 1000) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (dropdownName, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      {/* First Header Component - Language dropdown, middle links, social icons - WILL SCROLL AWAY */}
      <div className="header-top">
        <div className="container">
          {/* Left Section - Language Dropdown */}
          <div className="header-top-left">
            <div className="language-dropdown">
              <select value={selectedLanguage} onChange={handleLanguageChange} className="language-dropdown">
                <option value="Select Language" disabled>Select Language</option>
                <option value="English">English</option>
                <option value="Hindi">हिंदी</option>
                <option value="Punjabi">ਪੰਜਾਬੀ</option>
              </select>
            </div>
          </div>

          {/* Center Section - Middle Links */}
          {/* <div className="header-top-center">
            <div className="top-center">
              <a href="#track-parcel" className="top-link">Track Parcel</a>
              <a href="#helpdesk" className="top-link">Helpdesk</a>
              <a href="#review" className="top-link">Review</a>
            </div>
          </div> */}

          {/* Right Section - Social Media Icons */}
          <div className="header-top-right">
            <div className="social-icons">
              <a href="#facebook" className="social-icon facebook" aria-label="Facebook">
                <span className="icon-fb">f</span>
              </a>
              <a href="#instagram" className="social-icon instagram" aria-label="Instagram">
                <span className="icon-ig"></span>
              </a>
              <a href="#twitter" className="social-icon twitter" aria-label="Twitter">
                <span className="icon-tw"></span>
              </a>
              <a href="#linkedin" className="social-icon linkedin" aria-label="LinkedIn">
                <span className="icon-li">in</span>
              </a>
              <a href="#youtube" className="social-icon youtube" aria-label="YouTube">
                <span className="icon-yt"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header - WILL STAY FIXED */}
      <header className="header-sticky-wrapper">
        {/* Second Header Component - Email, Contact, Logo, Get a Quote */}
        <div className="header-middle">
          <div className="container">
            {/* Contact Info - Left */}
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div className="contact-details">
                  <span>MAIL US TODAY</span>
                  <span>info@exporthealthcare.com</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div className="contact-details">
                  <span>CALL US FOR MORE DETAILS</span>
                  <span>+91-9311459973</span>
                </div>
              </div>
            </div>

            {/* Logo - Center */}
            <div className="logo-section">
              <div className="logo">
                <div className="logo-container">
                  <div className="logo-plus">✚</div>
                  <div className="logo-text">
                    <div className="logo-line">EXPORT</div>
                    <div className="logo-line">HEALTHCARE</div>
                  </div>
                </div>
                <p className="tagline">Your Health, Our Priority</p>
              </div>
            </div>

            {/* Get Quote Button - Right */}
            <div className="quote-section">
              <button className="get-quote-btn">Get a Quote</button>
            </div>
          </div>
        </div>

      {/* Third Header Component - Main Navigation */}
      <div className="header-bottom">
        <div className="container">
          <nav className="main-navigation">
            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><a href="#home" className="nav-link"><span className="nav-icon">🏠</span>Home</a></li>
              
              <li className="dropdown">
                <a href="#about" className="nav-link">
                  <span className="nav-icon">ℹ️</span>About 
                  <span className="dropdown-arrow">▼</span>
                </a>
                <span 
                  className={`mobile-dropdown-toggle ${activeDropdown === 'about' ? 'active' : ''}`}
                  onClick={(e) => toggleMobileDropdown('about', e)}
                >▼</span>
                <ul className={`dropdown-menu ${activeDropdown === 'about' ? 'mobile-show' : ''}`}>
                  <li><a href="#our-story">Our Story</a></li>
                  <li><a href="#mission-vision">Mission & Vision</a></li>
                  <li><a href="#our-team">Our Team</a></li>
                  <li><a href="#awards">Awards & Certifications</a></li>
                  <li><a href="#testimonials">Customer Testimonials</a></li>
                </ul>
              </li>
              
              <li className="dropdown">
                <a href="#categories" className="nav-link">
                  Categories 
                  <span className="dropdown-arrow">▼</span>
                </a>
                <span 
                  className={`mobile-dropdown-toggle ${activeDropdown === 'categories' ? 'active' : ''}`}
                  onClick={(e) => toggleMobileDropdown('categories', e)}
                >▼</span>
                <ul className={`dropdown-menu ${activeDropdown === 'categories' ? 'mobile-show' : ''}`}>
                  <li><a href="#medicines">Medicines</a></li>
                  <li><a href="#supplements">Supplements</a></li>
                  <li><a href="#equipment">Medical Equipment</a></li>
                  <li><a href="#ayurvedic">Ayurvedic Products</a></li>
                  <li><a href="#surgical">Surgical Instruments</a></li>
                  <li><a href="#diagnostic">Diagnostic Kits</a></li>
                </ul>
              </li>
              
              <li className="dropdown">
                <a href="#salt-manufacturer" className="nav-link">
                  Salt & Manufacturer 
                  <span className="dropdown-arrow">▼</span>
                </a>
                <span 
                  className={`mobile-dropdown-toggle ${activeDropdown === 'salt-manufacturer' ? 'active' : ''}`}
                  onClick={(e) => toggleMobileDropdown('salt-manufacturer', e)}
                >▼</span>
                <ul className={`dropdown-menu ${activeDropdown === 'salt-manufacturer' ? 'mobile-show' : ''}`}>
                  <li><a href="#salt-search">Search by Salt</a></li>
                  <li><a href="#manufacturer-search">Search by Manufacturer</a></li>
                  <li><a href="#generic-alternatives">Generic Alternatives</a></li>
                  <li><a href="#brand-comparison">Brand Comparison</a></li>
                  <li><a href="#drug-interactions">Drug Interactions</a></li>
                </ul>
              </li>
              
              {/* <li className="dropdown">
                <a href="#consultation" className="nav-link">
                  Consultation 
                  <span className="dropdown-arrow">▼</span>
                </a>
                <span 
                  className={`mobile-dropdown-toggle ${activeDropdown === 'consultation' ? 'active' : ''}`}
                  onClick={(e) => toggleMobileDropdown('consultation', e)}
                >▼</span>
                <ul className={`dropdown-menu ${activeDropdown === 'consultation' ? 'mobile-show' : ''}`}>
                  <li><a href="#online-consultation">Online Consultation</a></li>
                  <li><a href="#book-appointment">Book Appointment</a></li>
                  <li><a href="#specialist-doctors">Specialist Doctors</a></li>
                  <li><a href="#health-checkup">Health Checkup Packages</a></li>
                  <li><a href="#prescription-upload">Upload Prescription</a></li>
                </ul>
              </li> */}
              
              {/* <li><a href="#generic" className="nav-link">Generic</a></li>
              <li><a href="#registration" className="nav-link">Registration</a></li>
              <li><a href="#blog" className="nav-link">Blog</a></li> */}
              
              <li className="dropdown">
                <a href="#contact" className="nav-link">
                  Contact Us 
                  <span className="dropdown-arrow">▼</span>
                </a>
                <span 
                  className={`mobile-dropdown-toggle ${activeDropdown === 'contact' ? 'active' : ''}`}
                  onClick={(e) => toggleMobileDropdown('contact', e)}
                >▼</span>
                <ul className={`dropdown-menu ${activeDropdown === 'contact' ? 'mobile-show' : ''}`}>
                  <li><a href="#contact-form">Contact Form</a></li>
                  <li><a href="#store-locations">Store Locations</a></li>
                  <li><a href="#customer-support">Customer Support</a></li>
                  <li><a href="#bulk-orders">Bulk Orders</a></li>
                  <li><a href="#feedback">Feedback & Complaints</a></li>
                </ul>
              </li>
            </ul>
            <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </div>
      </header>
    </>
  );
};

export default Header;
