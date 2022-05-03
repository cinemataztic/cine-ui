import React from 'react';
import './HalfPieChart.styles.css';
import PropTypes from 'prop-types';

const HalfPieChart = ({ progress, label, height }) => {
  return (
    <>
      <svg viewBox="0 0 100 53" style={{ height: `${height}vh` }}>
        <path
          className="stroke-halfPieChart stroke-6"
          strokeLinecap="round"
          d="M3,50 A20,20 0 1,1  97,50" // 3px padding on each side to allow for 6px stroke width
          fill="none"
        />
        <path
          id="blue"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="147.66" // half of the circumsference (2*pi*47^2)
          strokeDashoffset="147.66" //  half of the circumsference (2*pi*47^2)
          className={`stroke-6 stroke-pieChart animate-dash`}
          d="M3,50 A20,20 0 1,1  97,50" // 3px padding on each side to allow for 6px stroke width
          style={{ strokeDashoffset: 147.66 * (1 - `${progress}`) }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#707070"
          className="text-xxs"
        >
          {label}
        </text>
        <text
          x="50%"
          y="80%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          className="text-xs"
        >
          {Math.round(progress * 100)}
        </text>
        <text
          x="63%"
          y="80%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#707070"
          className="text-xxs"
        >
          %
        </text>
      </svg>
    </>
  );
};

export default HalfPieChart;

HalfPieChart.propTypes = {
  label: PropTypes.string.isRequired,
  progress: PropTypes.number,
  height: PropTypes.number,
};

HalfPieChart.defaultProps = {
  label: 'Goal',
  progress: 0.5,
  height: 50,
};
