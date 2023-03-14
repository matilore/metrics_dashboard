import React, { ReactElement, cloneElement } from 'react'
import Form from '@common/Form'
import { ModalProvider } from 'styled-react-modal'
import { RequiredMetricsInputs } from '@features/Dashboard/contracts'
import { StyledModal } from './styleComponents'

interface ModalBodyProps {
  children: ReactElement<{ onClick: () => void }>
  toggleModal: () => void
  isModalOpen: boolean
  postNewMetric: ({ metricId, metricValue }: RequiredMetricsInputs) => void
}

const ModalBody = ({
  children,
  toggleModal,
  isModalOpen,
  postNewMetric
}: ModalBodyProps) => {
  const button = cloneElement(children, {
    onClick: toggleModal
  })

  return (
    <ModalProvider>
      {button}
      <StyledModal
        isOpen={isModalOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <Form postNewMetric={postNewMetric} />
      </StyledModal>
    </ModalProvider>
  )
}

export default ModalBody
