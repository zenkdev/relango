import { Button, PageHeader } from 'antd';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useHistory } from 'react-router-dom';

import { BackwardOutlined, ForwardOutlined, InfoOutlined } from '@ant-design/icons';

import { Module } from '../../models';
import ModuleTests from './ModuleTests';
import ModalContent from './ModalContent';

type ModuleContentProps = { module: Module; prev?: string; next?: string };

const ModuleContent: React.FC<ModuleContentProps> = ({ module, prev, next }) => {
  const { location } = useHistory();
  const extra: any[] = [];
  if (module.modalContent) {
    extra.push(
      <Link key="modal" to={{ pathname: location.pathname, hash: 'modal' }}>
        <Button type="primary" icon={<InfoOutlined />} />
      </Link>,
    );
  }
  if (prev) {
    extra.push(
      <Link key="prev" to={prev}>
        <Button type="primary" icon={<BackwardOutlined />} />
      </Link>,
    );
  }
  if (next) {
    extra.push(
      <Link key="next" to={next}>
        <Button type="primary" icon={<ForwardOutlined />} />
      </Link>,
    );
  }
  return (
    <div>
      <PageHeader title={module.name} subTitle={module.subject} extra={extra}>
        <p>{module.description}</p>
      </PageHeader>
      {module.content && <ReactMarkdown source={module.content} />}
      {module.tests && <ModuleTests tests={module.tests} />}
      <ModalContent title={module.name} modalContent={module.modalContent} />
    </div>
  );
};

export default ModuleContent;
