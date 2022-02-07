import React from 'react';
import Label from './Label.component';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
  },
};

const Template = ({ label }) => {
  return <Label label={label} />;
};

export const Base = Template.bind({});

Base.args = {
  label: 'Label component',
};
