import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Slider.styles.css';

const RangeSlider = ({ range, minValue, maxValue, onChange }) => {
  const [step, setStep] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const rangeLinePadding = 16;
    const calcStep =
      (ref.current.offsetWidth - rangeLinePadding) / ref.current.max;
    setStep(calcStep);
  }, []);

  return (
    <div className='w-11/12 relative py-4'>
      <input
        type='range'
        min={minValue}
        max={maxValue}
        value={range}
        className='appearance-none w-full h-1 rounded outline-none bg-primary bg-opacity-60 hover:bg-opacity-100 slider-thumb'
        onChange={(e) => onChange(e)}
        id='myRange'
        ref={ref}
      />
      <label
        htmlFor='myRange'
        className='text-primary font-bold absolute left-px -top-2 bubble'
        style={{
          transform: `translateX(${range * step}px)`,
        }}
      >
        DKK {range}
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
  range: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  onChange: PropTypes.func,
};
