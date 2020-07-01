import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./MyModal.css";

function MyModal() {
  const [smShow, setSmShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setSmShow(true)}>Small Modal</Button>{" "}
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem Ipsum...Lorem Ipsum...Lorem Ipsum...Lorem Ipsum...Lorem Ipsum...
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MyModal;
