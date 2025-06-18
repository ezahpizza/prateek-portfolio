import React from 'react';
import { Education } from '../../data/resumeData';

interface EducationItemProps {
  education: Education;
}

const EducationItem: React.FC<EducationItemProps> = ({ education }) => (
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

export default EducationItem;
