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
          text1 = "It is a finance application that allows users to track their financial expenses and incomes. With this application, users can have a detailed overview of their personal finances and make informed decisions about their spending and investments."
          text2= "    On the FrontEnd, we used Next.js, Redux Toolkit, TailwindCSS, ChartJS, and Tremor. On the BackEnd, we used Express, PostgresSQL, Sequelize, Swagger, Passport, JWT, Nodemailer, MercadoPago API, and Cloudinary."
          videoUrl="https://www.youtube.com/watch?v=3msHJjapx7o&ab_channel=PigCommander"
          githubUrl = "https://github.com/RodrigoSpano/pig_commander_client"
        />
      </div>

      <div >
        <YouTubeThumbnail
          videoId="5iUnnWlNzDk"
          title="Lineru Landing Page"
          videoUrl="https://youtu.be/5iUnnWlNzDk"
          text1="Lineru Copy is a web application project that leverages modern web technologies to create a dynamic and interactive user experience. This project focuses on providing a seamless and visually appealing platform for accessing and interacting with various data sources, emphasizing news content."
          text2="The frontend of this web application is built using cutting-edge technologies, showcasing a robust and dynamic user interface. Leveraging React v18 as the foundation and Next.js v14.0.4 for seamless server-side rendering, the UI is crafted with the modern and highly customizable Next UI v2.2.9 by @nextui-org. Styling is handled with Emotion v11.11.1, while Framer Motion v10.16.16 adds fluid animations to enhance user experience. The frontend also incorporates React Bootstrap v2.9.2, React Icons v4.12.0, React Slick v0.29.0 for carousel functionality, and React Tooltip v5.25.0 for interactive tooltips. Redux v5.0.0, React-Redux v9.0.4, and Redux Toolkit v2.0.1 collectively manage the state efficiently, and Next Themes v0.2.1 facilitate theme management. On the backend, Express v4.18.2 serves as the robust server framework, supported by Axios v1.6.2 for HTTP requests. The application fetches news data through News API v2.4.1, manages environment variables with Dotenv v16.3.1, handles cross-origin resource sharing with Cors v2.8.5, and parses HTTP request bodies using Body Parser v1.20.2. The tooling includes Nodemon v3.0.2 for automatic server restarts during development, ESLint v8 with Next.js configuration v14.0.4 for code linting, and styling enhancements are achieved with Autoprefixer v10.0.1, PostCSS v8, and Tailwind CSS v3.3.0. This comprehensive tech stack ensures a feature-rich, efficient, and aesthetically pleasing web application."
          githubUrl="https://github.com/laurenciopaez/lineru-copy"
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
