import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3Alt,
  faGit,
  faGithub,
  faBootstrap,
  faDatabase,
  faCode,
  faCodeBranch,
  faLaptopCode,
} from '@fortawesome/free-brands-svg-icons';
import { faFortAwesome, faReacteurope, faFire, } from '@fortawesome/free-brands-svg-icons';

const TechnologiesBox = () => {
    const technologies = [
        { name: 'React', icon: faReact },
        { name: 'React Native', icon: faReacteurope },
        { name: 'Node.js', icon: faNodeJs },
        { name: 'JavaScript', icon: faJs },
        { name: 'HTML5', icon: faHtml5 },
        { name: 'CSS3', icon: faCss3Alt },
        { name: 'Git', icon: faGit },
        { name: 'GitHub', icon: faGithub },
        { name: 'Bootstrap', icon: faBootstrap },
        { name: 'Database', icon: faDatabase },
        { name: 'Firestore', icon: faFire },
        { name: 'VSCode', icon: faLaptopCode },
        { name: 'Fortran', icon: faFortAwesome },
      ];
      return (
        <div className="bg-gray-500 p-4 rounded-lg shadow-lg bg-opacity-70 " >
          <h2 className="text-2xl font-semibold text-white mb-4">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-600 px-2 py-1 text-white rounded-md text-sm flex items-center"
              >
                <FontAwesomeIcon icon={tech.icon} className="mr-2" />
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      );
    };

export default TechnologiesBox;
