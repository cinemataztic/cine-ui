import React from 'react';
import Button from './Button.component';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      control: { type: 'radio', options: ['button', 'submit', 'reset'] },
    },
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

const Template = ({ type, label, size, onClick, disabled }) => {
  return (
    <Button
      type={type}
      label={label}
      size={size}
      onClick={onClick}
      disabled={disabled}
    />
  );
};

export const Base = Template.bind({});

Base.args = {
  type: 'button',
  label: 'Click me',
  size: 'lg',
  onClick: () => {},
  disabled: false,
};
