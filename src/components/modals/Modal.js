import React, { useRef } from "react";
import "./modal.css";
import ModalContentWrapper from "./ModalContentWrapper";

function Modal() {
  const modalRef = useRef();
  const openModal = () => {
    // console.log("open modal");
    modalRef.current.openModal();
  };
  return (
    <div>
      <button onClick={openModal}> Open Modal</button>

      <ModalContentWrapper ref={modalRef}>
        <h1>Hello</h1>
        <p>
          <span>This is Soham Debnath</span>
        </p>
        <button onClick={() => modalRef.current.close()}>Close Modal</button>
      </ModalContentWrapper>
    </div>
  );
}

export default Modal;
