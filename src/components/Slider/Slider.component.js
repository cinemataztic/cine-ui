import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './Slider.styles.css';

const RangeSlider = ({ value, valueLabel, minValue, maxValue, onChange }) => {
  const [step, setStep] = useState(0);
  const rangeInputRef = useRef(null);

  useEffect(() => {
    const rangeLinePadding = 16;
    const calcStep =
      (rangeInputRef.current.offsetWidth - rangeLinePadding) /
      rangeInputRef.current.max;
    setStep(calcStep);
  }, []);

  return (
    <div className='w-11/12 relative py-4'>
      <input
        type='range'
        min={minValue}
        max={maxValue}
        value={value}
        className='appearance-none w-full h-1 rounded outline-none bg-primary bg-opacity-60 hover:bg-opacity-100 slider-thumb'
        onChange={onChange}
        id='myRange'
        ref={rangeInputRef}
      />
      <label
        htmlFor='myRange'
        className='text-primary font-bold absolute left-px -top-2'
        style={{
          transform: `translateX(${value * step}px)`,
        }}
      >
        {valueLabel} {value}
      </label>
      <div className='flex justify-between py-2'>
        <div>DKK {minValue}</div>
        <div>DKK {maxValue}</div>
      </div>
    </div>
  );
};

export default RangeSlider;

RangeSlider.propTypes = {
  value: PropTypes.number,
  valueLabel: PropTypes.string,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  onChange: PropTypes.func,
};
