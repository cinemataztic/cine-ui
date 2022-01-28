import React from 'react';

import Heading from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
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
    <Heading level={level} color={color}>
      {children}
    </Heading>
  );
};

export const Base = Template.bind({});

Base.args = {
  children: 'Heading text',
  level: 1,
  color: 'primary',
};
