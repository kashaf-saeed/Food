import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Left Side: Contact Form */}
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form className="contact-form">
          <label>Name:</label>
          <input type="text" placeholder="Your Name" required />

          <label>Email:</label>
          <input type="email" placeholder="Your Email" required />

          <label>Message:</label>
          <textarea placeholder="Your Message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>

      {/* Right Side: Map + Contact Info */}
      <div className="info-container">
        <h2>Our Location</h2>
        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.8235600685293!2d67.08216491500127!3d24.905569984052943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f08b0c38dbd%3A0xf3dbedb2cfe7162a!2sModel%20Town%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="250"
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <div className="contact-info">
          <h3>Contact Info</h3>
          <p><strong>Address:</strong> Model Town, Lahore, Pakistan</p>
          <p><strong>Phone:</strong> +92 300 1234567</p>
          <p><strong>Email:</strong> info@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
