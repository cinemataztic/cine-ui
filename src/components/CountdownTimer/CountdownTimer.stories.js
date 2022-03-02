import React from 'react';
import CountdownTimer from './CountdownTimer.component';

export default {
  title: 'Components/CountdownTimer',
  component: CountdownTimer,
  argTypes: {
    startDate: {
      control: { type: 'text' },
    },
    endDate: {
      control: { type: 'text' },
    },
  },
};

const Template = ({ startDate, endDate }) => {
  return (
    <div className="text-secondary w-fit h-auto bg-secondary rounded-xl p-4 pr-8 ">
      <CountdownTimer startDate={startDate} endDate={endDate} />
    </div>
  );
};

export const Base = Template.bind({});

Base.args = {
  startDate: 'Feb 28, 2022 22:37:25',
  endDate: 'Mar 28, 2022 22:37:25',
};
