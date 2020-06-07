import { Modal } from 'antd';
import React, { useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { useHistory } from 'react-router';

type ModalContentProps = { title: string; modalContent?: string };

const ModalContent: React.FC<ModalContentProps> = ({ title, modalContent }) => {
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
      <ReactMarkdown source={modalContent} />
    </Modal>
  );
};

export default ModalContent;
