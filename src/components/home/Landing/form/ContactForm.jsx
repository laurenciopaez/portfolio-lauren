import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgwwroe");
  const [msgError, setMsgError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (e.target.message.value.trim().split(/\s+/).length < 20) {
      setMsgError(true);
      return;
    }
    setMsgError(false);
    await handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "2rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            background: "rgba(6,182,212,0.12)",
            border: "1px solid rgba(6,182,212,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
          }}
        >
          ✓
        </div>
        <p style={{ color: "var(--text-primary)", fontWeight: 600, fontSize: "1rem" }}>
          Message sent!
        </p>
        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      acceptCharset="utf-8"
      method="post"
      style={{ display: "flex", flexDirection: "column", gap: "18px" }}
    >
      <div className="form-field">
        <label htmlFor="full-name" className="form-label">Full Name</label>
        <input
          type="text"
          name="name"
          id="full-name"
          placeholder="First and Last"
          required
          className="form-input"
        />
      </div>

      <div className="form-field">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          className="form-input"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="form-field">
        <label htmlFor="message" className="form-label">
          Message
          <span style={{ color: "var(--text-muted)", fontWeight: 400, marginLeft: "6px", textTransform: "none", letterSpacing: 0 }}>
            (min. 20 words)
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell me about your project, role or opportunity…"
          className="form-input"
          style={{ resize: "none", minHeight: "130px" }}
          required
          onChange={() => msgError && setMsgError(false)}
        />
        {msgError && (
          <p style={{ color: "#f87171", fontSize: "0.78rem", marginTop: "4px" }}>
            Please write at least 20 words.
          </p>
        )}
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary"
        style={{
          justifyContent: "center",
          opacity: state.submitting ? 0.65 : 1,
          cursor: state.submitting ? "not-allowed" : "pointer",
        }}
      >
        {state.submitting ? (
          <>
            <span style={{ fontSize: "0.8rem" }}>Sending…</span>
          </>
        ) : (
          <>
            Send message
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}

export default ContactForm;
