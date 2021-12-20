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
      bgColor={'bg-secondary'}
      textColor={'text-black'}
      height={'h-10'}
      width={'w-60'}
    />
  );
};

export const InputComponent = Template.bind({});

InputComponent.args = {
  type: 'text',
  placeholder: 'Enter text here',
};
