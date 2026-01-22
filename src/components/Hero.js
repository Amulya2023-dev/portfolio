import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Full Stack Developer
          </h1>
          <p className="hero-subtitle">
            Crafting digital solutions with <span className="highlight">8+ years</span> of expertise
          </p>
          <p className="hero-description">
            Specialized in building scalable web applications using modern technologies
            and best practices. Passionate about creating efficient, maintainable code
            and delivering exceptional user experiences.
          </p>
        </div>
        <div className="hero-image">
          <div className="code-snippet">
            <div className="code-line">
              <span className="code-keyword">const</span>{' '}
              <span className="code-variable">developer</span> = {'{'}
            </div>
            <div className="code-line">
              {'  '}<span className="code-property">name</span>: <span className="code-string">'Full Stack Dev'</span>,
            </div>
            <div className="code-line">
              {'  '}<span className="code-property">experience</span>: <span className="code-number">8+</span>,
            </div>
            <div className="code-line">
              {'  '}<span className="code-property">passion</span>: <span className="code-string">'Coding'</span>
            </div>
            <div className="code-line">{'}'};</div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
