import React, { useState } from 'react';
import projects from '../data/projectsData'; 

interface VerticalProjectsCarouselProps {
  className?: string;
}

const VerticalProjectsCarousel: React.FC<VerticalProjectsCarouselProps> = ({ className = '' }) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardClick = (e: React.MouseEvent, projectId: number) => {
    e.preventDefault();
    if (window.innerWidth < 768) {
      setExpandedCard(expandedCard === projectId ? null : projectId);
    }
  };

  const handleArrowClick = (e: React.MouseEvent, link: string) => {
    e.stopPropagation();
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`relative h-full mt-6 md:mt-0 flex flex-col ${className}`}>
      {/* Scrollable container */}
      <div
          className="
          flex md:flex-col
          overflow-x-auto md:overflow-y-auto
          h-auto md:h-full
          scroll-smooth
          hide-scrollbar
          gap-4 md:gap-6
          px-4 md:px-6
          pt-4 md:pt-8
          pb-4 md:pb-28
          flex-1
          md:flex-grow
        "
        style={{
          scrollSnapType: 'x mandatory md:y mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {projects.map((project) => {
          const isExpanded = expandedCard === project.id;
          
          return (
            <div
              key={project.id}
              className="
                flex-shrink-0
                snap-center
                w-[70%] md:w-full
                aspect-[16/10] md:h-72
                max-h-none md:max-h-none
                bg-black
                overflow-hidden
                relative
                group
                cursor-pointer md:cursor-default
              "
              onClick={(e) => handleCardClick(e, project.id)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Hover/Tap card */}
              <div className={`
                absolute bottom-0 left-0 w-full flex justify-center 
                ${isExpanded ? 'translate-y-0' : 'translate-y-full'}
                md:group-hover:translate-y-0 md:translate-y-full 
                transition-transform duration-500 ease-in-out z-20
                pb-2 md:pb-4
              `}>
                <div className="bg-custom-purplePop/90 text-white shadow-lg w-[90%] md:w-[95%] relative">
                  <div className="p-3 md:p-4 pr-10 md:pr-12">
                    <h3 className="text-base md:text-lg font-bold leading-tight">{project.title}</h3>
                    <p className="text-xs md:text-sm text-white/90 mt-1 leading-snug">{project.description}</p>
                  </div>
                  
                  {/* nav button */}
                  <button
                    onClick={(e) => handleArrowClick(e, project.link)}
                    className="
                      absolute top-2 right-2 md:top-3 md:right-3
                      w-6 h-6 md:w-8 md:h-8
                      bg-white/20 hover:bg-white/30
                      rounded-full
                      flex items-center justify-center
                      transition-colors duration-200
                      group/arrow
                    "
                    aria-label={`Open ${project.title} project`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-white transform rotate-45 group-hover/arrow:scale-110 transition-transform duration-200"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Always-visible title */}
              <div className={`
                absolute bottom-4 left-4 text-custom-steelGray text-lg font-semibold 
                ${isExpanded ? 'opacity-0' : 'opacity-100'}
                md:group-hover:opacity-0 
                transition-opacity duration-300
              `}>
                {project.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Hide scrollbar globally */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default VerticalProjectsCarousel;