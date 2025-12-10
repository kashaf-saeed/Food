// src/About.js
import React from 'react';
import './About.css'; // Dark theme CSS

const About = () => {
  const teamMembers = [
    { name: 'Kashaf Saeed', role: 'CEO & Founder', bio: 'Visionary leader driving innovation and strategic growth.' },
    { name: 'Umaira Akram', role: 'Chief Technology Officer', bio: 'Expert in scalable architecture and modern development practices.' },
    { name: 'Ammara Attique', role: 'Head of Customer Success', bio: 'Dedicated to ensuring exceptional user satisfaction and support.' },
  ];

  const coreValues = [
    'Integrity: We operate with honesty and transparency.',
    'Innovation: We constantly seek better and novel solutions.',
    'Excellence: We strive for the highest quality in everything we do.',
    'Customer Focus: Our users are at the heart of our decisions.',
  ];

  return (
    <div className="about-container">
      <header className="about-header">
        <h1>Welcome to Food Point</h1>
        <p>Crafting Culinary Excellence, One Plate at a Time.</p>
      </header>

      {/* Mission Section */}
      <section className="about-section mission-section">
        <h2>🚀 Our Mission</h2>
        <p>Our mission is to empower individuals and businesses by providing intuitive, powerful, and affordable digital solutions that help them achieve their maximum potential.</p>
      </section>

      {/* Core Values Section */}
      <section className="about-section values-section">
        <h2>✨ Core Values</h2>
        <ul>
          {coreValues.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
      </section>

      {/* History Section */}
      <section className="about-section history-section">
        <h2>📜 Our History</h2>
        <p>Founded in 2025, Food Point has grown from a small startup to a globally recognized brand, constantly innovating and delighting our customers.</p>
      </section>

      {/* Team Section */}
      <section className="about-section team-section">
        <h2>🤝 Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="about-footer">
        <p>Thank you for being part of our journey. We look forward to building the future with you!</p>
        <p>Contact us at: info@foodpoint.com</p>
      </footer>
    </div>
  );
};

export default About;
