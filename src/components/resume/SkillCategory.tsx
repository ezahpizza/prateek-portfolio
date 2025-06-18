import React from 'react';
import { Skill } from '../../data/resumeData';

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  barColor: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, barColor }) => (
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
);

export default SkillCategory;
