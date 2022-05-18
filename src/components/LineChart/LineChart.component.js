import React from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import './LineChart.styles.css';
import PropTypes from 'prop-types';

const lineColors = ['#3AC1C8', '#CE0EA3', '#F92107'];

const LineChart = ({ data }) => {
  const formattingLegendText = (value) => {
    return <span className="text-default ml-1.5">{value}</span>;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsLineChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          horizontal={true}
          vertical=""
          className="stroke-horizontalLine"
        />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          padding={{ left: 25 }}
          tickMargin={22}
          stroke="white"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={22}
          stroke="white"
        />
        <Tooltip cursor={false} />
        <Legend
          formatter={formattingLegendText}
          iconType="circle"
          iconSize={10}
          wrapperStyle={{ position: 'relative', marginTop: '10px' }}
        />
        <Line type="monotone" dataKey="Spot 1" stroke="#FFCE00" dot={false} />
        {Object.keys(data[0])
          .splice(2)
          .map((spot, index) => {
            return (
              <Line
                key={spot}
                type="monotone"
                dataKey={spot}
                stroke={lineColors[index]}
                dot={false}
              />
            );
          })}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;

LineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      'Spot 1': PropTypes.number.isRequired,
      'Spot 2': PropTypes.number,
    }),
  ).isRequired,
};
