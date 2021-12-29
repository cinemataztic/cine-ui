import React from 'react';
import Button from './Button.component';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    backgroundColor: { control: { type: 'color' } },
    color: { control: { type: 'color' } },
    size: {
      control: { type: 'radio', options: ['xs', 'sm', 'md', 'lg'] },
    },
  },
};

const Template = ({ label, backgroundColor, color, size, onClick }) => {
  return (
    <Button
      label={label}
      backgroundColor={backgroundColor}
      color={color}
      size={size}
      onClick={onClick}
      disabled={false}
    />
  );
};

export const ButtonComponent = Template.bind({});

ButtonComponent.args = {
  backgroundColor: 'bg-primary',
  label: 'Click me',
  color: 'text-textgray',
  size: 'sm',
  onClick: () => {},
};
