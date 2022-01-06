import React from 'react';
import ButtonComponent from './Button.component';

export default {
  title: 'cine-ui/Button',
  component: ButtonComponent,
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
    <ButtonComponent
      label={label}
      size={size}
      onClick={onClick}
      disabled={disabled}
    />
  );
};

export const Button = Template.bind({});

Button.args = {
  label: 'Click me',
  size: 'lg',
  onClick: () => {},
  disabled: false,
};
