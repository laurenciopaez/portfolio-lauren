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
    description: "Core engineering tools",
    color: { bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.25)", text: "#a5b4fc", glow: "rgba(99,102,241,0.15)" },
    accent: "#6366f1",
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
    description: "3D modelling",
    color: { bg: "rgba(6,182,212,0.08)", border: "rgba(6,182,212,0.25)", text: "#67e8f9", glow: "rgba(6,182,212,0.15)" },
    accent: "#06b6d4",
    skills: [
      { name: "SolidWorks", icon: faDraftingCompass },
      { name: "Fusion 360", icon: faDraftingCompass },
      { name: "AutoCAD",    icon: faDraftingCompass },
    ],
  },
  {
    label: "Programming",
    description: "Languages & frameworks",
    color: { bg: "rgba(251,191,36,0.07)", border: "rgba(251,191,36,0.22)", text: "#fcd34d", glow: "rgba(251,191,36,0.12)" },
    accent: "#f59e0b",
    skills: [
      { name: "Python",     icon: faPython  },
      { name: "JavaScript", icon: faJs      },
      { name: "React",      icon: faReact   },
      { name: "Next.js",    icon: faReact   },
      { name: "Node.js",    icon: faNodeJs  },
      { name: "HTML5",      icon: faHtml5   },
      { name: "CSS3",       icon: faCss3Alt },
    ],
  },
  {
    label: "Data & AI",
    description: "Analytics & databases",
    color: { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.25)", text: "#6ee7b7", glow: "rgba(16,185,129,0.12)" },
    accent: "#10b981",
    skills: [
      { name: "Machine Learning", icon: faBrain    },
      { name: "Data analysis",    icon: faDatabase },
      { name: "PostgreSQL",       icon: faDatabase },
      { name: "Firebase",         icon: faFire     },
      { name: "Automation",       icon: faCogs     },
    ],
  },
  {
    label: "Dev Tools",
    description: "Workflow & environment",
    color: { bg: "rgba(148,163,184,0.07)", border: "rgba(148,163,184,0.18)", text: "#94a3b8", glow: "rgba(148,163,184,0.10)" },
    accent: "#64748b",
    skills: [
      { name: "Git",       icon: faGit       },
      { name: "GitHub",    icon: faGithub    },
      { name: "Bootstrap", icon: faBootstrap },
      { name: "VSCode",    icon: faLaptopCode },
    ],
  },
];

const TechnologiesBox = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "16px",
    }}
  >
    {categories.map(({ label, description, color, accent, skills }) => (
      <div
        key={label}
        className="glass-card p-6"
        style={{ borderTop: `2px solid ${accent}55` }}
      >
        {/* Category header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: color.bg,
              border: `1px solid ${color.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <FontAwesomeIcon
              icon={skills[0].icon}
              style={{ color: color.text, fontSize: "0.85rem" }}
            />
          </div>
          <div>
            <h3
              style={{
                fontSize: "0.82rem",
                fontWeight: 700,
                color: color.text,
                letterSpacing: "0.02em",
                lineHeight: 1.2,
              }}
            >
              {label}
            </h3>
            <p style={{ fontSize: "0.68rem", color: "var(--text-muted)", marginTop: "1px" }}>
              {description}
            </p>
          </div>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          {skills.map(({ name, icon }) => (
            <span
              key={name}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                padding: "4px 11px",
                borderRadius: "999px",
                fontSize: "0.76rem",
                fontWeight: 500,
                background: color.bg,
                border: `1px solid ${color.border}`,
                color: "var(--text-primary)",
                transition: "filter 0.2s, transform 0.2s",
                cursor: "default",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "brightness(1.3)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FontAwesomeIcon icon={icon} style={{ color: color.text, fontSize: "0.78rem" }} />
              {name}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default TechnologiesBox;
