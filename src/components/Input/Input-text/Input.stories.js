import React, { useState } from 'react';
import Input from './Input.component';

export default {
  title: 'Forms/Input',
  component: Input,
};

const Template = ({ type, placeholder, disabled }) => {
  const [text, setText] = useState('');

  const onChangeHandle = (e) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <Input
      type={type}
      placeholder={placeholder}
      id={'1'}
      value={text}
      onChange={onChangeHandle}
      disabled={disabled}
    />
  );
};

export const Base = Template.bind({});

Base.args = {
  type: 'text',
  placeholder: 'Enter text here',
  disabled: false,
};
