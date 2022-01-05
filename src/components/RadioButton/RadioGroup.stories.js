import React, { useState } from 'react';
import RadioGroup from './RadioGroup.component';

export default {
  title: 'Example/RadioGroup',
  component: RadioGroup,
};

const Template = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    { label: 'Label 1', value: 'All days' },
    { label: 'Label 2', value: 'Weekends' },
    { label: 'Label 3', value: 'Week days' },
    { label: 'Label 4', value: 'Custom' },
  ];

  console.log(selectedOption);

  return (
    <RadioGroup
      options={options}
      value={selectedOption}
      onChange={setSelectedOption}
    />
  );
};

export const RadioButtonComponent = Template.bind({});
