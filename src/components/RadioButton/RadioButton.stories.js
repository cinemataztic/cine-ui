import React, { useState } from 'react';
import RadioButton from './RadioButton.component';

export default {
  title: 'Example/RadioButton',
  component: RadioButton,
};

const Template = () => {
  const [days, setdays] = useState('');

  const data = [
    {
      daysValue: 'All days',
    },
    {
      daysValue: 'Weekends',
    },
    {
      daysValue: 'Week days',
    },
    {
      daysValue: 'Custom',
    },
  ];

  return <RadioButton data={data} value={days} updatedState={setdays} />;
};

export const Radio = Template.bind({});
