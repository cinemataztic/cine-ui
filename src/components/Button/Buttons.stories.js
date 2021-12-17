import React from 'react';
import Buttons from './Buttons.component';

export default {
  title: 'Example/Button',
  component: Buttons,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    backgroundColor: { control: { type: 'color' } },
    color: { control: { type: 'color' } },
    size: {
      control: { type: 'radio', options: ['xm', 'sm', 'md', 'lg'] },
    },
  },
};

const Template = ({ label, backgroundColor, color, size, onClick }) => {
  return (
    <Buttons
      label={label}
      backgroundColor={backgroundColor}
      color={color}
      size={size}
      onClick={onClick}
    />
  );
};

export const Button = Template.bind({});

Button.args = {
  backgroundColor: 'bg-primary',
  label: 'Click me',
  color: 'textgray',
  size: 'sm',
  onClick: () => {},
};
