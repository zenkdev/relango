import { Button, PageHeader } from 'antd';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useLocation } from 'react-router-dom';

import { BackwardOutlined, ForwardOutlined, InfoOutlined } from '@ant-design/icons';

import { Module } from '../../models';
import ModuleTests from './ModuleTests';
import ModalContent from './ModalContent';

interface ModuleContentProps {
  module: Module;
  prev?: string;
  next?: string;
}

function ModuleContent({ module, prev, next }: ModuleContentProps) {
  const { pathname } = useLocation();
  const extra: any[] = [];
  if (module.modalContent) {
    extra.push(
      <Link key="modal" to={{ pathname, hash: 'modal' }}>
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
      {module.content && <ReactMarkdown>{module.content}</ReactMarkdown>}
      {module.tests && <ModuleTests moduleId={module.id} tests={module.tests} />}
      <ModalContent title={module.name} modalContent={module.modalContent} />
    </div>
  );
}

export default ModuleContent;
