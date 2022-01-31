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
    variant: {
      control: { type: 'radio', options: ['primary', 'secondary', 'tertiary'] },
    },
    appearance: {
      control: { type: 'radio', options: ['default', 'outline'] },
    },
    danger: {
      control: { type: 'boolean' },
    },
    size: {
      control: { type: 'radio', options: ['sm', 'lg'] },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const Template = ({
  type,
  label,
  size,
  onClick,
  disabled,
  variant,
  appearance,
  danger,
}) => {
  return (
    <Button
      type={type}
      label={label}
      size={size}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      appearance={appearance}
      danger={danger}
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
  variant: 'tertiary',
  appearance: 'outline',
  danger: false,
};
