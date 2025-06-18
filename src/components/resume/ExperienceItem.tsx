import React from 'react';
import { Experience } from '../../data/resumeData';

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => (
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

export default ExperienceItem;
