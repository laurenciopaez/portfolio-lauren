import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const YouTubeThumbnail = ({ videoId, title, videoUrl, text1, text2, githubUrl }) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const [expanded, setExpanded] = useState(false);

  // Keep text1 short unless expanded
  const shortText = text1?.length > 180 ? text1.slice(0, 180) + "…" : text1;

  return (
    <article
      className="glass-card mb-5 overflow-hidden"
      style={{ display: "flex", flexDirection: "column" }}
    >
      {/* Thumbnail strip */}
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
            maxHeight: "260px",
            objectFit: "cover",
            transition: "transform 0.4s ease",
            display: "block",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        {/* Play overlay */}
        <span
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.28)",
            opacity: 0,
            transition: "opacity 0.25s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
        >
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="28" r="28" fill="rgba(99,102,241,0.85)" />
            <polygon points="22,18 42,28 22,38" fill="white" />
          </svg>
        </span>
      </a>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3
          className="font-semibold text-lg"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h3>

        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {expanded ? text1 : shortText}
        </p>

        {text1?.length > 180 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs font-medium self-start"
            style={{ color: "#6366f1", background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            {expanded ? "Show less ↑" : "Read more ↓"}
          </button>
        )}

        {/* Actions */}
        <div className="flex items-center gap-4 mt-2">
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
              style={{ textDecoration: "none" }}
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: "0.75rem" }} />
              Watch demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default YouTubeThumbnail;
