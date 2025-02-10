import React from 'react'
import './ModalProfilePicture.css';

const ModalProfilePicture = ( {handleFileChange, setIsOpen} ) => {
  return (
    <div className='modal'>
        <div className='modal-content'>
            <h3>Alterar foto de perfil</h3>
            <input type='file' accept='image/' onChange={handleFileChange}></input>
            <button onClick={() => setIsOpen(false)} className='close-modal'>Fechar</button>
        </div>
    </div>
  )
}

export default ModalProfilePicture