import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3Alt,
  faGit,
  faGithub,
  faBootstrap,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faFire,
  faLaptopCode,
  faCogs,
  faWaveSquare,
  faDraftingCompass,
  faFlask,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  {
    label: "Simulation & Integrity",
    color: { bg: "rgba(99,102,241,0.10)", border: "rgba(99,102,241,0.30)", text: "#a5b4fc" },
    skills: [
      { name: "ANSYS Mechanical", icon: faCogs },
      { name: "ANSYS Fluent (CFD)", icon: faWaveSquare },
      { name: "OLGA", icon: faWaveSquare },
      { name: "PipeSim", icon: faDraftingCompass },
      { name: "API 579 / FFS", icon: faFlask },
    ],
  },
  {
    label: "CAD & Design",
    color: { bg: "rgba(6,182,212,0.10)", border: "rgba(6,182,212,0.30)", text: "#67e8f9" },
    skills: [
      { name: "SolidWorks", icon: faDraftingCompass },
      { name: "Fusion 360", icon: faDraftingCompass },
      { name: "AutoCAD", icon: faDraftingCompass },
    ],
  },
  {
    label: "Programming",
    color: { bg: "rgba(251,191,36,0.08)", border: "rgba(251,191,36,0.25)", text: "#fcd34d" },
    skills: [
      { name: "Python", icon: faPython },
      { name: "JavaScript", icon: faJs },
      { name: "React", icon: faReact },
      { name: "Next.js", icon: faReact },
      { name: "Node.js", icon: faNodeJs },
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3Alt },
    ],
  },
  {
    label: "Data & AI",
    color: { bg: "rgba(16,185,129,0.09)", border: "rgba(16,185,129,0.28)", text: "#6ee7b7" },
    skills: [
      { name: "Machine Learning", icon: faBrain },
      { name: "Data analysis", icon: faDatabase },
      { name: "PostgreSQL", icon: faDatabase },
      { name: "Firebase", icon: faFire },
      { name: "Automation", icon: faCogs },
    ],
  },
  {
    label: "Tools",
    color: { bg: "rgba(148,163,184,0.07)", border: "rgba(148,163,184,0.20)", text: "#94a3b8" },
    skills: [
      { name: "Git", icon: faGit },
      { name: "GitHub", icon: faGithub },
      { name: "Bootstrap", icon: faBootstrap },
      { name: "VSCode", icon: faLaptopCode },
    ],
  },
];

const TechnologiesBox = () => (
  <div className="flex flex-col gap-6">
    {categories.map(({ label, color, skills }) => (
      <div key={label} className="glass-card p-6">
        <h3
          className="text-xs font-semibold uppercase tracking-widest mb-4"
          style={{ color: color.text }}
        >
          {label}
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map(({ name, icon }) => (
            <span
              key={name}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 12px",
                borderRadius: "999px",
                fontSize: "0.8rem",
                fontWeight: 500,
                background: color.bg,
                border: `1px solid ${color.border}`,
                color: "var(--text-primary)",
                transition: "filter 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(1.25)")}
              onMouseLeave={(e) => (e.currentTarget.style.filter = "none")}
            >
              <FontAwesomeIcon icon={icon} style={{ color: color.text, fontSize: "0.85rem" }} />
              {name}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default TechnologiesBox;
