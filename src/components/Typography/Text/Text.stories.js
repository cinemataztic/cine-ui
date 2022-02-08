import React from 'react';

import Text from './Text.component';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'radio', options: ['base', 'secondary', 'label'] },
    },
    color: {
      control: { type: 'radio', options: ['default', 'primary'] },
    },
  },
};

const Template = ({ children, variant, color, emphasized, subtle }) => {
  return (
    <Text
      variant={variant}
      color={color}
      emphasized={emphasized}
      subtle={subtle}
    >
      {children}
    </Text>
  );
};

export const Base = Template.bind({});

Base.args = {
  children: 'Text text',
  variant: 'base',
  color: 'default',
  subtle: false,
};
