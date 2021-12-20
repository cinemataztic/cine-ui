import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './Slider.styles.css';

const RangeSlider = ({ value, onChange, bgColor, textColor }) => {
  const [step, setStep] = useState(0);
  const ref = useRef(null);

  const onChangeHandle = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  useEffect(() => {
    const rangeLinePadding = 16;
    const calcStep =
      (ref.current.offsetWidth - rangeLinePadding) / ref.current.max;
    setStep(calcStep);
  }, []);

  return (
    <div class={`w-3/4 relative py-4`}>
      <input
        type='range'
        min={value.minValue}
        max={value.maxValue}
        value={value.defaultValue}
        class={`appearance-none w-full h-1 rounded outline-none ${bgColor} bg-opacity-60 hover:bg-opacity-100 slider-thumb `}
        onChange={onChangeHandle}
        id='myRange'
        ref={ref}
      />
      <label
        htmlFor='myRange'
        class={`${textColor} font-bold absolute left-px -top-2 bubble`}
        style={{
          transform: `translateX(${value.defaultValue * step}px)`,
        }}
      >
        DKK {value.defaultValue}
      </label>
      <div class={`flex justify-between py-2`}>
        <div>DKK {value.minValue}</div>
        <div>DKK {value.maxValue}</div>
      </div>
    </div>
  );
};

export default RangeSlider;

RangeSlider.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
