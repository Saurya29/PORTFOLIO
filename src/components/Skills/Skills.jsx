import React from "react";
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "C++", "SQL", "JavaScript"]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        "Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Matplotlib",
        "Deep Learning", "Neural Networks", "Backpropagation", "Gradient Descent", "Adam Optimizer",
        "NLP (certified)", "Spatio-temporal Modeling", "Supervised Learning", "Clustering", "Bayesian Methods"
      ]
    },
    {
      title: "Web Development",
      skills: ["React.js", "Node.js", "Express.js", "HTML", "CSS", "Tailwind CSS", "Vite", "Three.js", "MediaPipe", "REST APIs"]
    },
    {
      title: "Databases & Tools",
      skills: ["MongoDB", "MySQL", "Postman", "Git", "GitHub"]
    },
    {
      title: "Data & BI",
      skills: ["Business Intelligence", "Cohort Analysis", "Data Visualization", "Power BI-style Dashboards"]
    }
  ];

  return (
    <motion.section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through various projects.
        </p>
      </div>

      {/* Skill Categories */}
      <div className="flex flex-wrap gap-5 py-10 justify-between">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-4 sm:px-8 py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white
            shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:shadow-[0_0_30px_1px_rgba(130,69,236,0.5)] transition-shadow duration-300"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* Skill Items */}
            <div className="flex flex-wrap gap-2 justify-center">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 text-sm bg-purple-600 text-white rounded-full hover:bg-purple-700 hover:scale-105 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;