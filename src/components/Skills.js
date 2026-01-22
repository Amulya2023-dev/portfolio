import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Angular', level: 90 },
        { name: 'TypeScript', level: 92 },
        { name: 'Redux', level: 75 },
        { name: 'NgRx', level: 75 },
        { name: 'JavaScript', level: 80 },
        { name: 'HTML/CSS', level: 90 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 65 },
        { name: 'Java', level: 80 },
        { name: 'REST APIs', level: 65 },
        { name: 'GraphQL', level: 60 },
        { name: 'Microservices', level: 60 },
        { name: 'Authentication (JWT / OAuth)', level: 60 },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 60 },
        { name: 'AWS', level: 60 },
        { name: 'MongoDB', level: 60 },
        { name: 'Kubernetes', level: 59 },
        { name: 'Jenkins', level: 59 },
        { name: 'CI/CD', level: 65 },
        
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <p className="section-subtitle">
          A comprehensive toolkit for full stack development
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
