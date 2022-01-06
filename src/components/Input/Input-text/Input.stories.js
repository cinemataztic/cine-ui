import React, { useState } from 'react';
import InputField from './Input.component';

export default {
  title: 'cine-ui/Input',
  component: InputField,
};

const Template = ({ type, placeholder, disabled }) => {
  const [text, setText] = useState('');

  const onChangeHandle = (e) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <InputField
      type={type}
      placeholder={placeholder}
      id={'1'}
      value={text}
      onChange={onChangeHandle}
      disabled={disabled}
    />
  );
};

export const Input = Template.bind({});

Input.args = {
  type: 'text',
  placeholder: 'Enter text here',
  disabled: false,
};
