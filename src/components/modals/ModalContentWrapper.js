import React, { useState, forwardRef, useImperativeHandle } from "react";
import "./modal.css";
import ReactDOM from "react-dom";

const ModalContentWrapper = forwardRef((props, ref) => {
  const [display, setdisplay] = useState(true);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });

  const open = () => {
    setdisplay(true);
  };

  const close = () => {
    setdisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <div>
        <div className="modal-wrapper">
          <div onClick={close} className="modal-backdrop">
            <div className="modal-box">{props.children}</div>
          </div>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }

  return null;
});

export default ModalContentWrapper;
