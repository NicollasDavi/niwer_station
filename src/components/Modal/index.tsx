// src/components/Modal/index.tsx
import React from 'react';
import { ModalContainer, ModalContent, CloseButton } from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        {children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
