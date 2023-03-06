import React, { useState } from 'react';
import RadioGroup from './RadioGroup.component';
import { useForm, Controller } from 'react-hook-form';

import './RadioGroup.styles.css';

export default {
  title: 'Forms/RadioGroup',
  component: RadioGroup,
};

const Template = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const {
    control,
    formState: { touchedFields, dirtyFields },
  } = useForm();

  const options = [
    { label: 'Label 1', value: 'All days', disabled: false },
    { label: 'Label 2', value: 'Weekends', disabled: false },
    { label: 'Label 3', value: 'Week days', disabled: true },
    { label: 'Label 4', value: 'Custom', disabled: true },
  ];


  return (
    // <RadioGroup
    //   options={options}
    //   value={selectedOption}
    //   onChange={setSelectedOption}
    // />
    <Controller
      name="radioGroupValue"
      control={control}
      render={({ field }) => (
        <RadioGroup options={options} {...field} ref={null} />
      )}
    />
  );
};

export const Base = Template.bind({});
