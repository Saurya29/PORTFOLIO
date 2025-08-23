import React from "react";
import { workexperience } from "../../constants"; // ✅ your data

const WorkExperience = () => {
  return (
    <section id="work-experience" className="relative py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
        Work Experience
      </h2>

      <div className="relative flex flex-col items-center">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-600 h-full hidden sm:block"></div>

        {workexperience.map((experience, index) => (
          <div
            key={experience.id}
            className="flex flex-col sm:flex-row items-center mb-16 w-full"
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Card */}
            <div className="w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md ml-8 sm:ml-44 sm:mr-44">
              <h3 className="text-xl sm:text-2xl font-semibold text-white">
                {experience.role}
              </h3>
              <h4 className="text-md sm:text-sm text-gray-300">
                {experience.company}
              </h4>
              <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
              <p className="mt-4 text-gray-400">{experience.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {experience.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-purple-600 text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience; // ✅ default export
