import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'
import React,{useState, useEffect} from 'react'

const EducationSection = () => {
  const [isLoading, setIsLoading] = useState(true);

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
  const education = [
    {
      period: "2023 - Present",
      degree: "Pursuing a bachelor's degree in Information Technology at Royal University of Phnom Penh",
      institution: "",
    },
    {
      period: "2021 - 2022",
      degree: "High School Diploma",
      institution: "Kamchay Mear High School",
    },

  ]
  return (
    <section id="education" className="py-20 px-4 dark:text-white dark:bg-secondary transition-all duration-300">
      <div className="container mx-auto">
        <motion.h2
          className='section-title'
          inherit={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <div className='space-y-6 max-w-3xl mx-auto'>
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <div className="dark:bg-secondary rounded-lg border dark:border-lightMode p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold">{item.degree}</h3>
                    {item.institution && (
                      <p className="text-muted-foreground">{item.institution}</p>
                    )}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{item.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default EducationSection
