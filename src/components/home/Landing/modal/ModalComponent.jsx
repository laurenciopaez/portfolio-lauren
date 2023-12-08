"use client";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Image from "next/image";

const ModalComponent = ({ index, setShowModal, showModal }) => {
  console.log(index);

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="text-black font-serif font-bold">
            Detalle
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-black flex flex-col items-center">
          {index === '7' ? (
            <iframe src="/docs/analisisnumerico.pdf" title="PDF Viewer" width="100%" height="600px"></iframe>
          ) : (
            <Image
              src={`/images/Certificado${index}.png`}
              alt="imagen"
              width="600"
              height="500"
              className="flex"
            />
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="text-black"
            onClick={() => setShowModal(false)}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
