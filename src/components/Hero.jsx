import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Find Your Medicine at Your Price</h1>
          <p className="price-match-text">Price Match Ensure on Conventional Prescriptions</p>
          
          <div className="medicine-search">
            <div className="search-container">
              <input 
                type="text" 
                placeholder="Type your drug name" 
                className="search-input"
              />
              <button className="search-btn">
                Search
              </button>
            </div>
          </div>
          
         </div>
     
      
     
        
        
       
      </div>
    </section>
  );
};

export default Hero;
