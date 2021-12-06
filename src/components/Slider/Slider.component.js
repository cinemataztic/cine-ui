import React, { useState, useEffect, useRef } from 'react';
import './Slider.styles.css';

const RangeSlider = ({}) => {
  const [range, setRange] = useState(50);
  const [step, setStep] = useState(0);
  const ref = useRef(null);

  const onChangeSliderHandle = (e) => {
    setRange(e.target.value);
  };

  useEffect(() => {
    const rangeLinePadding = 16;
    const calcStep =
      (ref.current.offsetWidth - rangeLinePadding) / ref.current.max;
    console.log(ref);
    setStep(calcStep);
  }, []);

  return (
    <div class={`w-3/4 relative py-4`}>
      <input
        type='range'
        min='1'
        max='5000'
        value={range}
        class={`appearance-none w-full h-1 rounded outline-none bg-primary  bg-opacity-60 hover:bg-opacity-100 slider-thumb`}
        onChange={onChangeSliderHandle}
        id='myRange'
        ref={ref}
      />
      <label
        htmlFor='myRange'
        class={`text-primary font-bold absolute left-px -top-2 bubble`}
        style={{
          transform: `translateX(${range * step}px)`,
        }}
      >
        DKK {range}
      </label>
      <div class={`flex justify-between py-2`}>
        <div>DKK 1</div>
        <div>DKK 5000</div>
      </div>
    </div>
  );
};

export default RangeSlider;
