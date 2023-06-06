import React from "react";
import "./modal.css";

const Modal = ({ onClose, title, children }) => {
  return (
    <>
      <div class="darkBG" onClick={onClose} />
      <div class="centered">
        <div class="modalHeader">
          <h5 class="heading">{title}</h5>
        </div>
        <button class="closeBtn" onClick={onClose}>
          X
        </button>

        <div
          class="modal"
          className="h-[6rem] w-[25rem] bg-white pb-20 rounded-b-xl"
        >
          <div class="modalContent">{children}</div>
        </div>

        <div class="modalActions">
          <div class="actionsContainer">
            <button class="cancelBtn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
