import { Tooltip } from 'antd';
import React from 'react';

import { WarningOutlined } from '@ant-design/icons';

function ErrorIcon({ errors }: { errors?: string[] }) {
  if (errors) {
    return (
      <Tooltip title={errors.join(' ')}>
        <WarningOutlined />
      </Tooltip>
    );
  }
  return null;
}

export default ErrorIcon;
