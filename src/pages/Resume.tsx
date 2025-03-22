
import React, { useEffect } from 'react';
import Layout from '../components/Layout';

const Resume: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-6 py-12 animate-fade-in">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-custom-darkGray mb-12 pb-4 border-b border-gray-200">Résumé</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-custom-darkGray mb-6">Experience</h2>
            
            <div className="space-y-8">
              <div className="group">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-medium text-custom-darkGray group-hover:text-custom-gray transition-colors duration-300">Senior UX Designer</h3>
                  <span className="text-sm text-custom-mediumGray">2020 - Present</span>
                </div>
                <h4 className="text-md font-medium text-custom-mediumGray mb-2">Creative Agency Inc.</h4>
                <p className="text-custom-mediumGray leading-relaxed">
                  Led user experience design for enterprise clients across fintech, healthcare, and e-commerce sectors. Collaborated with cross-functional teams to deliver award-winning digital products.
                </p>
              </div>
              
              <div className="group">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-medium text-custom-darkGray group-hover:text-custom-gray transition-colors duration-300">UI/UX Designer</h3>
                  <span className="text-sm text-custom-mediumGray">2018 - 2020</span>
                </div>
                <h4 className="text-md font-medium text-custom-mediumGray mb-2">Digital Studios Ltd.</h4>
                <p className="text-custom-mediumGray leading-relaxed">
                  Designed user interfaces for mobile applications and responsive websites. Created wireframes, prototypes, and user flows while ensuring consistent brand identities.
                </p>
              </div>
              
              <div className="group">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-medium text-custom-darkGray group-hover:text-custom-gray transition-colors duration-300">Junior Web Developer</h3>
                  <span className="text-sm text-custom-mediumGray">2016 - 2018</span>
                </div>
                <h4 className="text-md font-medium text-custom-mediumGray mb-2">Tech Innovations</h4>
                <p className="text-custom-mediumGray leading-relaxed">
                  Developed and maintained client websites using HTML, CSS, and JavaScript. Collaborated with designers to implement responsive and accessible web solutions.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-custom-darkGray mb-6">Education</h2>
            
            <div className="space-y-8">
              <div className="group">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-medium text-custom-darkGray group-hover:text-custom-gray transition-colors duration-300">Master of Interaction Design</h3>
                  <span className="text-sm text-custom-mediumGray">2014 - 2016</span>
                </div>
                <h4 className="text-md font-medium text-custom-mediumGray mb-2">Design Institute</h4>
                <p className="text-custom-mediumGray leading-relaxed">
                  Specialized in user research, information architecture, and interactive prototyping. Graduated with honors and received the Excellence in Design Innovation award.
                </p>
              </div>
              
              <div className="group">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-medium text-custom-darkGray group-hover:text-custom-gray transition-colors duration-300">Bachelor of Computer Science</h3>
                  <span className="text-sm text-custom-mediumGray">2010 - 2014</span>
                </div>
                <h4 className="text-md font-medium text-custom-mediumGray mb-2">University of Technology</h4>
                <p className="text-custom-mediumGray leading-relaxed">
                  Foundation in programming, algorithms, and software development. Minor in Graphic Design with focus on digital media.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-custom-darkGray mb-6">Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-custom-darkGray mb-4">Design</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-32 text-custom-mediumGray">UI/UX Design</span>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-custom-gray h-full rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32 text-custom-mediumGray">Figma</span>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-custom-gray h-full rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32 text-custom-mediumGray">Photoshop</span>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-custom-gray h-full rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32 text-custom-mediumGray">Illustrator</span>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-custom-gray h-full rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-custom-darkGray mb-4">Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-32 text-custom-mediumGray">HTML/CSS</span>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-custom-steelGray h-full rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32 text-custom-mediumGray">JavaScript</span>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-custom-steelGray h-full rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32 text-custom-mediumGray">React</span>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-custom-steelGray h-full rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="w-32 text-custom-mediumGray">Node.js</span>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-custom-steelGray h-full rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-custom-darkGray mb-6">Contact</h2>
            
            <p className="text-custom-mediumGray leading-relaxed mb-6">
              Interested in working together? Feel free to reach out through any of the channels below.
            </p>
            
            <div className="space-y-2">
              <p className="text-custom-darkGray">
                <span className="font-medium">Email:</span> contact@portfolio.com
              </p>
              <p className="text-custom-darkGray">
                <span className="font-medium">Location:</span> New York, NY
              </p>
            </div>
            
            <button className="mt-8 px-8 py-3 bg-custom-steelGray text-white rounded transition-all duration-300 hover:bg-opacity-90 transform hover:-translate-y-1">
              Download Full CV
            </button>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
