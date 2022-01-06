import React, { useState } from 'react';
import CheckboxComponent from './Checkbox.component';
import './Checkbox.styles.css';

export default {
  title: 'Forms/Checkbox',
  component: CheckboxComponent,
};

const Template = () => {
  const [checked, setChecked] = useState(false);
  return (
    <CheckboxComponent
      checked={checked}
      label="Test me!"
      onChange={(e) => {
        setChecked(e.target.checked);
      }}
    />
  );
};

export const Checkbox = Template.bind({});
