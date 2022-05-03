import React from 'react';
import HalfPieChart from './HalfPieChart.component';

export default {
  title: 'Charts/HalfPieChart',
  component: HalfPieChart,
};

const Template = ({ label, progress, height }) => {
  return <HalfPieChart label={label} progress={progress} height={height} />;
};

export const Base = Template.bind({});

Base.args = {
  label: 'Goal',
  progress: 0.66,
  height: 50,
};
