import React, { useState } from 'react';
import { Calendar, ChevronRight, Code, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  date: string;
  description: string;
  skills: string[];
  points: string[];
  demoLink?: string;
  image?: string;
}

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      title: "To-Do List Application",
      date: "Feb 2024",
      description: "A minimal and elegant task management application with priority-based organization",
      skills: ["React", "TypeScript", "Local Storage"],
      points: [
        "Developed a user-friendly to-do list application for efficient task management and prioritization",
        "Implemented features for task creation, deletion, priority setting, and status tracking",
        "Added local storage functionality to persist tasks between sessions",
        "Created an intuitive UI with drag-and-drop functionality for task reordering"
      ],
      demoLink: "https://todo-demo.example.com",
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg"
    },
    {
      title: "Tata Motors Stock Price Forecast",
      date: "Aug 2023",
      description: "Machine learning-based stock price forecasting model using predictive analysis techniques",
      skills: ["Python", "ML", "Predictive Analysis"],
      points: [
        "Developed a machine learning-based stock price forecasting model using Linear Regression, ARIMA, and SARIMA, improving predictive accuracy for informed investment decisions.",
        "Engineered and optimized features to capture key market trends, enhancing model performance and reducing forecasting error.",
        "Conducted comparative analysis of different models, selecting the best-performing approach for reliable stock price predictions."
      ],
      image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg"
    },
    {
      title: "Grocery Store Optimal Price Prediction",
      date: "June 2023",
      description: "Python-based machine learning solution to optimize pricing strategies for grocery products",
      skills: ["Python", "Machine Learning"],
      points: [
        "Developed a machine learning-based pricing optimization model using Scipy Optimization, Linear Regression, and Data Preprocessing to maximize revenue.",
        "Engineered and optimized pricing strategies by analyzing customer response rates, sales volume, and profit margins, improving overall profitability.",
        "Implemented data cleaning, imputation, and feature scaling techniques, ensuring accurate model predictions.",
        "Conducted a comparative analysis of pricing strategies, selecting the optimal price points for 250+ grocery products."
      ],
      image: "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg"
    }
  ];

  const toggleProject = (index: number) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">Projects</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div 
                className="p-6 cursor-pointer flex justify-between items-center"
                onClick={() => toggleProject(index)}
              >
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <div className="flex items-center text-gray-500 mt-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{project.date}</span>
                  </div>
                </div>
                <ChevronRight 
                  size={24} 
                  className={`text-purple-600 transition-transform duration-300 ${expandedProject === index ? 'rotate-90' : ''}`} 
                />
              </div>
              
              {expandedProject === index && (
                <div className="px-6 pb-6 pt-0">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <ul className="space-y-3">
                    {project.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <Code size={18} className="text-purple-600 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center mt-4 text-purple-600 hover:text-purple-700"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Demo
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;