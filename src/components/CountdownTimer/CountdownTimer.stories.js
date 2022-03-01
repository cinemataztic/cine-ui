import React from 'react';
import CountdownTimer from './CountdownTimer.component';

export default {
  title: 'Components/CountdownTimer',
  component: CountdownTimer,
};

const Template = () => {
  return (
    <div className="text-secondary w-1/2 h-auto bg-secondary rounded-xl p-4">
      <CountdownTimer
        startDate={'Feb 28, 2022 22:37:25'}
        endDate={'Mar 28, 2022 22:37:25'}
      />
    </div>
  );
};

export const Base = Template.bind({});
