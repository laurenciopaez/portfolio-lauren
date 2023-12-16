import React from "react";
import YouTubeThumbnail from "./YoutubeThumbnail";
import WebsitePreview from "./WebsitePreview";

const ProjectsBox = () => {

  return (
    <div>
      <div >
        <YouTubeThumbnail
          videoId="3msHJjapx7o"
          title="Pig Commander"
          videoUrl="https://www.youtube.com/watch?v=3msHJjapx7o&ab_channel=PigCommander"
        />
      </div>

      <div>
        <WebsitePreview
          title="Rick and Morty API"
          url="https://rick-and-morty-api-project-phi.vercel.app/"
          imageUrl="./images/web1.png"
          git="https://github.com/laurenciopaez/Rick-and-Morty-M2-Bootcamp"
          text="Rick and morty API - Filters - SearchBar - Responsive"
        />
      </div>

      <div>
        <WebsitePreview
          url="https://calculator-app-zeta-seven.vercel.app/"
          title="Web Calculator"
          git="https://github.com/laurenciopaez/CalculatorApp"
          imageUrl="./images/web2.png"
          text="Calculator - Almost pure js"
        />
      </div>
    </div>
  );
};

export default ProjectsBox;
