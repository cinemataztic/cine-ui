import React, { useState } from 'react';
import InputField from './Input.component';

export default {
  title: 'Example/InputField',
  component: InputField,
};

const Template = ({ type, placeholder }) => {
  const [text, setText] = useState('');

  const onChangeHandle = (value) => {
    setText(value);
  };

  return (
    <InputField
      type={type}
      placeholder={placeholder}
      value={text}
      onChange={onChangeHandle}
    />
  );
};

export const Input1 = Template.bind({});

Input1.args = {
  type: 'text',
  placeholder: 'Enter text here',
};
