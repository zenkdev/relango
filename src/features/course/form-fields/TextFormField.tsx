import { Typography } from 'antd';

import { TextField } from '../../../models';

interface TextFormFieldProps {
  field: TextField;
}

function TextFormField({ field }: TextFormFieldProps) {
  const style = field.style ?? {};
  if (field.italic) {
    style.fontStyle = 'italic';
  }

  return (
    <Typography.Text strong={field.bold} style={style}>
      {field.value}
    </Typography.Text>
  );
}

export default TextFormField;
