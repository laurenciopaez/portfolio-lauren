import React, { useState } from "react";

/**
 * Card for engineering / integrity projects.
 * Props: title, client, tools (string[]), description, tags (string[]), images (string[]), url (string)
 */
const EngineeringProject = ({ title, client, tools = [], description, tags = [], images = [], url }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <article
      className="glass-card mb-5 overflow-hidden"
      style={{ borderTop: "2px solid rgba(99,102,241,0.45)" }}
    >
      {/* Image gallery */}
      {images.length > 0 && (
        <div style={{ position: "relative", background: "#0a0d14", overflow: "hidden" }}>
          <img
            src={images[current]}
            alt={`${title} — image ${current + 1}`}
            style={{
              width: "100%",
              maxHeight: "280px",
              objectFit: "contain",
              display: "block",
              transition: "opacity 0.25s ease",
            }}
          />

          {/* Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous image"
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(13,17,23,0.75)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  color: "#e6edf3",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.9rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(99,102,241,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(13,17,23,0.75)")}
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Next image"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(13,17,23,0.75)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "50%",
                  width: "32px",
                  height: "32px",
                  color: "#e6edf3",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.9rem",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(99,102,241,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(13,17,23,0.75)")}
              >
                ›
              </button>
            </>
          )}

          {/* Dot indicators */}
          {images.length > 1 && (
            <div
              style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "6px",
              }}
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Image ${i + 1}`}
                  style={{
                    width: i === current ? "18px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: i === current ? "#6366f1" : "rgba(255,255,255,0.35)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "width 0.25s ease, background 0.2s",
                  }}
                />
              ))}
            </div>
          )}

          {/* Counter */}
          {images.length > 1 && (
            <span
              style={{
                position: "absolute",
                top: "10px",
                right: "12px",
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.55)",
                background: "rgba(0,0,0,0.45)",
                padding: "2px 8px",
                borderRadius: "999px",
              }}
            >
              {current + 1} / {images.length}
            </span>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-base"
                style={{
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a5b4fc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              >
                {title}
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ flexShrink: 0, opacity: 0.6 }}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ) : (
              <h3
                className="font-semibold text-base"
                style={{ color: "var(--text-primary)" }}
              >
                {title}
              </h3>
            )}
            {client && (
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                {client}
              </p>
            )}
          </div>

          {/* Tool chips */}
          <div className="flex flex-wrap gap-2">
            {tools.map((t) => (
              <span
                key={t}
                style={{
                  padding: "2px 10px",
                  borderRadius: "999px",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  background: "rgba(6,182,212,0.10)",
                  border: "1px solid rgba(6,182,212,0.30)",
                  color: "#67e8f9",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span key={tag} className="tech-badge" style={{ fontSize: "0.7rem" }}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default EngineeringProject;
