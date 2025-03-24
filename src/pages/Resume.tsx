import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  experiences, 
  educations, 
  skillCategories, 
  contactInfo,
  Experience,
  Education,
  Skill
} from '../data/resumeData';

const Resume: React.FC = () => {
  const [navFooterVisible, setNavFooterVisible] = useState(false);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  
    // Only animate navbar and footer
    setTimeout(() => setNavFooterVisible(true), 100);
  }, []); 

  // Reusable component for rendering a skill category with specific color
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
          <li key={skill.name} className="flex items-center">
            <span className="w-32 text-custom-lightGray">{skill.name}</span>
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
              <div 
                className={`${barColor} h-full rounded-full`}
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  // Reusable component for rendering an experience item
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

  // Reusable component for rendering an education item
  const EducationItem = ({ 
    education 
  }: { 
    education: Education
  }) => (
    <div className="group">
      <div className="flex flex-col md:flex-row justify-between mb-2">
        <h3 className="text-xl font-medium text-custom-purplePop group-hover:text-custom-hotRed transition-colors duration-300">
          {education.degree}
        </h3>
        <span className="text-sm text-custom-mediumGray">{education.period}</span>
      </div>
      <h4 className="text-md font-medium text-custom-lightGray mb-2">
        {education.institution}
      </h4>

      <div className="space-y-2 md:border-b md:pt-2 md:border-r md:pl-4 border-custom-hotRed max-w-3xl">
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
        <div className="max-w-3xl mx-auto">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:border-b md:pb-4 md:border-r md:pl-4 border-custom-hotRed">
              <SkillCategory title="AI / ML" skills={skillCategories.aiMl} barColor="bg-custom-purplePop" />
              <SkillCategory title="DevOps" skills={skillCategories.devOps} barColor="bg-custom-hotRed" />
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-custom-lightGray mb-6">Contact</h2>
            
            <p className="text-custom-purplePop leading-relaxed mb-6">
              Interested in working together? Feel free to reach out through any of the channels below.
            </p>
            
            <div className="space-y-2">
              <p className="text-custom-lightGray">
                <span className="font-medium">Email:</span> {contactInfo.email}
              </p>
              <p className="text-custom-lightGray">
                <span className="font-medium">Location:</span> {contactInfo.location}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <a 
                href="https://drive.google.com/file/d/1tTK2brE7-dsCCv_mGPXkR9HbxNrEkyIH/view?usp=sharing" 
                download="Prateek-Mohapatra-Resume.pdf"
                className="inline-block mt-8 px-8 py-3 bg-custom-purplePop text-white rounded transition-all duration-300 hover:bg-custom-hotRed w-52 text-center"
              >
                Download Full CV
              </a>
              <a 
                href="/contact"
                className="inline-block mt-8 px-8 py-3 bg-custom-purplePop text-white rounded transition-all duration-300 hover:bg-custom-hotRed w-52 text-center"
              >
                Contact Me
              </a>
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