import React, { useState } from 'react';
import InputField from './Input.component';

export default {
  title: 'Example/InputField',
  component: InputField,
};

const Template = () => {
  const [date, setDate] = useState(null);

  const onDateChangeHandle = (value) => {
    setDate(value);
  };

  return (
    <InputField
      value={date}
      onChange={onDateChangeHandle}
      placeholder={'From'}
      id={'1'}
    />
  );
};

export const Input = Template.bind({});
