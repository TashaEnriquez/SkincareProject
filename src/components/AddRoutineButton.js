import { React, useState } from 'react';
import ReactModal from './ReactModal';
//import { GrAddCircle } from 'react-icons/gr';
import "../styles/ModalButton.css"


const AddRoutineButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="routine-button">
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
       ADD
      </button>

      {modalOpen && <ReactModal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default AddRoutineButton;