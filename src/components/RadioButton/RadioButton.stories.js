import React, { useState } from 'react';
import RadioButton from './RadioButton.component';

export default {
  title: 'Example/RadioButton',
  component: RadioButton,
};

const Template = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const data = ['All days', 'Weekends', 'Week days', 'Custom'];

  console.log(selectedOption);

  return (
    <RadioButton
      data={data}
      value={selectedOption}
      updatedState={setSelectedOption}
      checkedbgColor={'primary'}
      borderColor={'border-gray-600'}
    />
  );
};

export const RadioButtonComponent = Template.bind({});
