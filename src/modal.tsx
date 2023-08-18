// import * as React from "react";
import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalCustomStyle?: React.CSSProperties;
  children: React.ReactNode;
}

  const ModalContent = styled.div`
    background: #fff;
    padding: 20px;
    borderRadius: 5px;
    boxShadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    maxWidth: 80%;
    maxHeight: 80%;
    overflow: auto;
    position: relative;
  `;

  const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backgroundColor: rgba(0, 0, 0, 0.5);
    display: flex;
    justifyContent: center;
    alignItems: center
  `;

  const CloseButton = styled.button`
    background-color: #e0e0e0;
    color: #333;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
    position: absolute;
    top: 10px;
    right: 10px;

    &:hover {
        background-color: #333;
        color: #fff;
    }
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, modalCustomStyle, children }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalContent style={modalCustomStyle || {}}>
        {children}
        <CloseButton onClick={onClose} >
           X
        </CloseButton>
        </ModalContent>
    </ModalContainer>
  );
};

export default Modal;