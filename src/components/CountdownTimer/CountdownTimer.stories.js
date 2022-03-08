import React from 'react';
import CountdownTimer from './CountdownTimer.component';
import dayjs from 'dayjs';

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
    <div className="text-secondary w-fit h-auto bg-secondary rounded-xl p-4 pr-8  ">
      <CountdownTimer startDate={startDate} endDate={endDate} />
    </div>
  );
};

export const Base = Template.bind({});

Base.args = {
  startDate: dayjs().format('MMM DD, YYYY HH:mm:ss'),
  endDate: dayjs().add(30, 'days').format('MMM DD, YYYY HH:mm:ss'),
};
