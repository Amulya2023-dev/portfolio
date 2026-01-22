import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      period: 'October 2024 - May 2025',
      role: 'Lead Software Engineer',
      company: 'Collab Partnerz',
      description: 'Leading development of enterprise-level web applications using React, Node.js, and cloud technologies. Mentoring junior developers and establishing coding standards.',
      achievements: [
        'Architected scalable microservices handling 1M+ requests/day',
        'Reduced application load time by 60% through optimization',
        'Implemented CI/CD pipelines improving deployment efficiency'
      ]
    },
    {
      period: 'September 2020 - October 2024',
      role: 'Senior Software Engineer',
      company: 'Entain India (Ivy)',
      description: 'Developed and maintained multiple client projects using Angular, React and Java. Collaborated with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Developed animated live match visuals with real-time score and odds updates to enhance user engagement during live events.',
        'Implemented dynamic on-screen live scores and odds, ensuring smooth and timely updates.',
        'Deployed applications using Jenkins CI/CD pipelines, supporting reliable and efficient releases.',
        'Performed production support and issue analysis using Kibana logs to identify, debug, and resolve live issues.'
      ]
    },
    {
      period: 'August 2019 - July 2020',
      role: 'Software Engineer',
      company: 'IBM India',
      description: 'Built an Angular-based sales dashboard application with interactive graphs for clear data visualization.',
      achievements: [
        'Created data-driven graphs using D3.js to enhance dashboard usability.',
        'Used modern debugging tools to analyze and resolve bugs during development.',
        'Ensured smoother application behavior by proactively debugging and fixing issues.'
      ]
    },
    {
      period: 'August 2018 - August 2019',
      role: 'Software Engineer',
      company: 'Birlasoft',
      description: 'Developed a full-stack application for a payment gateway using modern technologies and made the application fully responsive.',
      achievements: [
        'Made the application fully responsive by creating custom CSS and JavaScript templates.',
        'Learned modern development workflows and tools.',
        'Gained an understanding of Agile development processes and workflows.'
      ]
    },
    {
      period: 'June 2017 - August 2018',
      role: 'Software Trainee',
      company: 'Cloudseed Techlogies llp',
      description: 'Assisted in building responsive user interfaces and integrating them with backend services.Learned and followed modern development workflows, version control (Git), and Agile practices.',
      achievements: [
        'Gained hands-on experience with real-world projects, tools, and best practices.',
        'Started my full-stack development career by building applications from scratch.',
        'Contributed to open source projects'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          Over 8 years of building innovative solutions
        </p>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h3 className="timeline-role">{exp.role}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
                <ul className="timeline-achievements">
                  {exp.achievements.map((achievement, aIndex) => (
                    <li key={aIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
