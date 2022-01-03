import React, { useState } from 'react';
import RadioButton from './RadioButton.component';

export default {
  title: 'Example/RadioButton',
  component: RadioButton,
};

const Template = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = ['All days', 'Weekends', 'Week days', 'Custom'];

  return (
    <RadioButton
      options={options}
      value={selectedOption}
      onChange={setSelectedOption}
      checkedbgColor={'primary'}
      borderColor={'border-gray-600'}
    />
  );
};

export const RadioButtonComponent = Template.bind({});
