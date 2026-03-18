import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer
    style={{
      borderTop: "1px solid rgba(255,255,255,0.07)",
      backgroundColor: "rgba(13,17,23,0.95)",
    }}
    className="w-full px-8 py-10 mt-4"
  >
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

      {/* Brand */}
      <div>
        <span
          className="font-semibold text-sm tracking-widest uppercase"
          style={{
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Laurencio Paez
        </span>
        <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
          Mechanical Engineer · Full Stack Developer
        </p>
        <a
          href="mailto:laurencio314@gmail.com"
          className="text-xs mt-1 block"
          style={{ color: "var(--text-muted)", textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#06b6d4")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          laurencio314@gmail.com
        </a>
      </div>

      {/* Nav links */}
      <nav className="flex gap-6">
        {[
          { label: "Top",      href: "#top" },
          { label: "Projects", href: "#Projects" },
          { label: "About",    href: "#Summary" },
          { label: "Contact",  href: "#contact" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-xs font-medium uppercase tracking-wider transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Socials */}
      <div className="flex items-center gap-4">
        <a
          href="https://wa.me/542235607849"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#25d366")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a
          href="https://www.linkedin.com/in/laurencio-paez-727042155/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#6366f1")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://github.com/laurenciopaez"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          style={{ color: "var(--text-muted)", transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#e6edf3")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>

    <p
      className="text-center text-xs mt-8"
      style={{ color: "var(--text-muted)", opacity: 0.5 }}
    >
      © {new Date().getFullYear()} Laurencio Paez — All rights reserved
    </p>
  </footer>
);

export default Footer;
