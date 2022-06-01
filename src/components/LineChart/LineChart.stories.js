import React from 'react';
import LineChart from './LineChart.component';

export default {
  title: 'Components/Chart',
  component: LineChart,
};

const Template = () => {
  const data = [
    {
      name: 'Nov 16',
      'Spot 1': 7,
      'Spot 2': 9,
    },
    {
      name: 'Nov 17',
      'Spot 1': 20,
      'Spot 2': 15,
    },
    {
      name: 'Nov 18',
      'Spot 1': 6,
      'Spot 2': 0,
    },
    {
      name: 'Nov 19',
      'Spot 1': 18,
      'Spot 2': 7,
    },
    {
      name: 'Nov 20',
      'Spot 1': 10,
      'Spot 2': 17,
    },
    {
      name: 'Nov 21',
      'Spot 1': 5,
      'Spot 2': 10,
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
