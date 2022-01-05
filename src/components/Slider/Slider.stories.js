import React, { useState } from 'react';
import Slider from './Slider.component';

export default {
  title: 'Example/Slider',
  component: Slider,
};

const Template = () => {
  const [range, setRange] = useState(1000);

  const onChangeSliderHandle = (e) => {
    const { value } = e.target;
    setRange(Number(value));
  };

  return (
    <Slider
      value={range}
      valueLabel={'Dkk'}
      minValue={1}
      maxValue={5000}
      onChange={onChangeSliderHandle}
    />
  );
};

export const SliderComponent = Template.bind({});
