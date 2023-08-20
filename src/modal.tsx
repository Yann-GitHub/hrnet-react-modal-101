import React from 'react';
import { useRef, useEffect } from 'react';
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
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    max-width: 80%;
    max-height: 80%;
    overflow: auto;
    position: relative;
  `;

  const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center
    z-index: 100;
  `;

  const CloseButton = styled.button`
    color: #637288;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 15px;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, modalCustomStyle, children }) => {
  if (!isOpen) return null;

  const modalContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && modalContentRef.current) {
      modalContentRef.current.focus();
    }
  }, [isOpen]);

  return (
    <ModalContainer
        tabIndex={-1}
        onKeyDown={(e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        }}
    >
        <ModalContent
            tabIndex={0}
            style={modalCustomStyle || {}}
            ref={modalContentRef}
            role="dialog"
            aria-modal="true"
        >
            {children}
            <CloseButton
                tabIndex={0}
                onClick={onClose}
                onKeyDown={(e) => {if (e.key === 'Enter') onClose();}}>
            X
            </CloseButton>
        </ModalContent>
    </ModalContainer>
  );
};

export default Modal;