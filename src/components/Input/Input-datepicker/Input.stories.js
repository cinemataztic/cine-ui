import React, { useState } from 'react';
import DateInput from './Input.component';

export default {
  title: 'Forms/Input',
  component: DateInput,
};

const Template = () => {
  const [date, setDate] = useState(null);

  const onDateChangeHandle = (value) => {
    setDate(value);
  };

  return (
    <DateInput
      value={date}
      onChange={onDateChangeHandle}
      placeholder={'From'}
      id={'1'}
    />
  );
};

export const Date = Template.bind({});
