import React, { FC } from 'react';
import Modal from 'react-modal';

(Modal as any).setAppElement('#root');


interface ImageModalPropsType {
  selectedImage: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const ImageModal = ({ selectedImage, isOpen, onClose }: ImageModalPropsType) => {
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
      textAlign: 'center' as 'center' | 'left' | 'right',
      borderRadius: 30
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <img src={selectedImage} alt="Selected" width={800} />
    </Modal>
  );
};

export default ImageModal;
