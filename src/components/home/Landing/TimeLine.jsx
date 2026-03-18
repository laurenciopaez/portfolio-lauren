import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ModalComponent from "./modal/ModalComponent";

/* ─── Data ───────────────────────────────────────────────────── */
const entries = [
  {
    year: "2017",
    type: "education",
    title: "Mechanical Engineering — UNMDP",
    subtitle: "Universidad Nacional de Mar del Plata",
    description: "Started the 6-year Mechanical Engineering degree program.",
  },
  {
    year: "2017 – 2019",
    type: "course",
    title: "Engineering Mathematics",
    description:
      "Math Analysis 1, 2 & 3 · Algebra 1 & 2 · Advanced Mathematics · Statistics · Computing (Pascal).",
  },
  {
    year: "2020",
    type: "course",
    title: "Programming with Java for Android",
    description: "Mobile app development with Java on the Android platform.",
    cert: "/images/Certificado1.png",
  },
  {
    year: "2020",
    type: "course",
    title: "Android Basics",
    cert: "/images/Certificado2.png",
  },
  {
    year: "2020 – 2021",
    type: "work",
    title: "Mechanical Technician — MITEG",
    subtitle: "Buenos Aires, Argentina · 9 months",
    description:
      "Industrial machinery fabrication, maintenance & repair. Welding (MIG / SMAW), fault diagnosis, hydraulic & electric tooling.",
  },
  {
    year: "2021",
    type: "course",
    title: "HTML5: Web Fundamentals",
    cert: "/images/Certificado3.png",
  },
  {
    year: "2022",
    type: "course",
    title: "Web Layout: HTML5 & CSS3",
    cert: "/images/Certificado4.png",
  },
  {
    year: "2022",
    type: "course",
    title: "JavaScript from Scratch",
    cert: "/images/Certificado5.png",
  },
  {
    year: "2022",
    type: "course",
    title: "Responsive Web Design",
    cert: "/images/Certificado6.png",
  },
  {
    year: "2022",
    type: "course",
    title: "Numerical Analysis for Engineering",
    cert: "/docs/analisisnumerico.pdf",
  },
  {
    year: "2022 – 2023",
    type: "work",
    title: "Line Cook — Aspen Skiing Company",
    subtitle: "Aspen, Colorado, USA · 5 months",
    description:
      "International work experience at a premier mountain resort. High-volume kitchen, station management, customer service.",
  },
  {
    year: "2023",
    type: "course",
    title: "JavaScript Algorithms & Data Structures",
    cert: "/images/Certificado8.png",
  },
  {
    year: "2023",
    type: "course",
    title: "CS50's Understanding Technology — Harvard",
    cert: "/images/Certificado9.png",
  },
  {
    year: "2023",
    type: "milestone",
    title: "Henry Bootcamp — Full Stack Development",
    description:
      "800+ hour intensive bootcamp. JavaScript, React, Next.js, Node.js, PostgreSQL, team projects with agile methodology.",
    cert: "/images/Certificado10.png",
  },
  {
    year: "2023 → Present",
    type: "work",
    title: "Integrity Engineer — Sintec S.A.",
    subtitle: "Oil & Gas · Argentina",
    description:
      "FFS evaluations (API 579), nonlinear FEA, multiphase CFD, remaining-life assessment. Clients: YPF · PAE · Termap. Field campaigns in Neuquén.",
    highlight: true,
  },
  {
    year: "2024",
    type: "course",
    title: "Welding Technology & Inspection",
    description: "Welding processes, metallurgy, defect characterization and quality standards for structural and pressure components.",
    cert: "/images/CERTIFICADO_SOLDADURAS_1.png",
  },
  {
    year: "2024",
    type: "course",
    title: "Vibration Analysis",
    description: "Mechanical vibrations theory, modal analysis, signal processing and condition monitoring applied to rotating machinery.",
    cert: "/images/CERTIFICADO_VIBRACIONES_1.png",
  },
  {
    year: "2024 – 2025",
    type: "course",
    title: "AI & Large Language Models",
    description: "Applied AI, prompt engineering and LLM-powered workflows for engineering automation and data analysis.",
    certs: [
      "/images/CERTIFICADO_IA_1.png",
      "/images/certificado_LLM_1.png",
      "/images/certificado_LLM_2.png",
      "/images/LLM_2.png",
      "/images/CERTIFICADO_LLM_3.png",
    ],
  },
  {
    year: "2025",
    type: "milestone",
    title: "Graduated — Ingeniero Mecánico",
    subtitle: "Universidad Nacional de Mar del Plata",
    description:
      "6-year engineering degree completed. Final thesis: root-cause failure analysis of Plunger Lift lubricators using FEA (ANSYS) + metallography.",
    highlight: true,
  },
  {
    year: "2025 → Present",
    type: "education",
    title: "Teaching Assistant — UNMDP",
    subtitle: "Introducción a la Ingeniería Mecánica · Elementos de la Mecánica",
    description:
      "Supporting undergraduate courses in the Mechanical Engineering department.",
  },
];

/* ─── Category config ─────────────────────────────────────────── */
const CAT = {
  education: {
    label: "Education",
    dot: "#6366f1",
    glow: "rgba(99,102,241,0.45)",
    badge: { bg: "rgba(99,102,241,0.12)", border: "rgba(99,102,241,0.35)", text: "#a5b4fc" },
    cardBorder: "rgba(99,102,241,0.30)",
  },
  work: {
    label: "Work",
    dot: "#06b6d4",
    glow: "rgba(6,182,212,0.45)",
    badge: { bg: "rgba(6,182,212,0.10)", border: "rgba(6,182,212,0.35)", text: "#67e8f9" },
    cardBorder: "rgba(6,182,212,0.30)",
  },
  course: {
    label: "Course",
    dot: "#8b5cf6",
    glow: "rgba(139,92,246,0.40)",
    badge: { bg: "rgba(139,92,246,0.10)", border: "rgba(139,92,246,0.30)", text: "#c4b5fd" },
    cardBorder: "rgba(139,92,246,0.25)",
  },
  milestone: {
    label: "Milestone",
    dot: "#f59e0b",
    glow: "rgba(245,158,11,0.45)",
    badge: { bg: "rgba(245,158,11,0.10)", border: "rgba(245,158,11,0.30)", text: "#fcd34d" },
    cardBorder: "rgba(245,158,11,0.35)",
  },
};

/* ─── Single entry card ───────────────────────────────────────── */
const Entry = ({ entry, index, onCertClick }) => {
  const { year, type, title, subtitle, description, cert, certs, highlight } = entry;
  const cat = CAT[type];
  const isLeft = index % 2 === 0;

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 48px 1fr",
        alignItems: "start",
        marginBottom: "2.5rem",
        position: "relative",
      }}
    >
      {/* Left side content */}
      <div style={{ paddingRight: "2rem", display: "flex", justifyContent: "flex-end" }}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: "360px", width: "100%" }}
          >
            <Card cat={cat} year={year} title={title} subtitle={subtitle}
              description={description} cert={cert} certs={certs} highlight={highlight}
              onCertClick={onCertClick} align="right" />
          </motion.div>
        )}
      </div>

      {/* Center dot */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.05 }}
          style={{
            width: highlight ? "18px" : "12px",
            height: highlight ? "18px" : "12px",
            borderRadius: "50%",
            background: cat.dot,
            boxShadow: `0 0 ${highlight ? "14px 5px" : "10px 2px"} ${cat.glow}`,
            flexShrink: 0,
            marginTop: "18px",
            zIndex: 2,
            border: highlight ? "2px solid rgba(255,255,255,0.25)" : "none",
          }}
        />
      </div>

      {/* Right side content */}
      <div style={{ paddingLeft: "2rem" }}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: "360px" }}
          >
            <Card cat={cat} year={year} title={title} subtitle={subtitle}
              description={description} cert={cert} certs={certs} highlight={highlight}
              onCertClick={onCertClick} align="left" />
          </motion.div>
        )}
      </div>
    </div>
  );
};

/* ─── Card ────────────────────────────────────────────────────── */
const Card = ({ cat, year, title, subtitle, description, cert, certs, highlight, onCertClick }) => {
  const hasCert  = !!cert;
  const hasCerts = certs && certs.length > 0;
  const clickable = hasCert || hasCerts;

  return (
    <div
      style={{
        backdropFilter: "blur(12px) saturate(160%)",
        WebkitBackdropFilter: "blur(12px) saturate(160%)",
        background: highlight ? "rgba(22,27,34,0.92)" : "rgba(22,27,34,0.70)",
        border: `1px solid ${cat.cardBorder}`,
        borderRadius: "14px",
        padding: "16px 18px",
        boxShadow: highlight ? `0 4px 24px ${cat.glow}` : "none",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 6px 32px ${cat.glow}`;
        e.currentTarget.style.borderColor = cat.dot + "88";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = highlight ? `0 4px 24px ${cat.glow}` : "none";
        e.currentTarget.style.borderColor = cat.cardBorder;
      }}
    >
      {/* Year + badge row */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.06em", color: cat.dot }}>
          {year}
        </span>
        <span
          style={{
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.06em",
            padding: "2px 8px",
            borderRadius: "999px",
            background: cat.badge.bg,
            border: `1px solid ${cat.badge.border}`,
            color: cat.badge.text,
            textTransform: "uppercase",
          }}
        >
          {cat.label}
        </span>
      </div>

      {/* Title */}
      <p
        style={{
          fontSize: highlight ? "0.95rem" : "0.85rem",
          fontWeight: highlight ? 700 : 600,
          color: "var(--text-primary)",
          lineHeight: 1.35,
          marginBottom: subtitle || description ? "4px" : 0,
        }}
      >
        {title}
      </p>

      {/* Subtitle */}
      {subtitle && (
        <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "6px" }}>
          {subtitle}
        </p>
      )}

      {/* Description */}
      {description && (
        <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.55 }}>
          {description}
        </p>
      )}

      {/* Certificate button(s) */}
      {hasCert && (
        <button
          onClick={() => onCertClick(cert)}
          style={{
            marginTop: "10px",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            fontSize: "0.72rem",
            fontWeight: 600,
            color: cat.dot,
            background: "none",
            border: `1px solid ${cat.cardBorder}`,
            borderRadius: "6px",
            padding: "3px 10px",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = cat.badge.bg)}
          onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
        >
          🏅 View certificate
        </button>
      )}

      {hasCerts && (
        <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {certs.map((src, i) => (
            <button
              key={i}
              onClick={() => onCertClick(src)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "0.72rem",
                fontWeight: 600,
                color: cat.dot,
                background: "none",
                border: `1px solid ${cat.cardBorder}`,
                borderRadius: "6px",
                padding: "3px 10px",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = cat.badge.bg)}
              onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
            >
              🏅 Cert {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* ─── Mobile single-column entry ─────────────────────────────── */
const MobileEntry = ({ entry, onCertClick }) => {
  const { year, type, title, subtitle, description, cert, certs, highlight } = entry;
  const cat = CAT[type];
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: "flex", gap: "14px", marginBottom: "1.5rem" }}
    >
      {/* Left: dot + line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <div
          style={{
            width: highlight ? "14px" : "10px",
            height: highlight ? "14px" : "10px",
            borderRadius: "50%",
            background: cat.dot,
            boxShadow: `0 0 10px 2px ${cat.glow}`,
            marginTop: "18px",
            flexShrink: 0,
          }}
        />
        <div style={{ width: "1px", flex: 1, background: "rgba(255,255,255,0.07)", marginTop: "6px" }} />
      </div>

      {/* Right: card */}
      <div style={{ flex: 1, paddingBottom: "6px" }}>
        <Card cat={cat} year={year} title={title} subtitle={subtitle}
          description={description} cert={cert} certs={certs} highlight={highlight}
          onCertClick={onCertClick} />
      </div>
    </motion.div>
  );
};

/* ─── Legend ──────────────────────────────────────────────────── */
const Legend = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "2.5rem" }}>
    {Object.entries(CAT).map(([key, val]) => (
      <span
        key={key}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: val.badge.text,
          padding: "3px 10px",
          borderRadius: "999px",
          background: val.badge.bg,
          border: `1px solid ${val.badge.border}`,
        }}
      >
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: val.dot, flexShrink: 0 }} />
        {val.label}
      </span>
    ))}
  </div>
);

/* ─── Main component ──────────────────────────────────────────── */
const TimelinePortfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  const handleCertClick = (src) => {
    setModalSrc(src);
    setShowModal(true);
  };

  return (
    <>
      <Legend />

      {/* Desktop: two-column zigzag */}
      <div className="hidden md:block" style={{ position: "relative" }}>
        {/* Central line */}
        <div
          style={{
            position: "absolute",
            left: "calc(50% - 0.5px)",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "linear-gradient(to bottom, transparent, rgba(99,102,241,0.4) 8%, rgba(6,182,212,0.3) 50%, rgba(99,102,241,0.4) 92%, transparent)",
          }}
        />
        {entries.map((entry, i) => (
          <Entry key={i} entry={entry} index={i} onCertClick={handleCertClick} />
        ))}
      </div>

      {/* Mobile: single column */}
      <div className="md:hidden" style={{ position: "relative" }}>
        {entries.map((entry, i) => (
          <MobileEntry key={i} entry={entry} onCertClick={handleCertClick} />
        ))}
      </div>

      {showModal && (
        <ModalComponent
          src={modalSrc}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default TimelinePortfolio;
