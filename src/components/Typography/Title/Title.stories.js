import React from 'react';

import Title from './Title.component';

export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    level: {
      control: { type: 'radio', options: [1, 2, 3, 4] },
    },
    color: {
      control: { type: 'radio', options: ['primary', 'secondary', 'accent1'] },
    },
  },
};

const Template = ({ children, level, color }) => {
  return (
    <Title level={level} color={color}>
      {children}
    </Title>
  );
};

export const Base = Template.bind({});

Base.args = {
  children: 'Title text',
  level: 1,
  color: 'primary',
};
