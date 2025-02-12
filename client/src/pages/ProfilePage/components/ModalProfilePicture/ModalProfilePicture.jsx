import React from "react";
import "./ModalProfilePicture.css";

const ModalProfilePicture = ({ handleFileChange, handleUpload, setIsOpen}) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3 className="modal-tittle">Alterar foto de perfil</h3>
        <input type="file" accept="image/" className="custom-file-upload" onChange={handleFileChange}></input>
        <div className="modal-buttons">
          <button onClick={handleUpload} className="upload-image">
            Enviar
          </button>
          <button onClick={() => setIsOpen(false)} className="close-modal">
           X
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalProfilePicture;
