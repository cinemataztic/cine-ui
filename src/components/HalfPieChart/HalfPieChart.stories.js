import React from 'react';
import HalfPieChart from './HalfPieChart.component';

export default {
  title: 'Charts/HalfPieChart',
  component: HalfPieChart,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    progress: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
    },
    height: {
      control: { type: 'number' },
    },
  },
};

const Template = ({ label, progress, height }) => {
  return <HalfPieChart label={label} progress={progress} height={height} />;
};

export const Base = Template.bind({});

Base.args = {
  label: 'Goal',
  progress: 0.8,
  height: 50,
};
