import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const WebsitePreview = ({ title, url, imageUrl, videoSrc, git, text, techStack }) => {
  /* Parse tech stack string into badges */
  const techBadges = techStack
    ? techStack.split(" · ").map((s) => s.trim()).filter(Boolean)
    : [];

  return (
    <article
      className="glass-card mb-5 overflow-hidden"
      style={{ borderTop: "2px solid rgba(6,182,212,0.40)" }}
    >
      {/* Video preview */}
      {videoSrc && (
        <div style={{ background: "#050810", overflow: "hidden" }}>
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            controls
            style={{
              width: "100%",
              maxHeight: "340px",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>
      )}

      {/* Screenshot */}
      {imageUrl && !videoSrc && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block", overflow: "hidden", position: "relative" }}
        >
          <img
            src={imageUrl}
            alt={`Preview — ${title}`}
            style={{
              width: "100%",
              maxHeight: "260px",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.45s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(7,9,15,0.45) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
        </a>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        <h3 style={{ color: "var(--text-primary)", fontWeight: 700, fontSize: "1rem" }}>
          {title}
        </h3>

        {text && (
          <p style={{ fontSize: "0.855rem", lineHeight: 1.72, color: "var(--text-muted)" }}>
            {text}
          </p>
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
                  background: "rgba(6,182,212,0.07)",
                  border: "1px solid rgba(6,182,212,0.20)",
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
          {git && (
            <a
              href={git}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-badge"
              style={{ textDecoration: "none" }}
            >
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
          )}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-badge"
              style={{
                textDecoration: "none",
                background: "rgba(6,182,212,0.08)",
                borderColor: "rgba(6,182,212,0.30)",
                color: "#67e8f9",
              }}
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: "0.72rem" }} />
              Live site
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default WebsitePreview;
