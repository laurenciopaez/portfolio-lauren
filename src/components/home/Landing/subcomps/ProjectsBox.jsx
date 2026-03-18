import React, { useState } from "react";
import YouTubeThumbnail from "./YoutubeThumbnail";
import WebsitePreview from "./WebsitePreview";
import EngineeringProject from "./EngineeringProject";

const TABS = ["Engineering", "Software"];

const engineeringProjects = [
  {
    title: "Oleoducto Cabo Centenario — Dynamic FFS Analysis",
    client: "YPF",
    tools: ["OLGA", "API 579"],
    description:
      "Fitness-For-Service dynamic analysis of the Cabo Centenario pipeline using OLGA transient-flow simulation. Evaluated structural integrity under operational pressure fluctuations to determine remaining service life and recommend mitigation strategies.",
    tags: ["FFS", "Pipeline integrity", "Transient flow", "Remaining life"],
    images: [
      "./images/projects_img/oleoducto_cabo_centenario.png",
      "./images/projects_img/oleoducto_cabo_centenario_2.png",
      "./images/projects_img/oleoducto_cabo_centenario_3.png",
      "./images/projects_img/oleoducto_cabo_centenario_4.png",
    ],
  },
  {
    title: "Oleoducto Caleta Córdoba — Integrity Evaluation",
    client: "Termap",
    tools: ["ANSYS Mechanical", "API 579"],
    description:
      "Structural integrity assessment of the Caleta Córdoba pipeline using ANSYS Mechanical. Included FEA modelling of defect regions, stress analysis and FFS Level 2 evaluation in accordance with API 579 to define safe operating conditions.",
    tags: ["FEA", "Corrosion assessment", "Pipeline", "API 579"],
    images: [
      "./images/projects_img/oleoducto_caleta_cordoba_1.jpg",
      "./images/projects_img/oleoducto_caleta_cordoba_2.png",
      "./images/projects_img/oleoducto_caleta_cordoba_3.png",
      "./images/projects_img/oleoducto_caleta_cordoba_4.png",
      "./images/projects_img/oleoducto_caleta_cordoba_5.png.jpg",
    ],
  },
  {
    title: "Pipehandler — FFS Structural Analysis",
    client: "Pan American Energy (PAE)",
    tools: ["ANSYS Mechanical", "FEA"],
    description:
      "Nonlinear finite element analysis of a pipehandler subject to complex combined loading. Assessed fatigue damage, plastic deformation and crack propagation using elasto-plastic material models to certify structural integrity under field conditions.",
    tags: ["FEA", "Fatigue", "Nonlinear", "Structural integrity"],
    images: [
      "./images/projects_img/pipehandler_1.png",
      "./images/projects_img/pipehandler_2.png",
      "./images/projects_img/pipehandler_3.png",
    ],
  },
  {
    title: "Triphasic Separator ST-415 — CFD + FEA",
    client: "YPF",
    tools: ["ANSYS Fluent", "ANSYS Mechanical"],
    description:
      "Combined CFD and structural FEA study of a triphasic separator vessel. The CFD model captured multiphase (oil/water/gas) flow distribution and pressure loads, which were then applied as boundary conditions for the structural integrity evaluation.",
    tags: ["CFD", "FEA", "Multiphase flow", "Pressure vessel"],
    images: [
      "./images/projects_img/triphasic_separator_1.png",
      "./images/projects_img/triphasic_separator_2.png",
      "./images/projects_img/triphasic_separator_3.png",
      "./images/projects_img/triphasic_separator_4.png",
      "./images/projects_img/triphasic_separator_5.png",
    ],
  },
  {
    title: "Final Thesis — Failure Analysis of Plunger Lift Lubricators",
    client: "Universidad Nacional de Mar del Plata (UNMDP) · 2025",
    tools: ["ANSYS Mechanical", "FEA", "Metallography"],
    url: "https://rinfi.fi.mdp.edu.ar/handle/123456789/1144",
    description:
      "Investigated the root cause of recurring failures in Plunger Lift lubricators, consistently located at the fillet welds joining the tubular body to the coupling flanges. A combined methodology was applied: laboratory material characterisation (metallography and hardness testing) alongside numerical modelling with the Finite Element Method (FEM). Lab analysis confirmed manufacturing defects — lack of weld root penetration and a brittle microstructure in the Heat-Affected Zone (HAZ) evidenced by an abrupt hardness jump. ANSYS simulations showed that while static loads remained below the elastic limit, field assembly configuration is the dominant factor controlling fatigue life. Inadequate assembly reduces service life to ~11,600 cycles, whereas correct assembly can extend it beyond 2.4 million cycles. Fracture-mechanics analysis validated that weld defects act as crack initiators in high cyclic-stress zones. Conclusion: premature failure results from the combination of pre-existing manufacturing defects and the high cyclic stresses induced by improper assembly.",
    tags: ["FEA", "Fatigue analysis", "Fracture mechanics", "Weld defects", "Plunger Lift", "Root cause analysis"],
    images: [
      "./images/final_project_img/10.png",
      "./images/final_project_img/14.png",
      "./images/final_project_img/15.png",
      "./images/final_project_img/17.png",
      "./images/final_project_img/18.png",
      "./images/final_project_img/22.png",
      "./images/final_project_img/32.png",
      "./images/final_project_img/37.png",
      "./images/final_project_img/41.png",
      "./images/final_project_img/43.png",
      "./images/final_project_img/55.png",
      "./images/final_project_img/56.png",
      "./images/final_project_img/61.png",
      "./images/final_project_img/62.png",
      "./images/final_project_img/70.png",
      "./images/final_project_img/78.png",
      "./images/final_project_img/88.png",
      "./images/final_project_img/100.jpeg",
    ],
  },
  {
    title: "LNG Project — ML Remaining Life Prediction",
    client: "YPF · ENI",
    tools: ["Python", "Machine Learning"],
    description:
      "Developed a statistical predictive model using Python and machine learning to estimate the remaining productive life of Shale Gas wells in a large LNG project. Leveraged production history and reservoir data to generate probabilistic life forecasts for asset planning.",
    tags: ["Machine Learning", "Python", "Data analysis", "Shale Gas"],
    images: [
      "./images/projects_img/ML_1.png",
      "./images/projects_img/ML_2.png",
      "./images/projects_img/ML_3.png",
      "./images/projects_img/ml_5.png",
      "./images/projects_img/ml_6.png",
    ],
  },
];

const ProjectsBox = () => {
  const [activeTab, setActiveTab] = useState("Engineering");

  return (
    <div>
      {/* Tab selector */}
      <div
        className="flex gap-1.5 mb-8 p-1 rounded-2xl"
        style={{
          background: "rgba(13,16,24,0.80)",
          border: "1px solid rgba(255,255,255,0.06)",
          display: "inline-flex",
          backdropFilter: "blur(12px)",
        }}
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "8px 22px",
              borderRadius: "12px",
              fontSize: "0.84rem",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              transition: "all 0.25s ease",
              letterSpacing: "0.01em",
              background:
                activeTab === tab
                  ? "linear-gradient(135deg, #6366f1, #4f46e5)"
                  : "transparent",
              color: activeTab === tab ? "#fff" : "var(--text-muted)",
              boxShadow:
                activeTab === tab
                  ? "0 4px 16px rgba(99,102,241,0.40)"
                  : "none",
              transform: activeTab === tab ? "translateY(-1px)" : "none",
            }}
          >
            {tab === "Engineering" ? "⚙️ Engineering" : "💻 Software"}
          </button>
        ))}
      </div>

      {/* Engineering projects */}
      {activeTab === "Engineering" && (
        <div>
          {engineeringProjects.map((p) => (
            <EngineeringProject key={p.title} {...p} />
          ))}
        </div>
      )}

      {/* Software projects */}
      {activeTab === "Software" && (
        <div>
          <YouTubeThumbnail
            videoId="3msHJjapx7o"
            title="Pig Commander — Finance Tracker"
            text1="A full-featured personal finance application that lets users track income and expenses with interactive charts. Designed for clarity and fast data entry."
            text2="Next.js · Redux Toolkit · TailwindCSS · ChartJS · Tremor · Express · PostgreSQL · Sequelize · Swagger · Passport · JWT · Nodemailer · MercadoPago API · Cloudinary"
            videoUrl="https://www.youtube.com/watch?v=3msHJjapx7o&ab_channel=PigCommander"
            githubUrl="https://github.com/RodrigoSpano/pig_commander_client"
          />

          <YouTubeThumbnail
            videoId="5iUnnWlNzDk"
            title="Lineru — News Aggregation Platform"
            text1="Dynamic news aggregation web app with server-side rendering, theme switching and smooth animations. Pulls live data from multiple news sources via a custom Express backend."
            text2="React · Next.js · NextUI · Emotion · Framer Motion · Redux Toolkit · React Bootstrap · Express · News API · Tailwind CSS"
            videoUrl="https://youtu.be/5iUnnWlNzDk"
            githubUrl="https://github.com/laurenciopaez/lineru-copy"
          />

          <WebsitePreview
            title="Seguimiento de la Tercera — Global Conflict Monitor"
            videoSrc="/videos/ww3-web.mp4"
            text="OSINT dashboard for real-time monitoring of geopolitical conflicts, military movements and global tension zones. NLP-powered news classification with severity scoring and country detection. Interactive world map with live military aircraft tracking (OpenSky Network), maritime traffic in conflict zones (AISStream), and thermal anomaly / artillery impact detection via NASA FIRMS satellite API. Real-time push alerts via WebSockets and a financial panel tracking geopolitical impact on stock indices, commodities (gold, oil, gas) and Forex."
            techStack="Python · FastAPI · SQLite · asyncio · Next.js · TypeScript · Tailwind CSS · SWR · WebSockets · Leaflet · GeoJSON · feedparser · NASA FIRMS · OpenSky API · AISStream"
          />

          <YouTubeThumbnail
            videoId="sz1Qjro_TQo"
            title="NumeriaGraphs — Graph Digitizer"
            text1="Desktop application for extracting numerical data from static graph images. Load an image, calibrate the axes (manual or 4-point interactive), isolate data points via HSV color filtering, and export clean tabular results (CSV, TXT, JSON) ready for Excel, Python or Origin. Supports linear and logarithmic scales, zoom/pan navigation, IQR outlier filtering, undo history, and multi-language UI."
            text2="Python · customtkinter · OpenCV · NumPy · Pillow · HSV color space · i18n (JSON) · Modular MVC architecture · Cryptographic license system"
            videoUrl="https://www.youtube.com/watch?v=sz1Qjro_TQo"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectsBox;
