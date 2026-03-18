import React, { useState } from "react";

const EngineeringProject = ({ title, client, tools = [], description, tags = [], images = [], url }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <article
      className="glass-card mb-5 overflow-hidden"
      style={{ borderTop: "2px solid rgba(99,102,241,0.40)" }}
    >
      {/* Image gallery */}
      {images.length > 0 && (
        <div style={{ position: "relative", background: "#050810", overflow: "hidden" }}>
          <img
            src={images[current]}
            alt={`${title} — image ${current + 1}`}
            style={{
              width: "100%",
              maxHeight: "300px",
              objectFit: "contain",
              display: "block",
              transition: "opacity 0.3s ease",
            }}
          />

          {/* Prev/Next */}
          {images.length > 1 && (
            <>
              {[
                { onClick: prev, label: "Previous image", side: "left",  char: "‹" },
                { onClick: next, label: "Next image",     side: "right", char: "›" },
              ].map(({ onClick, label, side, char }) => (
                <button
                  key={side}
                  onClick={onClick}
                  aria-label={label}
                  style={{
                    position: "absolute",
                    [side]: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(7,9,15,0.80)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    color: "#e6edf3",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    transition: "background 0.2s, border-color 0.2s",
                    fontWeight: 300,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(99,102,241,0.55)";
                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(7,9,15,0.80)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                  }}
                >
                  {char}
                </button>
              ))}
            </>
          )}

          {/* Dot indicators */}
          {images.length > 1 && (
            <div
              style={{
                position: "absolute",
                bottom: "12px",
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
                    width: i === current ? "20px" : "6px",
                    height: "6px",
                    borderRadius: "3px",
                    background: i === current ? "#6366f1" : "rgba(255,255,255,0.30)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "width 0.28s ease, background 0.2s",
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
                top: "12px",
                right: "12px",
                fontSize: "0.68rem",
                color: "rgba(255,255,255,0.60)",
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(6px)",
                padding: "3px 9px",
                borderRadius: "999px",
                fontWeight: 500,
              }}
            >
              {current + 1} / {images.length}
            </span>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6 pt-5">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div style={{ flex: 1, minWidth: 0 }}>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "1rem",
                  transition: "color 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a5b4fc")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              >
                {title}
                <svg
                  width="12"
                  height="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  style={{ flexShrink: 0, opacity: 0.55 }}
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            ) : (
              <h3 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1rem" }}>
                {title}
              </h3>
            )}
            {client && (
              <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "3px" }}>
                {client}
              </p>
            )}
          </div>

          {/* Tool chips */}
          <div className="flex flex-wrap gap-2 flex-shrink-0">
            {tools.map((t) => (
              <span
                key={t}
                style={{
                  padding: "3px 11px",
                  borderRadius: "999px",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.03em",
                  background: "rgba(6,182,212,0.08)",
                  border: "1px solid rgba(6,182,212,0.28)",
                  color: "#67e8f9",
                  whiteSpace: "nowrap",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: "0.855rem",
            lineHeight: 1.72,
            color: "var(--text-muted)",
          }}
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
