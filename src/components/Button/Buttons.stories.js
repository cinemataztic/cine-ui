import React from 'react';
import Buttons from './Buttons.component';

export default {
  title: 'Example/Button',
  component: Buttons,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  argTypes: {
    color: { control: 'color' },
  },
  height: {
    control: { type: 'number' },
  },
  width: {
    control: { type: 'number' },
  },
  fontSize: {
    control: { type: 'number' },
  },
};

const Template = (args) => <Buttons {...args} />;

export const Button = Template.bind({});

Button.args = {
  backgroundColor: '#3AC1C8',
  label: 'Click me',
  color: 'rgba(0, 0, 0, 60);',
  height: 40,
  width: 300,
  fontSize: 18,
  onClick: () => {},
};
