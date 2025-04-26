import { motion } from 'framer-motion'
import { Mail, Phone, Github, MapPin, Send } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'
import { faTelegram, } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {

  const [isLoading, setIsLoading] = useState(true);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "menghorhou@gmail.com",
      href: "mailto:menghorhou@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "087947425",
      href: "tel:087947425",
    },
    {
      icon: <FontAwesomeIcon icon={faTelegram} className="h-6 w-6" />,
      label: "Telegram",
      value: "@houmenghor",
      href: "https://t.me/houmenghor",
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "houmenghor",
      href: "https://github.com/houmenghor",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Address",
      value: "Sangkat Tuek Thla, Khan Sen Sok, Phnom Penh, Cambodia",
      href: "#",
    },
  ]

  // Handle page load and hide loading screen after 1 second
  useEffect(() => {
    // Simulate loading (you can remove the timeout if you want the real load state)
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the loading screen after 1 second
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer when component is unmounted
  }, []);

  // Show loading screen if still loading, otherwise show HeroSection
  if (isLoading) {
    return (
      <div className="loading-screen flex justify-center items-center min-h-screen bg-white text-white dark:bg-secondary dark:text-secondary">
        <div className="loader">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 dark:bg-secondary dark:text-white transition-all duration-300">
      <div className="container mx-auto">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Contact Form (Card replaced with div) */}
            <div className="rounded-xl p-6 border dark:border-darkMode">
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-md border dark:border-darkMode dark:bg-secondary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-md border dark:border-darkMode dark:bg-secondary"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                   
                  <textarea
                    id="message"
                    className="w-full p-3 rounded-md border dark:border-darkMode dark:bg-secondary"
                    placeholder="Your Message"
                    rows={4}
                  />
                </div>
                {/* Replaced custom button with standard button */}
                <button
                  type="submit"
                  className="w-full justify-center flex bg-primary text-white dark:text-black p-3 rounded-md transition-colors"
                >
                  <Send className="mr-3 h-4 w-4 mt-1" /> Send Message
                </button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {/* Contact Information (Card replaced with div) */}
            <div className=" rounded-xl p-6 border dark:border-darkMode">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-primary">{item.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-medium">{item.label}</h4>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
