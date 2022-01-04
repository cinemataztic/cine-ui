import React, { useState } from 'react';
import InputField from './Input.component';

export default {
  title: 'Example/InputField',
  component: InputField,
};

const Template = ({ type, placeholder }) => {
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
    />
  );
};

export const InputComponent = Template.bind({});

InputComponent.args = {
  type: 'text',
  placeholder: 'Enter text here',
};
