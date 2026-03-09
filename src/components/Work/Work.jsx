import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const Work = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Saurya29/repos?sort=updated&per_page=100');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        
        // Filter: exclude forks unless they have stars
        const filteredRepos = data.filter(repo => !repo.fork || repo.stargazers_count > 0);
        
        // Sort by updated_at descending
        filteredRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        
        setRepos(filteredRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const formatRepoName = (name) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleOpenModal = (repo) => {
    setSelectedRepo(repo);
  };

  const handleCloseModal = () => {
    setSelectedRepo(null);
  };

  const LoadingSkeleton = () => (
    <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-4">
            <div className="w-full h-48 bg-gray-700 rounded-xl animate-pulse"></div>
          </div>
          <div className="p-6">
            <div className="h-6 bg-gray-700 rounded mb-2 animate-pulse"></div>
            <div className="h-4 bg-gray-700 rounded mb-4 animate-pulse"></div>
            <div className="flex gap-2 mb-4">
              <div className="h-6 w-16 bg-gray-700 rounded-full animate-pulse"></div>
              <div className="h-6 w-20 bg-gray-700 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (error) {
    return (
      <section id="work" className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative">
        <div className="text-center text-red-500">
          <p>Failed to load projects: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <div
              key={repo.id}
              onClick={() => handleOpenModal(repo)}
              className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-4">
                <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">{formatRepoName(repo.name).charAt(0)}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {formatRepoName(repo.name)}
                </h3>
                <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                  {repo.description || "No description available."}
                </p>
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-400">
                  <span>⭐ {repo.stargazers_count}</span>
                  <span>🍴 {repo.forks_count}</span>
                </div>
                <div className="mb-4">
                  {(repo.topics && repo.topics.length > 0 ? repo.topics : [repo.language]).filter(Boolean).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View All on GitHub Button */}
      <div className="text-center mt-12">
        <a
          href="https://github.com/Saurya29"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-600 hover:bg-purple-800 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
        >
          View All on GitHub
        </a>
      </div>

      {/* Modal Container */}
      {selectedRepo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <div className="lg:w-full w-[95%] h-48 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">{formatRepoName(selectedRepo.name).charAt(0)}</span>
                </div>
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {formatRepoName(selectedRepo.name)}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedRepo.description || "No description available."}
                </p>
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                  <span>⭐ {selectedRepo.stargazers_count} stars</span>
                  <span>🍴 {selectedRepo.forks_count} forks</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {(selectedRepo.topics && selectedRepo.topics.length > 0 ? selectedRepo.topics : [selectedRepo.language]).filter(Boolean).map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedRepo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-purple-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  {selectedRepo.homepage && (
                    <a
                      href={selectedRepo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-purple-600 hover:bg-purple-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                    >
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Work;
