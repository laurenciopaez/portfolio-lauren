import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r bg-opacity-70 from-gray-500 to-gray-400 w-full h-36 border-t-2 border-gray-400 flex items-center flex-row text-white rounded-xl shadow-lg mb-2">
      {/* Columna 1 */}
      <div className="text-center flex m-auto">
        <p>
          Phone: +54 2235607849 <FontAwesomeIcon icon={faWhatsapp} />
        </p>
      </div>

      {/* Columna 2 */}
      <div className="text-center flex m-auto">

        <ul>
          <li>
            <a href="#">Start</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About me</a>
          </li>
        </ul>
      </div>

      {/* Columna 3 */}
      <div className="text-center m-auto">
        <h3 className="text-xl font-bold mb-2">Socials</h3>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/laurencio-paez-727042155/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://github.com/laurenciopaez" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
