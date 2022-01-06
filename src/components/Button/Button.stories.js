import React from 'react';
import Button from './Button.component';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    size: {
      control: { type: 'radio', options: ['sm', 'lg'] },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template = ({ label, size, onClick, disabled }) => {
  return (
    <Button label={label} size={size} onClick={onClick} disabled={disabled} />
  );
};

export const Base = Template.bind({});

Base.args = {
  label: 'Click me',
  size: 'lg',
  onClick: () => {},
  disabled: false,
};
