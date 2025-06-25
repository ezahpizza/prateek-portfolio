import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  experiences, 
  educations, 
  skillCategories
} from '../data/resumeData';
import SkillCategory from '../components/resume/SkillCategory';
import ExperienceItem from '../components/resume/ExperienceItem';
import EducationItem from '../components/resume/EducationItem';
import ClickSpark from '../components/ui/ClickSpark';
import TextPressure from '../components/ui/TextPressure';


const Resume: React.FC = () => {
  const [navFooterVisible, setNavFooterVisible] = useState(false);

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
    <div className="flex flex-col min-h-screen bg-custom-steelGray">
      <Navbar 
        className={`transform transition-transform duration-700 ease-out ${navFooterVisible ? 'translate-y-0' : '-translate-y-full'}`} 
      />
      <div className="container mx-auto px-6 pt-24 pb-12 animate-fade-in">
        <div className="max-w-5xl mx-auto">
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
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-custom-lightGray mb-6">Experience</h2>
            
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <ExperienceItem 
                  key={index} 
                  experience={experience}
                />
              ))}
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
          
          <section>
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
      </div>
      <Footer 
        className={`transform transition-transform duration-700 ease-out ${navFooterVisible ? 'translate-y-0' : 'translate-y-full'}`} 
      />
    </div></ClickSpark>
  );
};

export default Resume;
