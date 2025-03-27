import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VerticalProjectsCarousel from '../components/VerticalProjectsCarousel';

const Index: React.FC = () => {
  // Animation state for each element
  const [navFooterVisible, setNavFooterVisible] = useState(false);
  const [paragraph1Visible, setParagraph1Visible] = useState(false);
  const [paragraph2Visible, setParagraph2Visible] = useState(false);
  const [paragraph3Visible, setParagraph3Visible] = useState(false);
  const [paragraph4Visible, setParagraph4Visible] = useState(false);
  const [carouselVisible, setCarouselVisible] = useState(false);

  useEffect(() => {
    // Sequential animation with timings
    const animationSequence = async () => {
      // Start with navbar and footer
      setTimeout(() => setNavFooterVisible(true), 100);
      
      // Paragraphs sequence
      setTimeout(() => setParagraph1Visible(true), 800);
      setTimeout(() => setParagraph2Visible(true), 1000);
      setTimeout(() => setParagraph3Visible(true), 1200);
      setTimeout(() => setParagraph4Visible(true), 1400);
      
      // Finally the carousel
      setTimeout(() => setCarouselVisible(true), 1600);
    };

    animationSequence();
  }, []);

  return (
    <div className="min-h-screen md:h-screen bg-custom-steelGray flex flex-col md:overflow-hidden relative">
      <Navbar 
        className={`transform transition-transform duration-700 ease-out ${navFooterVisible ? 'translate-y-0' : '-translate-y-full'}`} 
      />

      <main className="flex-grow flex flex-col md:flex-row md:h-full md:overflow-hidden z-10 pt-4">
        {/* LEFT SECTION - Content with paragraphs */}
        <div className="w-full md:w-2/3 flex items-center md:justify-start px-4 md:pl-8 md:pr-12 pt-24 pb-8 md:pt-0 md:pb-[80px]">
          <div className="space-y-6 md:border-t md:pt-4 md:border-l md:pl-4 border-custom-purplePop max-w-3xl">
            <p 
              className={`text-4xl md:text-6xl text-custom-lightGray transform transition-all duration-500 ease-out ${
                paragraph1Visible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
            >
              Currently an ML engineer intern at Samsung (R&D).
            </p>
            
            <p 
              className={`text-2xl md:text-3xl text-custom-gray transform transition-all duration-500 ease-out ${
                paragraph2Visible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
            >
              Living in Bhubaneshwar, designing models that <span className="md:hidden"><br /></span> help Samsung systems catch images better.
            </p>
            
            <p 
              className={`text-2xl md:text-3xl text-custom-lightGray transform transition-all duration-500 ease-out ${
                paragraph3Visible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
            >
              Specialising in just about everything AI / ML and <br />web / software development.
            </p>
            
            <p 
              className={`text-custom-lightGray transform transition-all duration-500 ease-out ${
                paragraph4Visible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
              }`}
            >
              i also paint on the side which you can check out,&nbsp;
              <a
                href="https://prateeks-art-gallery.webflow.io"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-white hover:text-custom-mediumGray transition"
              >
                here
              </a>
              :).
            </p>
          </div>
        </div>

        {/* RIGHT SECTION - Carousel */}
        <div 
          className={`w-full md:w-1/3 h-auto md:h-full transform transition-all duration-500 ease-out mb-16 md:mb-0 ${
            carouselVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}
        >
          <VerticalProjectsCarousel />
        </div>
      </main>

      <Footer 
        className={`transform transition-transform duration-700 ease-out ${navFooterVisible ? 'translate-y-0' : 'translate-y-full'}`} 
      />
    </div>
  );
};

export default Index;
