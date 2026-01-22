import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="intro-text">
              With over <strong>8 years</strong> of experience in full stack development,
              I have honed my skills in creating robust, scalable, and efficient web applications.
              My journey began with a passion for solving complex problems and has evolved into
              a career dedicated to building innovative digital solutions.
            </p>
            <p>
              I specialize in both frontend and backend development, working with modern
              JavaScript frameworks and server-side technologies. My expertise spans across
              building responsive user interfaces, designing RESTful APIs, implementing
              authentication systems, and optimizing application performance.
            </p>
            <p>
              Throughout my career, I've worked on various projects ranging from small
              business websites to large-scale enterprise applications, always focusing on
              writing clean, maintainable code and following industry best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
