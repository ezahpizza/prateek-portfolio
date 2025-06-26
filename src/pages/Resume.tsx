import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  experiences, 
  educations, 
  skillCategories
} from '../data/resumeData';
import SkillCategory from '../components/resume/SkillCategory';
import EducationItem from '../components/resume/EducationItem';
import ClickSpark from '../components/ui/ClickSpark';
import TextPressure from '../components/ui/TextPressure';
import SpotlightCard from '../components/ui/SpotlightCard';
import MagnetLines  from '../components/ui/MagnetLines';
import InfiniteMenu   from '../components/ui/InfiniteMenu';
import projects from '../data/projectsData'; 


const Resume: React.FC = () => {
  const [navFooterVisible, setNavFooterVisible] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  
    setTimeout(() => setNavFooterVisible(true), 100);
  }, []); 

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1PtyOe1Ye1EM_mCaSBEsvqceJkygcg_2F/view?usp=sharing', '_blank');
  };

  return (
    <ClickSpark
              sparkColor='#fff'
              sparkSize={10}
              sparkRadius={15}
              sparkCount={8}
              duration={400}
            >
    <div className="select-none flex flex-col min-h-screen bg-custom-steelGray">
      <Navbar 
        className={`transform transition-transform duration-700 ease-out ${navFooterVisible ? 'translate-y-0' : '-translate-y-full'}`} 
      />
      <div className="container mx-auto px-6 pt-24 pb-12 animate-fade-in">
        <div className="max-w-7xl mx-auto">
         <TextPressure
          text="Résumé"
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
          
          <section className="mb-12 overflow-hidden">
            <h2 className="text-2xl font-semibold text-custom-lightGray mb-6">Experience</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {experiences.map((experience, index) => {
                const isExpanded = expandedCard === index;
                const hasMoreResponsibilities = experience.responsibilities.length > 2;
                
                return (
                  <SpotlightCard 
                    key={index}
                    className={`bg-custom-purplePop/20 backdrop-blur-sm border border-custom-mediumGray/30 rounded-lg p-6 hover:border-custom-lightGray/50 transition-all duration-500 ${
                      isExpanded 
                        ? 'md:col-span-2 transform -translate-y-2 shadow-2xl shadow-custom-purplePop/20 z-10 relative' 
                        : 'h-full'
                    }`}
                    spotlightColor="rgba(255, 0, 102, .5)"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex flex-col justify-between mb-3">
                        <h3 className="text-lg font-medium text-custom-hotRed group-hover:text-custom-hotRed transition-colors duration-300 mb-1">
                          {experience.title}
                        </h3>
                        <div className="flex justify-between items-center">
                          <h4 className="text-sm font-medium text-custom-lightGray">{experience.company}</h4>
                          <span className="text-xs text-custom-mediumGray bg-custom-steelGray/70 px-2 py-1 rounded">
                            {experience.period}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-3 border-t border-custom-hotRed/30 pt-3">
                        {(isExpanded ? experience.responsibilities : experience.responsibilities.slice(0, 2)).map((responsibility, respIndex) => (
                          <p key={respIndex} className={`text-sm text-custom-lightGray/90 leading-relaxed ${!isExpanded ? 'line-clamp-3' : ''}`}>
                            {responsibility}
                          </p>
                        ))}
                        
                        {hasMoreResponsibilities && (
                          <button
                            onClick={() => setExpandedCard(isExpanded ? null : index)}
                            className="text-xs text-custom-purplePop hover:text-custom-hotRed italic transition-colors duration-300 cursor-pointer underline-offset-2 hover:underline"
                          >
                            {isExpanded 
                              ? 'Show less...' 
                              : `+${experience.responsibilities.length - 2} more responsibilities...`
                            }
                          </button>
                        )}
                      </div> 
                    </div>
                  </SpotlightCard> 
                );
              })}
              
              {window.innerWidth >= 768 && experiences.length % 3 !== 0 && 
                Array.from({ length: 3 - (experiences.length % 3) }, (_, index) => (
                  <div key={`magnet-${index}`} className="hidden md:flex items-center justify-center">
                    <MagnetLines
                      rows={6}
                      columns={6}
                      containerSize="12rem"
                      lineColor="rgba(255, 0, 102, 0.3)"
                      lineWidth="5px"
                      lineHeight="2.5rem"
                      baseAngle={-15}
                    />
                  </div>
                ))
              }
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-custom-lightGray mb-6">Education</h2>
            <div className="space-y-8">
              {educations.map((education, index) => (
                <EducationItem key={index} education={education} />
              ))}
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-custom-lightGray mb-6">Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:border-t md:pt-4 md:border-l md:pl-4 border-custom-hotRed">
              <SkillCategory title="Design" skills={skillCategories.design} barColor="bg-custom-purplePop" />
              <SkillCategory title="Frontend Development" skills={skillCategories.frontend} barColor="bg-custom-hotRed" />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:pt-4 md:border-l md:pl-4 border-custom-hotRed">
              <SkillCategory title="Backend Development" skills={skillCategories.backend} barColor="bg-custom-hotRed" />
              <SkillCategory title="AI / ML" skills={skillCategories.aiMl} barColor="bg-custom-purplePop" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:border-b md:pb-4 md:border-r md:pr-4 border-custom-hotRed">
              <SkillCategory title="Big Data" skills={skillCategories.bigData} barColor="bg-custom-purplePop" />
              <SkillCategory title="DevOps" skills={skillCategories.devOps} barColor="bg-custom-hotRed" />
            </div>
          </section>
          
          <section className='mb-12'>
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <button 
                onClick={handleDownloadCV}
                className="inline-block mt-8 px-8 py-3 bg-custom-purplePop text-white rounded transition-all duration-300 hover:bg-custom-hotRed w-52 text-center"
              >
                Download Full CV
              </button>

            </div>
          </section>
        </div>
      <section className="overflow-hidden">
        <h2 className="text-2xl font-semibold text-custom-lightGray mb-6">Projects</h2>
      </section>
        <section className="overflow-hidden rounded-full">
          <div className="relative h-600px bg-custom_steelgray">
                <InfiniteMenu items={projects}/>
          </div>
        </section>
      </div>

      <Footer 
        className={`transform transition-transform duration-700 ease-out ${navFooterVisible ? 'translate-y-0' : 'translate-y-full'}`} 
      />
    </div></ClickSpark>
  );
};

export default Resume;