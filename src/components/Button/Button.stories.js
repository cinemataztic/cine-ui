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
    color: {
      control: { type: 'radio', options: ['primary', 'secondary'] },
    },
    variant: {
      control: { type: 'radio', options: ['solid', 'outlined', 'text'] },
    },
    size: {
      control: { type: 'radio', options: ['sm', 'lg'] },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template = ({ type, label, size, onClick, disabled, color, variant }) => {
  return (
    <Button
      type={type}
      label={label}
      size={size}
      onClick={onClick}
      disabled={disabled}
      color={color}
      variant={variant}
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
  color: 'primary',
  variant: 'solid',
};
