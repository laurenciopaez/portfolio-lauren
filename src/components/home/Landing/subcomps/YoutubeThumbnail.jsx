import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const YouTubeThumbnail = ({ videoId, title, videoUrl, text1, text2, githubUrl }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const [expanded, setExpanded] = useState(false);

  const shortText = text1?.length > 200 ? text1.slice(0, 200) + "…" : text1;

  /* Parse tech stack string into individual badges */
  const techBadges = text2
    ? text2.split(" · ").map((s) => s.trim()).filter(Boolean)
    : [];

  return (
    <article
      className="glass-card mb-5 overflow-hidden"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {/* Thumbnail */}
      <a
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", position: "relative", overflow: "hidden" }}
      >
        <img
          src={thumbnailUrl}
          alt={`Preview — ${title}`}
          style={{
            width: "100%",
            maxHeight: "270px",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.45s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />

        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(7,9,15,0.55) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />

        {/* Play button overlay */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "rgba(99,102,241,0.90)",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 8px 32px rgba(99,102,241,0.60)",
              transition: "transform 0.2s",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
              <polygon points="6,4 18,10 6,16" />
            </svg>
          </div>
        </span>
      </a>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1rem" }}>
          {title}
        </h3>

        <p style={{ fontSize: "0.855rem", lineHeight: 1.72, color: "var(--text-muted)" }}>
          {expanded ? text1 : shortText}
        </p>

        {text1?.length > 200 && (
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              color: "#6366f1",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              fontSize: "0.78rem",
              fontWeight: 600,
              alignSelf: "flex-start",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#a5b4fc")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6366f1")}
          >
            {expanded ? "Show less ↑" : "Read more ↓"}
          </button>
        )}

        {/* Tech stack badges */}
        {techBadges.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {techBadges.map((tech) => (
              <span
                key={tech}
                style={{
                  padding: "3px 10px",
                  borderRadius: "999px",
                  fontSize: "0.68rem",
                  fontWeight: 500,
                  background: "rgba(99,102,241,0.07)",
                  border: "1px solid rgba(99,102,241,0.18)",
                  color: "var(--text-muted)",
                  whiteSpace: "nowrap",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 mt-1">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-badge"
              style={{ textDecoration: "none" }}
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
          )}
          {videoUrl && (
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-badge"
              style={{
                textDecoration: "none",
                background: "rgba(99,102,241,0.12)",
                borderColor: "rgba(99,102,241,0.35)",
              }}
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: "0.72rem" }} />
              Watch demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default YouTubeThumbnail;
