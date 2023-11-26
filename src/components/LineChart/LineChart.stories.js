import React from 'react';
import LineChart from './LineChart.component';

export default {
  title: 'Charts/LineChart',
  component: LineChart,
};

const Template = () => {
  const data = [
    {
      name: 'Nov 16',
      'Spot 1.1': 7,
      'Spot 1.2': 8,
      'Spot 2.1': 9,
      'Spot 2.2': 11,
      'Spot 3': 22,
    },
    {
      name: 'Nov 17',
      'Spot 1.1': 20,
      'Spot 1.2': 21,
      'Spot 2.1': 15,
      'Spot 2.2': 17,
      'Spot 3': 23,
    },
    {
      name: 'Nov 18',
      'Spot 1.1': 6,
      'Spot 1.2': 7,
      'Spot 2.1': 10,
      'Spot 2.2': 12,
      'Spot 3': 24,
    },
    {
      name: 'Nov 19',
      'Spot 1.1': 18,
      'Spot 1.2': 19,
      'Spot 2.1': 7,
      'Spot 2.2': 9,
      'Spot 3': 25,
    },
    {
      name: 'Nov 20',
      'Spot 1.1': 10,
      'Spot 1.2': 11,
      'Spot 2.1': 17,
      'Spot 2.2': 19,
      'Spot 3': 26,
    },
    {
      name: 'Nov 21',
      'Spot 1.1': 5,
      'Spot 1.2': 6,
      'Spot 2.1': 10,
      'Spot 2.2': 12,
      'Spot 3': 27,
    },
  ];

  return (
    //Give a fixed height for the parent container which wraps the responsive container of the line chart, in order to avoid non-rendering issues.
    <div className="w-4/6 h-96">
      <LineChart data={data} />
    </div>
  );
};

export const Base = Template.bind({});
