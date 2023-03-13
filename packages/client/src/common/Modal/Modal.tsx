import React, { useState, ReactNode, ReactElement, cloneElement } from "react";
import { ModalProvider } from "styled-react-modal";
import Modal from "styled-react-modal";
import Form from "@common/Form";

const StyledModal = Modal.styled`
  width: 500px;
  height: 500px;
  background: white;
`;

interface ModalBodyProps {
  children: ReactElement<{ onClick: () => void }>;
}

const ModalBody = ({ children }: ModalBodyProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const button = cloneElement(children, {
    onClick: toggleModal,
  });

  return (
    <ModalProvider>
      {button}
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <Form />
      </StyledModal>
    </ModalProvider>
  );
};

export default ModalBody;
