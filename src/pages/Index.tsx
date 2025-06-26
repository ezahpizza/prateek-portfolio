import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import VerticalProjectsCarousel from '../components/VerticalProjectsCarousel';
import TextPressure from '../components/ui/TextPressure';
import ClickSpark from '../components/ui/ClickSpark';
import ScrollVelocity from '../components/ui/ScrollVelocity';


interface IndexProps {
  showContent?: boolean;
}

const Index: React.FC<IndexProps> = ({ showContent = true }) => {
  // Animation state for each element
  const [navFooterVisible, setNavFooterVisible] = useState(false);
  const [paragraph1Visible, setParagraph1Visible] = useState(false);
  const [paragraph2Visible, setParagraph2Visible] = useState(false);
  const [paragraph3Visible, setParagraph3Visible] = useState(false);
  const [paragraph4Visible, setParagraph4Visible] = useState(false);
  const [carouselVisible, setCarouselVisible] = useState(false);

useEffect(() => {
  if (!showContent) return;
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
  }, [showContent]);

  return (
  <>
    <div className="select-none min-h-screen w-full bg-custom-steelGray flex flex-col relative overflow-x-hidden">
      
      <Navbar 
        className={`transform transition-transform duration-700 ease-out ${navFooterVisible ? 'translate-y-0' : '-translate-y-full'}`} 
      />
      
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <main className="flex-grow flex flex-col md:flex-row md:h-screen w-full z-10 overflow-hidden">
            {/* LEFT SECTION - Content with paragraphs */}
            <div className="w-full md:w-2/3 flex items-center md:justify-start px-4 md:pl-8 md:pr-12 pt-32 pb-8 md:pt-20 md:pb-[80px] z-50">
              <div className="space-y-6 md:border-t md:mt-12 md:border-l md:pl-4 border-custom-purplePop max-w-full md:max-w-3xl w-full">

                <p 
                  className={`pt-4 text-3xl sm:text-4xl md:text-6xl text-custom-lightGray transform transition-all duration-500 ease-out leading-tight ${
                    paragraph1Visible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                  }`}
                >Currently an ML engineer intern at 
                </p>
                <div  className={` transform transition-all duration-500 ease-out leading-tight ${
                    paragraph1Visible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                  }`}>
                    <TextPressure
                      text="Samsung (R&D)"
                      flex={true}
                      alpha={false}
                      stroke={false}
                      width={true}
                      weight={true}
                      italic={true}
                      textColor="#ffffff"
                      strokeColor="#ff0000"
                      minFontSize={36}
                    /> 
                </div>
                
                <p 
                  className={`text-xl sm:text-2xl md:text-3xl text-custom-gray transform transition-all duration-500 ease-out leading-relaxed ${
                    paragraph2Visible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                  }`}
                >
                  Research Assistant at ITER, SOA. Worked with LadderMedia as a Quality Analyst and PreGrad as a Data Science intern 
                </p>
                
                <p className={`text-custom-gray transform transition-all duration-500 ease-out ${
                    paragraph4Visible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                  }`}>
                  with a few freelance jobs as a graphic designer.
                </p>
                
                <p 
                  className={`text-xl sm:text-2xl md:text-3xl text-custom-lightGray transform transition-all duration-500 ease-out leading-relaxed ${
                    paragraph3Visible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                  }`}
                >
                  Specialising in just about everything  <br className="hidden sm:block" /> AI / ML and web / software development.
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

            {/* VERTICAL SCROLL VELOCITY - Between sections on desktop, between top/bottom on mobile */}
            <div className={`min-h-screen hidden mr-8 md:flex w-16 items-center justify-center transform transition-all duration-500 ease-out ${
              carouselVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
              <div className="-rotate-90 origin-center whitespace-nowrap h-full flex items-center justify-center">
                <ScrollVelocity
                    numCopies={15}
                    texts={['may the source code', 'be with you always']} 
                    velocity={200} 
                    className="custom-scroll-text" 
                    scrollerClassName="text-custom-lightGray"
                    scrollerStyle={{ minWidth: '200vw' }}
                  />
              </div>
            </div>

            {/* Mobile ScrollVelocity - Horizontal between sections */}
            <div className={`md:hidden w-full py-4 transform transition-all duration-500 ease-out ${
              carouselVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}>
              <ScrollVelocity
                    numCopies={15}
                    texts={['may the source code', 'be with you always']} 
                    velocity={200} 
                    className="custom-scroll-text" 
                    scrollerClassName="text-custom-lightGray"
                    scrollerStyle={{ minWidth: '200vw' }}
                  />
            </div>

            {/* RIGHT SECTION - Carousel */}
            <div 
              className={`w-full md:w-1/3 h-auto md:h-full transform transition-all duration-500 ease-out mb-16 md:mb-0 md:pt-20 ${
                carouselVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
              }`}
            >
              <VerticalProjectsCarousel />
            </div>
          </main>

          </ClickSpark>

          <Footer 
            className={`transform transition-transform duration-700 ease-out ${navFooterVisible ? 'translate-y-0' : 'translate-y-full'}`} 
          />
        </div>
    </>
  );
};

export default Index;