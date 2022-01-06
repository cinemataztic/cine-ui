import React, { useState } from 'react';
import Checkbox from './Checkbox.component';
import './Checkbox.styles.css';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
};

const Template = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      label="Test me!"
      onChange={(e) => {
        setChecked(e.target.checked);
      }}
    />
  );
};

export const Base = Template.bind({});
