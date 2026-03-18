import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const WebsitePreview = ({ title, url, imageUrl, git, text }) => (
  <article className="glass-card mb-5 overflow-hidden">
    {/* Screenshot */}
    {imageUrl && (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block", overflow: "hidden" }}
      >
        <img
          src={imageUrl}
          alt={`Preview — ${title}`}
          style={{
            width: "100%",
            maxHeight: "240px",
            objectFit: "cover",
            transition: "transform 0.4s ease",
            display: "block",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </a>
    )}

    {/* Content */}
    <div className="p-6 flex flex-col gap-3">
      <h3 className="font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
        {title}
      </h3>

      {text && (
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {text}
        </p>
      )}

      {/* Actions */}
      <div className="flex items-center gap-4 mt-1">
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
            style={{ textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{ fontSize: "0.75rem" }} />
            Live site
          </a>
        )}
      </div>
    </div>
  </article>
);

export default WebsitePreview;
