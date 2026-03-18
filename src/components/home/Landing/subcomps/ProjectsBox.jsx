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
        className="flex gap-2 mb-8 p-1 rounded-xl"
        style={{
          background: "rgba(22,27,34,0.7)",
          border: "1px solid rgba(255,255,255,0.07)",
          display: "inline-flex",
        }}
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "6px 20px",
              borderRadius: "10px",
              fontSize: "0.85rem",
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              background:
                activeTab === tab
                  ? "linear-gradient(135deg, rgba(99,102,241,0.9), rgba(6,182,212,0.8))"
                  : "transparent",
              color: activeTab === tab ? "#fff" : "var(--text-muted)",
              boxShadow: activeTab === tab ? "0 2px 12px rgba(99,102,241,0.35)" : "none",
            }}
          >
            {tab}
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
            title="Rick and Morty API Explorer"
            url="https://rick-and-morty-api-project-phi.vercel.app/"
            imageUrl="./images/web1.png"
            git="https://github.com/laurenciopaez/Rick-and-Morty-M2-Bootcamp"
            text="Character browser built on the Rick and Morty public API — search, filter by status/species/gender, responsive layout."
          />

          <WebsitePreview
            url="https://calculator-app-zeta-seven.vercel.app/"
            title="Web Calculator"
            git="https://github.com/laurenciopaez/CalculatorApp"
            imageUrl="./images/web2.png"
            text="Clean, keyboard-friendly calculator built in vanilla JavaScript with CSS Grid layout and operator chaining support."
          />
        </div>
      )}
    </div>
  );
};

export default ProjectsBox;
