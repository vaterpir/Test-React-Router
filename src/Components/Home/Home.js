import React, { useState } from "react";
import ReactModal from "react-modal";
import "./Home.css";

export const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="home">
      Домашняя
      <button onClick={() => setIsOpenModal(!isOpenModal)}>Open Modal</button>
      <ReactModal isOpen={isOpenModal} contentLabel="Minimal Modal Example">
        <button onClick={() => setIsOpenModal(!isOpenModal)}>
          Close Modal
        </button>
      </ReactModal>
    </div>
  );
};
