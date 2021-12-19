import React, { useState, useEffect, useRef } from 'react';
import './Slider.styles.css';

const RangeSlider = ({ value, onChange }) => {
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
        class={`appearance-none w-full h-1 rounded outline-none bg-primary bg-opacity-60 hover:bg-opacity-100 slider-thumb `}
        onChange={onChangeHandle}
        id='myRange'
        ref={ref}
      />
      <label
        htmlFor='myRange'
        class={`text-primary font-bold absolute left-px -top-2 bubble`}
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
