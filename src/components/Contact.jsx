
import React, { useState } from 'react';
import 'aos/dist/aos.css';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const mailtoLink = \`mailto:sanskaryadav640@gmail.com?subject=Portfolio Inquiry from \${name}&body=\${encodeURIComponent(message)}%0A%0AFrom: \${name} (\${email})\`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact-section">
      <h2 data-aos="fade-up">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up">
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
