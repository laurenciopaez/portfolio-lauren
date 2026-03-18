import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  { href: "https://wa.me/542235607849",                           icon: faWhatsapp,  label: "WhatsApp", color: "#25d366" },
  { href: "https://www.linkedin.com/in/laurencio-paez-727042155/", icon: faLinkedinIn, label: "LinkedIn", color: "#6366f1" },
  { href: "https://github.com/laurenciopaez",                      icon: faGithub,    label: "GitHub",   color: "#e6edf3" },
];

const navLinks = [
  { label: "Top",        href: "#top"       },
  { label: "Projects",   href: "#Projects"  },
  { label: "About",      href: "#Summary"   },
  { label: "Skills",     href: "#Tech"      },
  { label: "Contact",    href: "#contact"   },
];

const Footer = () => (
  <footer
    style={{
      borderTop: "1px solid rgba(255,255,255,0.055)",
      background: "linear-gradient(to bottom, transparent, rgba(7,9,15,0.98))",
    }}
    className="w-full px-8 py-12 mt-4"
  >
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

      {/* Brand */}
      <div className="flex flex-col items-center md:items-start gap-1.5">
        <div className="flex items-center gap-2.5">
          <span
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "7px",
              background: "linear-gradient(135deg, #6366f1, #06b6d4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.72rem",
              fontWeight: 800,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            LP
          </span>
          <span
            style={{
              fontWeight: 700,
              fontSize: "0.9rem",
              background: "linear-gradient(135deg, #c7d0e0, #8b96b0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Laurencio Paez
          </span>
        </div>
        <p style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
          Mechanical Engineer · Full Stack Developer
        </p>
        <a
          href="mailto:laurencio314@gmail.com"
          style={{
            fontSize: "0.72rem",
            color: "var(--text-muted)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#67e8f9")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
        >
          laurencio314@gmail.com
        </a>
      </div>

      {/* Nav links */}
      <nav className="flex flex-wrap justify-center gap-5">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#a5b4fc")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Socials */}
      <div className="flex items-center gap-3">
        {socials.map(({ href, icon, label, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s",
              fontSize: "0.9rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = color;
              e.currentTarget.style.borderColor = color + "55";
              e.currentTarget.style.background = color + "12";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--text-muted)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>
    </div>

    {/* Bottom line */}
    <div
      style={{
        maxWidth: "80rem",
        margin: "2.5rem auto 0",
        paddingTop: "1.5rem",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        textAlign: "center",
      }}
    >
      <p style={{ fontSize: "0.68rem", color: "var(--text-muted)", opacity: 0.5 }}>
        © {new Date().getFullYear()} Laurencio Paez — All rights reserved
      </p>
    </div>
  </footer>
);

export default Footer;
