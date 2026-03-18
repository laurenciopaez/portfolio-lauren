"use client";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "next/image";

const ModalComponent = ({ src, setShowModal, showModal }) => {
  const isPdf = src?.endsWith(".pdf");

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
      <Modal.Header
        closeButton
        style={{
          background: "#161b22",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          color: "#e6edf3",
        }}
      >
        <Modal.Title style={{ fontSize: "0.95rem", fontWeight: 600 }}>
          Certificate
        </Modal.Title>
      </Modal.Header>

      <Modal.Body
        style={{
          background: "#0d1117",
          display: "flex",
          justifyContent: "center",
          padding: isPdf ? 0 : "1.5rem",
        }}
      >
        {isPdf ? (
          <iframe
            src={src}
            title="PDF Viewer"
            width="100%"
            height="600px"
            style={{ border: "none" }}
          />
        ) : (
          <Image
            src={src}
            alt="Certificate"
            width={700}
            height={520}
            style={{ objectFit: "contain", borderRadius: "8px", maxWidth: "100%" }}
          />
        )}
      </Modal.Body>

      <Modal.Footer
        style={{
          background: "#161b22",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Button
          onClick={() => setShowModal(false)}
          style={{
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            border: "none",
            borderRadius: "8px",
            fontSize: "0.85rem",
            padding: "6px 20px",
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
