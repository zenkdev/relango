import { Modal } from 'antd';
import React, { useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { useHistory } from 'react-router';

interface ModalContentProps {
  title: string;
  modalContent?: string;
}

function ModalContent({ title, modalContent }: ModalContentProps) {
  const history = useHistory();
  const isModalOpen = history.location.hash === '#modal';
  const handleClose = useCallback(() => {
    history.push(history.location.pathname);
  }, [history]);

  if (!modalContent) {
    return null;
  }

  return (
    <Modal
      title={title}
      visible={isModalOpen}
      width="90vw"
      bodyStyle={{ overflow: 'scroll', height: '80vh' }}
      footer={null}
      onCancel={handleClose}
    >
      <ReactMarkdown>{modalContent}</ReactMarkdown>
    </Modal>
  );
}

export default ModalContent;
