import React from 'react';
import Notification from './Notification.component';

export default {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    text: {
      control: { type: 'text' },
    },
    type: {
      control: { type: 'radio', options: ['info', 'warning'] },
    },
  },
};

const Template = ({ title, text, type, icon }) => {
  return <Notification title={title} text={text} type={type} icon={icon} />;
};

export const Base = Template.bind({});

Base.args = {
  title: 'Upcoming feature - more custom options',
  text: 'Soon we will enable the possibility for you to specify your target audience even more by selecting branding, device, online behaviour, gender, age, etc.',
  type: 'info',
};
