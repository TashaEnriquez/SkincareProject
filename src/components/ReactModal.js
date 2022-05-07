import React from "react";
import "../styles/ReactModal.css";

const ReactModal = ({ setOpenModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Add to your Routines</h1>
        </div>
        <div className="body">
          <ul>
              <li>AM Routine</li>
              <li>PM Routine</li>
          </ul>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="closeBtn"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReactModal;