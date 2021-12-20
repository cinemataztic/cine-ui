import React, { useState } from 'react';
import RangeSlider from './Slider.component';

export default {
  title: 'Example/Slider',
  component: RangeSlider,
};

const Template = () => {
  const [range, setRange] = useState({
    defaultValue: 1000,
    minValue: 1,
    maxValue: 5000,
  });

  const onChangeSliderHandle = (value) => {
    setRange((e) => {
      const selectedRange = e;
      selectedRange['defaultValue'] = value;
      return { ...selectedRange };
    });
  };

  return (
    <>
      <RangeSlider
        value={range}
        onChange={onChangeSliderHandle}
        bgColor={'bg-primary'}
        textColor={'text-primary'}
      />
    </>
  );
};

export const Slider = Template.bind({});
