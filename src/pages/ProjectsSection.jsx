import React,{useState, useEffect} from "react"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import portfolio from '../assets/images/portfolio.png'
import nike_shoes from '../assets/images/shoes.png'

const ProjectsSection = () => {

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

  const projects = [
    {
      title: "Nike Shoes Website",
      description: "A responsive static website showcasing Nike shoes products with modern UI design.",
      image: nike_shoes,
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://houmenghor.github.io/Nike-Shoes/",
      githubUrl: "https://github.com/houmenghor/Nike-Shoes",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website with dark/light theme support and responsive design.",
      image: portfolio,
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/houmenghor",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 dark:bg-secondary transition-all duration-300">
      <div className="container mx-auto">
        <motion.h2
          className="section-title dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <div className="overflow-hidden h-full flex flex-col rounded-lg border dark:bg-secondary dark:border-darkMode transition-all duration-300">
                <div className="relative h-48 w-full">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2 ">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 pt-0 flex gap-4 dark:text-white">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border dark:border-darkMode dark:hover:bg-darkMode rounded-md text-sm"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-white dark:text-black rounded-md text-sm hover:bg-primary/90 transition"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
