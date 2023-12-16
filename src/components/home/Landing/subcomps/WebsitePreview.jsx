import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";
import { Image } from "react-bootstrap";

const WebsitePreview = ({ title, url, imageUrl, git, text }) => {
  return (
    <div className="mb-8 text-center flex flex-row bg-gray-500 shadow-lg rounded-lg p-3">
      <div className="w-2/3 pl-2 pr-4">
        <h1 className="text-lg">{title}</h1>
        <p className="text-lg mt-3 text-justify">{text}</p>
        <a href={git} target="_blank">
          <FontAwesomeIcon icon={faGithub} className="mt-4 text-2xl" />
        </a>
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transform transition-transform duration-900 hover:scale-90 w-1/3"
      >
        <Image src={imageUrl} className="rounded-md border max-h-80 m-auto" />
      </a>
    </div>
  );
};

export default WebsitePreview;
