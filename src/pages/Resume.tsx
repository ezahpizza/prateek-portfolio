import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  experiences, 
  educations, 
  skillCategories, 
  Experience,
  Education,
  Skill
} from '../data/resumeData';
import { useNavigate } from 'react-router-dom';

const Resume: React.FC = () => {
  const [navFooterVisible, setNavFooterVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  
    setTimeout(() => setNavFooterVisible(true), 100);
  }, []); 

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1f-8FRWW8pYf4_hd0r6lmn5NC5kXdNeCn/view?usp=sharing', '_blank');
  };

  const SkillCategory = ({ 
    title, 
    skills, 
    barColor 
  }: { 
    title: string, 
    skills: Skill[],
    barColor: string 
  }) => (
    <div>
      <h3 className="text-lg font-medium text-custom-lightGray mb-4">{title}</h3>
      <ul className="space-y-4">
        {skills.map((skill) => (
          <li key={skill.name} className="flex items-center space-x-6">
            <span className="w-32 text-custom-lightGray">{skill.name}</span>
            <div className="flex-1 bg-gray-700 h-2 rounded-full overflow-hidden">
              <div 
                className={`${barColor} h-full rounded-full`}
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )

  const ExperienceItem = ({ 
    experience
  }: { 
    experience: Experience
  }) => (
    <div className="group">
      <div className="flex flex-col md:flex-row justify-between mb-2">
        <h3 className="text-xl font-medium text-custom-purplePop group-hover:text-custom-hotRed transition-colors duration-300">
          {experience.title}
        </h3>
        <span className="text-sm text-custom-mediumGray">{experience.period}</span>
      </div>
      <h4 className="text-md font-medium text-custom-lightGray mb-2">{experience.company}</h4>

      <div className="space-y-6 md:border-t md:pt-4 md:border-l md:pl-4 border-custom-hotRed max-w-3xl">
        {experience.responsibilities.map((responsibility, index) => (
          <p key={index} className="text-custom-lightGray leading-relaxed">
            {responsibility}
          </p>
        ))}
      </div>  
    </div>
  );

  const EducationItem = ({ 
    education 
  }: { 
    education: Education
  }) => (
    <div className="group md:border-b md:pb-2 md:border-r md:pr-4 border-custom-hotRed">
        <div className="flex flex-col md:flex-row justify-between mb-2 ">
          <h3 className="text-xl font-medium text-custom-purplePop group-hover:text-custom-hotRed transition-colors duration-300">
            {education.degree}
          </h3>
          <span className="text-sm text-custom-mediumGray">{education.period}</span>
        </div>
        <h4 className="text-md font-medium text-custom-lightGray mb-2">
          {education.institution}
        </h4>

        <div className="space-y-2 max-w-3xl">
          {education.details.map((detail, index) => (
            <p key={index} className="text-custom-lightGray leading-relaxed">
              {detail}
            </p>
          ))}
        </div>  
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-custom-steelGray">
      <Navbar 
        className={`transform transition-transform duration-700 ease-out ${navFooterVisible ? 'translate-y-0' : '-translate-y-full'}`} 
      />
      <div className="container mx-auto px-6 pt-24 pb-12 animate-fade-in">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-custom-lightGray mb-12 pb-4 border-b border-custom-purplePop">Résumé</h1>
          
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
              <SkillCategory title="Development" skills={skillCategories.development} barColor="bg-custom-hotRed" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:border-b md:pb-4 md:border-r md:pr-4 border-custom-hotRed">
              <SkillCategory title="AI / ML" skills={skillCategories.aiMl} barColor="bg-custom-purplePop" />
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
    </div>
  );
};

export default Resume;
