import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="p-6 bg-gray-800 shadow-lg">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Sanskar Yadav</h1>
          <nav className="space-x-6">
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#projects" className="hover:text-yellow-400">Projects</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </nav>
        </div>
      </header>

      <section className="flex flex-col justify-center items-center text-center py-24 px-4">
        <motion.h2
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : -20 }}
          transition={{ duration: 1 }}
        >
          Cybersecurity Enthusiast
        </motion.h2>
        <p className="text-xl max-w-xl">
          I specialize in Linux, Ethical Hacking, and building secure digital systems.
        </p>
        <div className="flex space-x-4 mt-6">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="mailto:sanskar@example.com">
            <FaEnvelope size={30} />
          </a>
        </div>
      </section>

      <section id="about" className="bg-gray-800 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="text-lg leading-relaxed">
            I'm Sanskar Yadav, passionate about cybersecurity, Linux systems, and ethical hacking. I constantly learn new techniques to secure networks and applications from emerging threats.
          </p>
        </div>
      </section>

      <section id="projects" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold mb-2">VAPT Scanner Tool</h4>
              <p>CLI tool for automated vulnerability scanning and reporting using Nmap and Python.</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold mb-2">Linux Hardening Scripts</h4>
              <p>Set of bash scripts that enforce security configurations on Debian-based systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-800 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Contact Me</h3>
          <p className="mb-4">Want to connect or work together? Drop a message below.</p>
          <a
            href="https://wa.me/916307350726"
            className="inline-block px-6 py-3 mt-4 text-lg bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-300"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-gray-900 text-center py-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Sanskar Yadav. All rights reserved.
      </footer>
    </main>
  );
}