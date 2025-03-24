import React from 'react';
import projects from '../data/projectsData'; 

interface VerticalProjectsCarouselProps {
  className?: string;
}

const VerticalProjectsCarousel: React.FC<VerticalProjectsCarouselProps> = ({ className = '' }) => {
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
        {projects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
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
            "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />

            {/* Hover card */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center pb-4 group-hover:translate-y-0 translate-y-full transition-transform duration-500 ease-in-out z-20">
              <div className="bg-custom-purplePop/90 text-white p-4 shadow-lg w-[95%]">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <p className="text-sm text-white/90">{project.description}</p>
              </div>
            </div>

            {/* Always-visible title (fades out on hover) */}
            <div className="absolute bottom-4 left-4 text-custom-steelGray text-lg font-semibold group-hover:opacity-0 transition-opacity duration-300">
              {project.title}
            </div>
          </a>
        ))}
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