import { Modal } from 'antd';
import React, { useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocation, useNavigate } from 'react-router';

interface ModalContentProps {
  title: string;
  modalContent?: string;
}

function ModalContent({ title, modalContent }: ModalContentProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isModalOpen = location.hash === '#modal';
  const handleClose = useCallback(() => {
    navigate(location.pathname);
  }, [location.pathname, navigate]);

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
