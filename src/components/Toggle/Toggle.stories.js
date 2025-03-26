import React from 'react';
import Toggle from './Toggle.component';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    enabledLabel: { control: 'text' },
    disabledLabel: { control: 'text' },
    size: { control: { type: 'radio', options: ['sm', 'lg'] } },
    disabled: { control: 'boolean' },
    onChange: { action: 'toggled' },
  },
};

const Template = (args) => <Toggle {...args} />;

export const Base = Template.bind({});
Base.args = {
  enabledLabel: 'On',
  disabledLabel: 'Off',
  size: 'lg',
  disabled: false,
};
