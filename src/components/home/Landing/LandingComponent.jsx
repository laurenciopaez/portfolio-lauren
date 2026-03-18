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
import { faCircleQuestion, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import TechnologiesBox from "./subcomps/TechnologiesBox";
import ProjectsBox from "./subcomps/ProjectsBox";

const LandingComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleContextMenu = (e) => e.preventDefault();

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1.5], [0.6, 1.5]);

  const [ref, inView]   = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  return (
    <div className="relative font-sans text-[var(--text-primary)]" id="top">

      {/* ── NAVBAR ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ position: "sticky", top: 0, zIndex: 50 }}
      >
        <nav
          style={{
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
            backgroundColor: scrolled ? "rgba(13,17,23,0.92)" : "rgba(13,17,23,0.70)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            transition: "background-color 0.3s ease",
          }}
          className="px-6 py-3 flex items-center justify-between lg:px-12"
        >
          <a
            href="#top"
            className="font-semibold text-sm tracking-widest uppercase"
            style={{
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textDecoration: "none",
            }}
          >
            Laurencio Paez
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {[
              { label: "About",    href: "#Summary" },
              { label: "Background", href: "#Background" },
              { label: "Projects", href: "#Projects" },
              { label: "Skills",   href: "#Tech" },
              { label: "Contact",  href: "#contact" },
            ].map(({ label, href }) => (
              <a key={label} href={href} className="nav-link-custom">
                {label}
              </a>
            ))}
          </div>

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
                  <line x1="3" y1="6" x2="19" y2="6" />
                  <line x1="3" y1="12" x2="19" y2="12" />
                  <line x1="3" y1="18" x2="19" y2="18" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {expanded && (
          <div
            style={{
              backgroundColor: "rgba(13,17,23,0.96)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}
            className="lg:hidden flex flex-col px-6 py-4 gap-4"
          >
            {[
              { label: "About",      href: "#Summary" },
              { label: "Background", href: "#Background" },
              { label: "Projects",   href: "#Projects" },
              { label: "Skills",     href: "#Tech" },
              { label: "Contact",    href: "#contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="nav-link-custom text-sm"
                onClick={() => setExpanded(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </motion.div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-16 pb-24">
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ marginBottom: "2rem" }}
        >
          <img
            src="https://media.licdn.com/dms/image/D4D03AQHbwfiO2g0cng/profile-displayphoto-shrink_800_800/0/1689368093238?e=1706745600&v=beta&t=6UfY0kxIjJSZRTAIaz75pmgZViUXMe5mr0pqb-2Tu4k"
            alt="Laurencio Paez"
            onContextMenu={handleContextMenu}
            style={{
              width: "112px",
              height: "112px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid rgba(99,102,241,0.5)",
              boxShadow: "0 0 28px rgba(99,102,241,0.30)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <p
            style={{ color: "var(--text-muted)", fontSize: "0.85rem", letterSpacing: "0.14em" }}
            className="uppercase font-medium mb-2"
          >
            Hi, I&apos;m
          </p>
          <h1
            className="font-bold mb-3"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              background: "linear-gradient(135deg, #e6edf3 30%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Laurencio Paez
          </h1>

          {/* Dual role badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span
              style={{
                padding: "4px 14px",
                borderRadius: "999px",
                fontSize: "0.8rem",
                fontWeight: 500,
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.4)",
                color: "#a5b4fc",
              }}
            >
              Mechanical Engineer · Oil &amp; Gas
            </span>
            <span
              style={{
                padding: "4px 14px",
                borderRadius: "999px",
                fontSize: "0.8rem",
                fontWeight: 500,
                background: "rgba(6,182,212,0.12)",
                border: "1px solid rgba(6,182,212,0.35)",
                color: "#67e8f9",
              }}
            >
              Full Stack Developer
            </span>
          </div>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              maxWidth: "480px",
              margin: "0 auto 2rem",
              lineHeight: 1.6,
            }}
          >
            Integrity Engineer at Sintec S.A. · FFS (API&nbsp;579) · FEA · CFD · Python automation
          </p>

          <div className="flex justify-center gap-5 mb-8">
            {[
              {
                href: "https://www.linkedin.com/in/laurencio-paez-727042155/",
                icon: faLinkedinIn,
                label: "LinkedIn",
                hoverColor: "#6366f1",
              },
              {
                href: "https://github.com/laurenciopaez",
                icon: faGithub,
                label: "GitHub",
                hoverColor: "#e6edf3",
              },
              {
                href: "mailto:laurencio314@gmail.com",
                icon: faEnvelope,
                label: "Email",
                hoverColor: "#06b6d4",
              },
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
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "var(--text-muted)",
                  transition: "border-color 0.2s, color 0.2s, background 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = hoverColor + "99";
                  e.currentTarget.style.color = hoverColor;
                  e.currentTarget.style.background = hoverColor + "18";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.color = "var(--text-muted)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <FontAwesomeIcon icon={icon} />
              </a>
            ))}
          </div>

          <Arrow />
        </motion.div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────── */}
      <div id="Summary" />
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <motion.div style={{ scale }}>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="glass-card accent-card p-7">
              <h2
                className="section-title font-semibold text-lg mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                About me
              </h2>
              <p
                className="text-base leading-relaxed text-justify mt-6"
                style={{ color: "var(--text-muted)" }}
              >
                I&apos;m Laurencio Paez, Mechanical Engineer graduated from UNMDP (2025)
                with +2 years of experience in Oil &amp; Gas at Sintec S.A., specializing
                in mechanical integrity, Fitness-For-Service analysis (API 579) and
                numerical simulation (FEA/CFD). I&apos;ve worked on critical assets for
                YPF, Pan American Energy and Termap, including field campaigns in Neuquén.
                As a complement, I&apos;m a full-stack developer proficient in the JavaScript
                ecosystem and Python automation.
              </p>
            </div>

            <div
              className="glass-card p-7"
              style={{ borderLeft: "3px solid #06b6d4" }}
            >
              <h2
                className="section-title font-semibold text-lg mb-5"
                style={{ color: "var(--text-primary)" }}
              >
                What I bring
              </h2>
              <ul
                className="mt-6 space-y-2 text-base leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                <li>⚙️ &nbsp;Nonlinear FEA modelling — crack propagation, fatigue &amp; cyclic loads</li>
                <li>🌊 &nbsp;Multiphase CFD simulations in transient regimes (ANSYS Fluent / OLGA)</li>
                <li>📐 &nbsp;FFS evaluations under API 579 for pipelines &amp; pressure vessels</li>
                <li>🤖 &nbsp;Python scripts for engineering calculations &amp; data automation</li>
                <li>💻 &nbsp;Full-stack web apps — React, Next.js, Node.js, PostgreSQL</li>
                <li>🌍 &nbsp;Advanced English · Willingness to relocate · Own transportation</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── BACKGROUND ───────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 mb-20" id="Background" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 28 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2
            className="section-title font-semibold text-2xl mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            Background
          </h2>
          <TimelinePortfolio />
        </motion.div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 mb-20" id="Projects" ref={ref4}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 28 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2
            className="section-title font-semibold text-2xl mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            Projects
          </h2>
          <ProjectsBox />
        </motion.div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 mb-20" id="Tech" ref={ref2}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 28 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h2
            className="section-title font-semibold text-2xl mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            Skills &amp; Tools
          </h2>
          <TechnologiesBox />
        </motion.div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section className="max-w-xl mx-auto px-6 mb-20" id="contact" ref={ref3}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 28 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <h2
              className="section-title font-semibold text-2xl"
              style={{ color: "var(--text-primary)" }}
            >
              Contact me
            </h2>
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className="text-lg cursor-pointer"
              style={{ color: "var(--text-muted)", marginTop: "2px" }}
              data-tooltip-content="Open to integrity engineering roles, consulting & freelance full-stack projects"
              data-tooltip-id="globito"
            />
          </div>
          <Tooltip id="globito" />

          <div className="glass-card p-7">
            <ContactForm />
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingComponent;
