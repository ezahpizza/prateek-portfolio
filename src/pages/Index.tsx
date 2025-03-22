
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import ProjectCarousel from '../components/ProjectCarousel';

const Index: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="main-section">
        <div className="description-section animate-fade-in">
          <span className="text-sm font-medium text-custom-mediumGray mb-2">HELLO THERE</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom-darkGray mb-6">
            I'm a designer &<br />developer based<br />in New York.
          </h1>
          
          <div className="space-y-4 max-w-lg mt-4">
            <p className="text-custom-mediumGray leading-relaxed">
              I specialize in crafting intuitive digital experiences where functionality meets creativity. With a strong foundation in both design and development, I create solutions that not only look visually stunning but also deliver seamless user experiences.
            </p>
            <p className="text-custom-mediumGray leading-relaxed">
              My approach combines minimalist aesthetics with innovative technology to build websites and applications that leave a lasting impression. I'm passionate about clean code, responsive design, and creating meaningful digital products.
            </p>
          </div>
          
          <button className="mt-8 px-8 py-3 bg-custom-steelGray text-white rounded transition-all duration-300 hover:bg-opacity-90 transform hover:-translate-y-1">
            View My Work
          </button>
        </div>
        
        <ProjectCarousel />
      </section>
    </Layout>
  );
};

export default Index;
