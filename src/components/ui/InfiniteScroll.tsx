import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import "./InfiniteScroll.css";

gsap.registerPlugin(Observer);

interface InfiniteScrollItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface InfiniteScrollProps {
  width?: string;
  maxHeight?: string;
  negativeMargin?: string;
  items?: InfiniteScrollItem[];
  itemMinHeight?: number;
  isTilted?: boolean;
  tiltDirection?: "left" | "right";
  autoplay?: boolean;
  autoplaySpeed?: number;
  autoplayDirection?: "down" | "up";
  pauseOnHover?: boolean;
}

const ProjectCard: React.FC<{ project: InfiniteScrollItem }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleArrowClick = (e: React.MouseEvent, link: string) => {
    e.stopPropagation();
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="relative w-full h-full bg-black overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Hover card */}
      <div className={`
        absolute bottom-0 left-0 w-full flex justify-center 
        ${isHovered ? 'translate-y-0' : 'translate-y-full'}
        transition-transform duration-500 ease-in-out z-20
        pb-4
      `}>
        <div className="bg-purple-600/90 text-white shadow-lg w-[95%] relative">
          <div className="p-4 pr-12">
            <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
            <p className="text-sm text-white/90 mt-1 leading-snug">{project.description}</p>
          </div>
          
          <button
            onClick={(e) => handleArrowClick(e, project.link)}
            className="
              absolute top-3 right-3
              w-8 h-8
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
        absolute bottom-4 left-4 text-gray-300 text-lg font-semibold 
        ${isHovered ? 'opacity-0' : 'opacity-100'}
        transition-opacity duration-300
      `}>
        {project.title}
      </div>
    </div>
  );
};

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  width = "30rem",
  maxHeight = "100%",
  negativeMargin = "-0.5em",
  items = [],
  itemMinHeight = 150,
  isTilted = false,
  tiltDirection = "left",
  autoplay = false,
  autoplaySpeed = 0.5,
  autoplayDirection = "down",
  pauseOnHover = false,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const getTiltTransform = (): string => {
    if (!isTilted || isMobile) return "none"; // Disable tilt on mobile
    return tiltDirection === "left"
      ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
      : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)";
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (items.length === 0) return;

    const divItems = gsap.utils.toArray<HTMLDivElement>(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemStyle = getComputedStyle(firstItem);
    
    let totalItemSize: number;
    let wrapFn: (value: number) => number;

    if (isMobile) {
      // Horizontal layout for mobile
      const itemWidth = firstItem.offsetWidth;
      const itemMarginLeft = parseFloat(itemStyle.marginLeft) || 0;
      const itemMarginRight = parseFloat(itemStyle.marginRight) || 0;
      const totalItemWidth = itemWidth + itemMarginLeft + itemMarginRight;
      const totalWidth = totalItemWidth * items.length;
      
      totalItemSize = totalItemWidth;
      wrapFn = gsap.utils.wrap(-totalWidth, totalWidth);

      // Create duplicates for seamless infinite scroll
      const extendedItems = [...divItems, ...divItems, ...divItems];
      extendedItems.forEach((child, i) => {
        const x = (i - items.length) * totalItemWidth;
        gsap.set(child, { x, y: 0 });
      });
    } else {
      // Vertical layout for desktop
      const itemHeight = firstItem.offsetHeight;
      const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
      const totalItemHeight = itemHeight + itemMarginTop;
      const totalHeight = itemHeight * items.length + itemMarginTop * (items.length - 1);
      
      totalItemSize = totalItemHeight;
      wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

      divItems.forEach((child, i) => {
        const y = i * totalItemHeight;
        gsap.set(child, { y, x: 0 });
      });
    }

    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      preventDefault: true,
      onPress: ({ target }) => {
        (target as HTMLElement).style.cursor = "grabbing";
      },
      onRelease: ({ target }) => {
        (target as HTMLElement).style.cursor = "grab";
      },
      onChange: ({ deltaX, deltaY, isDragging, event }) => {
        const d = isMobile 
          ? (event.type === "wheel" ? -deltaX : deltaX)
          : (event.type === "wheel" ? -deltaY : deltaY);
        const distance = isDragging ? d * 5 : d * 10;
        
        divItems.forEach((child) => {
          if (isMobile) {
            gsap.to(child, {
              duration: 0.5,
              ease: "expo.out",
              x: `+=${distance}`,
              modifiers: {
                x: gsap.utils.unitize(wrapFn),
              },
            });
          } else {
            gsap.to(child, {
              duration: 0.5,
              ease: "expo.out",
              y: `+=${distance}`,
              modifiers: {
                y: gsap.utils.unitize(wrapFn),
              },
            });
          }
        });
      },
    });

    let rafId: number;
    if (autoplay) {
      const directionFactor = autoplayDirection === "down" ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      const tick = () => {
        divItems.forEach((child) => {
          if (isMobile) {
            gsap.set(child, {
              x: `+=${speedPerFrame}`,
              modifiers: {
                x: gsap.utils.unitize(wrapFn),
              },
            });
          } else {
            gsap.set(child, {
              y: `+=${speedPerFrame}`,
              modifiers: {
                y: gsap.utils.unitize(wrapFn),
              },
            });
          }
        });
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);

      if (pauseOnHover) {
        const stopTicker = () => rafId && cancelAnimationFrame(rafId);
        const startTicker = () => {
          rafId = requestAnimationFrame(tick);
        };

        container.addEventListener("mouseenter", stopTicker);
        container.addEventListener("mouseleave", startTicker);

        return () => {
          observer.kill();
          stopTicker();
          container.removeEventListener("mouseenter", stopTicker);
          container.removeEventListener("mouseleave", startTicker);
        };
      } else {
        return () => {
          observer.kill();
          rafId && cancelAnimationFrame(rafId);
        };
      }
    }

    return () => {
      observer.kill();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [
    items,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    pauseOnHover,
    isTilted,
    tiltDirection,
    negativeMargin,
    isMobile,
  ]);

  return (
    <>
      <style>
        {`
          .infinite-scroll-wrapper {
            max-height: ${isMobile ? 'auto' : maxHeight};
            height: ${isMobile ? `${itemMinHeight}px` : 'auto'};
          }

          .infinite-scroll-container {
            width: ${isMobile ? 'auto' : width};
            flex-direction: ${isMobile ? 'row' : 'column'};
            height: ${isMobile ? '100%' : 'auto'};
          }

          .infinite-scroll-item {
            height: ${itemMinHeight}px;
            margin-top: ${isMobile ? '0' : negativeMargin};
            margin-left: ${isMobile ? '0.5rem' : '0'};
            margin-right: ${isMobile ? '0.5rem' : '0'};
            flex-shrink: 0;
          }
        `}
      </style>

      <div className="infinite-scroll-wrapper" ref={wrapperRef}>
        <div
          className="infinite-scroll-container"
          ref={containerRef}
          style={{
            transform: getTiltTransform(),
          }}
        >
          {items.map((project, i) => (
          <div className="infinite-scroll-item" key={project.id || i}>
            <ProjectCard project={project} />
          </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;