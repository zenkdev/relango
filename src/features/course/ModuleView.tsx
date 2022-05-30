import { Button, PageHeader } from 'antd';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, useLocation } from 'react-router-dom';

import { BackwardOutlined, ForwardOutlined, InfoOutlined } from '@ant-design/icons';

import { useAppSelector } from '../../hooks';
import ModalContent from './ModalContent';
import ModuleTests from './ModuleTests';
import { selectCurrentModule } from './selectors';

interface ModuleViewProps {
  moduleId?: string;
}

function ModuleView({ moduleId }: ModuleViewProps) {
  const module = useAppSelector(state => selectCurrentModule(state, moduleId));
  const { pathname } = useLocation();
  const extra = React.useMemo(() => {
    const extra: any[] = [];
    if (module?.modalContent) {
      extra.push(
        <Link key="modal" to={{ pathname, hash: 'modal' }}>
          <Button type="primary" icon={<InfoOutlined />} />
        </Link>,
      );
    }
    if (module?.prev) {
      extra.push(
        <Link key="prev" to={module.prev}>
          <Button type="primary" icon={<BackwardOutlined />} />
        </Link>,
      );
    }
    if (module?.next) {
      extra.push(
        <Link key="next" to={module.next}>
          <Button type="primary" icon={<ForwardOutlined />} />
        </Link>,
      );
    }
    return extra;
  }, [module, pathname]);

  if (!module) {
    return null;
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

export default ModuleView;
