import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
  } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Image } from "react-bootstrap";

const YouTubeThumbnail = ({ videoId, title, videoUrl,text1 ,text2,githubUrl }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="mb-2 text-center flex flex-row bg-gray-500 shadow-lg rounded-lg p-3">
      <div className="w-2/3 pl-2 pr-4">
        <h1 className="text-lg">{title}</h1>
        <p className="text-lg mt-3 text-justify">
          {text1}
        </p> <br/>
        <p className="text-lg text-justify ">
          {text2}
        </p>

        <a href={githubUrl} target="_blank" >
              <FontAwesomeIcon icon={faGithub} className="mt-4 text-2xl" />
            </a>
      </div>

      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transform transition-transform duration-900 hover:scale-90 w-1/3 m-auto"
      >
        <Image
          src={thumbnailUrl}
          alt={`Thumbnail for ${title}`}
          className="rounded-md border max-h-80 m-auto"
        />
      </a>
    </div>
  );
};

export default YouTubeThumbnail;
