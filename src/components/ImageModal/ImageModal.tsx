import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ selectedImage, isOpen, onClose }) => {
  
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '40px',
      width: '800px',
      textAlign: 'center',
      borderRadius: 30
    },
  };

  return (
      <Modal
        isOpen={isOpen} 
        onRequestClose={onClose}  
        style={customStyles}>
          <img src={selectedImage} alt="" width={800}/>
      </Modal>

  );
};

export default ImageModal;
