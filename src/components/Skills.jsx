
import React, { useState } from 'react';
import 'aos/dist/aos.css';
import './Skills.css';

const skillsData = [
  {
    project: "VAPT at Snet Labs",
    tools: ["Nmap", "Wireshark", "Nessus", "Burp Suite", "Metasploit", "Nikto", "OWASP ZAP", "OpenVAS"]
  },
  {
    project: "WARAS Project",
    tools: ["Nmap", "Wireshark", "Python", "Linux / Kali Linux", "IoT (Wi-Fi/GPS)", "Drone Tech", "Aircrack-ng"]
  },
  {
    project: "Intellect Android Security Internship",
    tools: ["Burp Suite", "OWASP ZAP"]
  },
  {
    project: "Hindalco Keylogger Project",
    tools: ["Python"]
  },
  {
    project: "Statistical Visualizer Library Project",
    tools: ["Java"]
  },
  {
    project: "LinkedIn Clone at Potterstech",
    tools: ["React / Web Dev"]
  }
];

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="skills" className="skills-section">
      <h2 data-aos="fade-up">My Skills & Tools</h2>
      <div className="skills-accordion">
        {skillsData.map((item, index) => (
          <div className="accordion-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <button className="accordion-button" onClick={() => toggle(index)}>
              {item.project}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </button>
            {openIndex === index && (
              <ul className="accordion-content">
                {item.tools.map((tool, idx) => (
                  <li key={idx}>{tool}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
