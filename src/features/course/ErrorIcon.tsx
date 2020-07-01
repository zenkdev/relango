import { Tooltip } from 'antd';
import React from 'react';

import { WarningOutlined } from '@ant-design/icons';

const ErrorIcon: React.FC<{ errors?: string[] }> = ({ errors }) => {
  if (errors) {
    return (
      <Tooltip title={errors.join(' ')}>
        <WarningOutlined />
      </Tooltip>
    );
  }
  return null;
};

export default ErrorIcon;
