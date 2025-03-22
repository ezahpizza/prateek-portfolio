
import React, { useState, useEffect } from 'react';

// Project data - in a real application, this would come from an API or database
const projects = [
  {
    id: 1,
    title: 'Modern Web Application',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2420&q=80',
  },
  {
    id: 3,
    title: 'Mobile App Design',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
  },
  {
    id: 4,
    title: 'Brand Identity System',
    image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
  },
];

const ProjectCarousel: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate projects
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeProject]);

  const nextProject = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
      setIsAnimating(false);
    }, 600);
  };

  const prevProject = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
      setIsAnimating(false);
    }, 600);
  };

  return (
    <div className="carousel-section relative">
      <div className="flex flex-col items-start mb-8">
        <span className="text-sm text-custom-mediumGray mb-2">FEATURED PROJECTS</span>
        <h2 className="text-2xl font-semibold text-custom-darkGray">Recent Work</h2>
      </div>

      <div className="relative h-full w-full overflow-hidden rounded-lg bg-custom-lightGray">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-all duration-800 ease-in-out ${
              index === activeProject 
                ? 'opacity-100 transform translate-y-0 z-10' 
                : 'opacity-0 transform translate-y-full z-0'
            }`}
          >
            <div className="project-card h-full">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-img"
                loading="lazy"
              />
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeProject ? 'bg-white w-4' : 'bg-white bg-opacity-60'
              }`}
              onClick={() => setActiveProject(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white bg-opacity-30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-opacity-50 transition-all duration-300"
          onClick={prevProject}
          aria-label="Previous project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white bg-opacity-30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-opacity-50 transition-all duration-300"
          onClick={nextProject}
          aria-label="Next project"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
