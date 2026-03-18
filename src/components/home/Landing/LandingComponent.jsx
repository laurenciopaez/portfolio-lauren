import React, { useEffect, useState } from "react";
import ContactForm from "./form/ContactForm";
import TimelinePortfolio from "./TimeLine";
import "../../../app/globals.css";

import { motion, useViewportScroll, useTransform } from "framer-motion";
import Arrow from "./subcomps/Arrow";
import { useInView } from "react-intersection-observer";

import Footer from "./subcomps/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tooltip";
import {
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircleQuestion,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import TechnologiesBox from "./subcomps/TechnologiesBox";
import ProjectsBox from "./subcomps/ProjectsBox";

/* ─── Animated background orbs ──────────────────────────────── */
const BackgroundOrbs = () => (
  <div
    aria-hidden
    style={{
      position: "fixed",
      inset: 0,
      zIndex: 0,
      overflow: "hidden",
      pointerEvents: "none",
    }}
  >
    {/* Orb 1 — top-center purple */}
    <div
      style={{
        position: "absolute",
        top: "-15%",
        left: "45%",
        width: "700px",
        height: "700px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(99,102,241,0.13) 0%, rgba(99,102,241,0.04) 45%, transparent 70%)",
        animation: "orb-float 18s ease-in-out infinite",
        willChange: "transform",
      }}
    />
    {/* Orb 2 — top-right cyan */}
    <div
      style={{
        position: "absolute",
        top: "-10%",
        right: "-8%",
        width: "550px",
        height: "550px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(6,182,212,0.10) 0%, rgba(6,182,212,0.03) 50%, transparent 70%)",
        animation: "orb-float-2 22s ease-in-out infinite",
        willChange: "transform",
      }}
    />
    {/* Orb 3 — mid-left indigo */}
    <div
      style={{
        position: "absolute",
        top: "40%",
        left: "-12%",
        width: "480px",
        height: "480px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(139,92,246,0.09) 0%, rgba(139,92,246,0.02) 55%, transparent 72%)",
        animation: "orb-float-3 25s ease-in-out infinite",
        willChange: "transform",
      }}
    />
    {/* Subtle grid overlay */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
        `,
        backgroundSize: "72px 72px",
      }}
    />
  </div>
);

/* ─── Hero stats ─────────────────────────────────────────────── */
const stats = [
  { value: "2+", label: "Years Exp."    },
  { value: "6",  label: "Eng. Projects" },
  { value: "4",  label: "SW Projects"   },
];

const LandingComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section detection */
  useEffect(() => {
    const ids = ["Summary", "Background", "Projects", "Tech", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleContextMenu = (e) => e.preventDefault();

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1.5], [0.6, 1.5]);

  const [ref,  inView]  = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  const navLinks = [
    { label: "About",      href: "#Summary",    id: "Summary"    },
    { label: "Background", href: "#Background",  id: "Background" },
    { label: "Projects",   href: "#Projects",   id: "Projects"   },
    { label: "Skills",     href: "#Tech",        id: "Tech"       },
    { label: "Contact",    href: "#contact",     id: "contact"    },
  ];

  return (
    <div
      className="relative font-sans text-[var(--text-primary)]"
      id="top"
      style={{ background: "var(--bg-base)", minHeight: "100vh" }}
    >
      <BackgroundOrbs />

      {/* Content layer */}
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── NAVBAR ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "sticky", top: 0, zIndex: 50 }}
        >
          <nav
            style={{
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              backgroundColor: scrolled
                ? "rgba(7,9,15,0.94)"
                : "rgba(7,9,15,0.72)",
              borderBottom: scrolled
                ? "1px solid rgba(99,102,241,0.10)"
                : "1px solid rgba(255,255,255,0.05)",
              transition: "background-color 0.4s ease, border-color 0.4s ease",
              boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.35)" : "none",
            }}
            className="px-6 py-3.5 flex items-center justify-between lg:px-14"
          >
            {/* Brand */}
            <a
              href="#top"
              style={{ textDecoration: "none" }}
              className="flex items-center gap-2.5"
            >
              <span
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  color: "#fff",
                  flexShrink: 0,
                }}
              >
                LP
              </span>
              <span
                className="font-semibold text-sm tracking-wider hidden sm:block"
                style={{
                  background: "linear-gradient(135deg, #c7d0e0, #8b96b0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Laurencio Paez
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ label, href, id }) => (
                <a
                  key={label}
                  href={href}
                  className={`nav-link-custom ${activeSection === id ? "active" : ""}`}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden lg:inline-flex btn-primary"
              style={{ padding: "8px 18px", fontSize: "0.8rem" }}
            >
              Hire me
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden focus:outline-none"
              onClick={() => setExpanded(!expanded)}
              aria-label="Toggle menu"
              style={{ color: "var(--text-muted)", background: "none", border: "none" }}
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                {expanded ? (
                  <>
                    <line x1="4" y1="4" x2="18" y2="18" />
                    <line x1="18" y1="4" x2="4" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6"  x2="19" y2="6"  />
                    <line x1="3" y1="12" x2="19" y2="12" />
                    <line x1="3" y1="18" x2="19" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile menu */}
          {expanded && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                backgroundColor: "rgba(7,9,15,0.97)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(20px)",
              }}
              className="lg:hidden flex flex-col px-6 py-5 gap-5"
            >
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="nav-link-custom text-sm"
                  onClick={() => setExpanded(false)}
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-primary self-start"
                style={{ padding: "9px 20px", fontSize: "0.82rem" }}
                onClick={() => setExpanded(false)}
              >
                Hire me
              </a>
            </motion.div>
          )}
        </motion.div>

        {/* ── HERO ───────────────────────────────────────────────── */}
        <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-12 pb-28">

          {/* Profile image with animated gradient ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: "2.2rem" }}
          >
            <div
              style={{
                position: "relative",
                width: "152px",
                height: "152px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Spinning gradient ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-4px",
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg, #6366f1, #06b6d4, #8b5cf6, #6366f1)",
                  animation: "ring-rotate 6s linear infinite",
                }}
              />
              {/* Inner white gap ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-1px",
                  borderRadius: "50%",
                  background: "var(--bg-base)",
                }}
              />
              <img
                src="/images/profile.jpeg"
                alt="Laurencio Paez"
                onContextMenu={handleContextMenu}
                style={{
                  width: "144px",
                  height: "144px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              style={{
                color: "var(--accent)",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                fontWeight: 700,
                marginBottom: "10px",
              }}
              className="uppercase"
            >
              ✦ &nbsp;Available for opportunities&nbsp; ✦
            </p>

            <h1
              className="font-extrabold mb-4"
              style={{
                fontSize: "clamp(2.8rem, 7vw, 5.2rem)",
                lineHeight: 1.06,
                background:
                  "linear-gradient(135deg, #eaf0f7 0%, #a5b4fc 55%, #67e8f9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% 200%",
                animation: "gradient-shift 6s ease infinite",
              }}
            >
              Laurencio Paez
            </h1>

            {/* Dual role badges */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-5">
              <span
                style={{
                  padding: "6px 16px",
                  borderRadius: "999px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  background: "rgba(99,102,241,0.10)",
                  border: "1px solid rgba(99,102,241,0.30)",
                  color: "#a5b4fc",
                  letterSpacing: "0.01em",
                }}
              >
                ⚙️ &nbsp;Mechanical Engineer · Oil &amp; Gas
              </span>
              <span
                style={{
                  padding: "6px 16px",
                  borderRadius: "999px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  background: "rgba(6,182,212,0.08)",
                  border: "1px solid rgba(6,182,212,0.28)",
                  color: "#67e8f9",
                  letterSpacing: "0.01em",
                }}
              >
                💻 &nbsp;Full Stack Developer
              </span>
            </div>

            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "clamp(0.92rem, 2vw, 1.05rem)",
                maxWidth: "500px",
                margin: "0 auto 2.2rem",
                lineHeight: 1.65,
              }}
            >
              Integrity Engineer at Sintec S.A. specializing in FFS (API&nbsp;579),
              nonlinear FEA, multiphase CFD and Python automation.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-3 mb-7">
              {stats.map(({ value, label }) => (
                <div key={label} className="stat-card">
                  <span
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      background: "linear-gradient(135deg, #a5b4fc, #67e8f9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </span>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 500 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <a href="#Projects" className="btn-primary">
                View Projects
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline">
                Contact me
              </a>
            </div>

            {/* Social icons */}
            <div className="flex justify-center gap-3 mb-8">
              {[
                { href: "https://www.linkedin.com/in/laurencio-paez-727042155/", icon: faLinkedinIn, label: "LinkedIn", hoverColor: "#6366f1" },
                { href: "https://github.com/laurenciopaez",                       icon: faGithub,    label: "GitHub",   hoverColor: "#e6edf3" },
                { href: "mailto:laurencio314@gmail.com",                          icon: faEnvelope,  label: "Email",    hoverColor: "#06b6d4" },
              ].map(({ href, icon, label, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.09)",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "border-color 0.25s, color 0.25s, background 0.25s, transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = hoverColor + "80";
                    e.currentTarget.style.color = hoverColor;
                    e.currentTarget.style.background = hoverColor + "14";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)";
                    e.currentTarget.style.color = "var(--text-muted)";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>

            <Arrow />
          </motion.div>
        </section>

        {/* ── ABOUT ──────────────────────────────────────────────── */}
        <div id="Summary" />
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <motion.div style={{ scale }}>
            <div className="text-center mb-12">
              <div className="section-eyebrow justify-center">Who I am</div>
              <h2
                style={{
                  fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                }}
              >
                About me
              </h2>
            </div>

            {/* Bio card — full width */}
            <div className="glass-card accent-card mb-5" style={{ padding: "3rem 3.5rem" }}>
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#a5b4fc",
                  marginBottom: "20px",
                }}
              >
                Background
              </h3>
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: 2,
                  color: "var(--text-muted)",
                }}
              >
                I&apos;m <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Laurencio Paez</strong>,
                Mechanical Engineer graduated from UNMDP (2025) with{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>+2 years of experience in Oil &amp; Gas</strong>{" "}
                at Sintec S.A., specializing in mechanical integrity,
                Fitness-For-Service analysis (API&nbsp;579) and numerical simulation
                (FEA/CFD). I&apos;ve worked on critical assets for{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>YPF, Pan American Energy and Termap</strong>,
                including field campaigns in Neuquén. As a complement, I&apos;m a{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>full-stack developer</strong>{" "}
                proficient in the JavaScript ecosystem and Python automation.
              </p>
            </div>

            {/* Competencies grid — full width */}
            <div
              className="glass-card"
              style={{ borderLeft: "3px solid #06b6d4", padding: "3rem 3.5rem" }}
            >
              <h3
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#67e8f9",
                  marginBottom: "28px",
                }}
              >
                What I bring
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "14px",
                }}
              >
                {[
                  { icon: "⚙️", title: "Nonlinear FEA",       desc: "Crack propagation, fatigue & cyclic load modelling" },
                  { icon: "🌊", title: "Multiphase CFD",       desc: "Transient regime simulations — ANSYS Fluent & OLGA" },
                  { icon: "📐", title: "FFS Evaluations",      desc: "API 579 assessments for pipelines & pressure vessels" },
                  { icon: "🤖", title: "Python Automation",    desc: "Engineering calculations, data pipelines & scripting" },
                  { icon: "💻", title: "Full-Stack Dev",       desc: "React, Next.js, Node.js, PostgreSQL applications" },
                  { icon: "🌍", title: "Field-Ready Engineer", desc: "Advanced English · Neuquén campaigns · Own transport" },
                ].map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                      padding: "20px 22px",
                      borderRadius: "14px",
                      background: "rgba(6,182,212,0.04)",
                      border: "1px solid rgba(6,182,212,0.10)",
                      transition: "background 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(6,182,212,0.09)";
                      e.currentTarget.style.borderColor = "rgba(6,182,212,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(6,182,212,0.04)";
                      e.currentTarget.style.borderColor = "rgba(6,182,212,0.10)";
                    }}
                  >
                    <span style={{ fontSize: "1.6rem", flexShrink: 0, marginTop: "2px" }}>{icon}</span>
                    <div>
                      <p style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "5px" }}>
                        {title}
                      </p>
                      <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── BACKGROUND ─────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 mb-24" id="Background" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 32 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-10">
              <div className="section-eyebrow">My journey</div>
              <h2
                className="section-title font-extrabold"
                style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", color: "var(--text-primary)" }}
              >
                Background
              </h2>
            </div>
            <TimelinePortfolio />
          </motion.div>
        </section>

        {/* ── PROJECTS ───────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 mb-24" id="Projects" ref={ref4}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 32 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-10">
              <div className="section-eyebrow">My work</div>
              <h2
                className="section-title font-extrabold"
                style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", color: "var(--text-primary)" }}
              >
                Projects
              </h2>
            </div>
            <ProjectsBox />
          </motion.div>
        </section>

        {/* ── SKILLS ─────────────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-6 mb-24" id="Tech" ref={ref2}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 32 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-10">
              <div className="section-eyebrow">Tech stack</div>
              <h2
                className="section-title font-extrabold"
                style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", color: "var(--text-primary)" }}
              >
                Skills &amp; Tools
              </h2>
            </div>
            <TechnologiesBox />
          </motion.div>
        </section>

        {/* ── CONTACT ────────────────────────────────────────────── */}
        <section className="max-w-2xl mx-auto px-6 mb-24" id="contact" ref={ref3}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 32 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-10 flex items-start gap-3">
              <div>
                <div className="section-eyebrow">Get in touch</div>
                <h2
                  className="section-title font-extrabold"
                  style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", color: "var(--text-primary)" }}
                >
                  Contact me
                </h2>
              </div>
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="text-base cursor-pointer mt-3"
                style={{ color: "var(--text-muted)" }}
                data-tooltip-content="Open to integrity engineering roles, consulting & freelance full-stack projects"
                data-tooltip-id="globito"
              />
            </div>
            <Tooltip id="globito" />

            <div className="glass-card p-8">
              <ContactForm />
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default LandingComponent;
