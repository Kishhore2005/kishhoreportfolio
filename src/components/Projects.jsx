import React from "react";
import employeeMSImage from "../assets/employee-ms.png";
import bookMSImage from "../assets/admin-dashboard.png";
import cimag from "../assets/cimag.png";
import qrcode from "../assets/qrcode-react.png";
import weather from "../assets/weather.png";
import {motion} from "framer-motion"

const projects = [
  {
    id: 1,
    name: "AI MENTAL HEALTH CHATBOT",
    technologies: "RASA FRAMEWORK,PYTHON, HUGGING FACE FB-BLENDERBOT LLM,TRANSFORMER",
    image: employeeMSImage,
    github: "",
  },
  {
    id: 2,
    name: "STUDENTS MANAGEMENT",
    technologies: "MERN Stack",
    image: bookMSImage,
    github: "",
  },
  {
    id: 3,
    name: "MULTI MAZE GAME IN C",
    technologies: "BRANCH AND BOUND  TECHNIQUE DAA",
    image: cimag,
    github: "",
  },
  {
    id: 4,
    name: "QR CODE GENERATOR",
    technologies: "REACT JS ,NPM NODE",
    image: qrcode,
    github: "",
  },
   {
    id: 5,
    name: "WEATHER WEBSITE",
    technologies: "REACT JS ,NPM NODE,WEATHER API",
    image: weather,
    github: "",
  },
];

const Projects = () => {
  return (
    <motion.div 
     initial={{ opacity: 0, scale:0 }}
      whileInView={{ opacity: 1, scale:1 }}
      transition={{ duration: 0.5}}
      className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
