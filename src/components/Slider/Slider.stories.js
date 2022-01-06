import React, { useState } from 'react';
import SliderComponent from './Slider.component';

export default {
  title: 'Components/Slider',
  component: SliderComponent,
};

const Template = () => {
  const [range, setRange] = useState(1000);

  const onChangeSliderHandle = (e) => {
    const { value } = e.target;
    setRange(Number(value));
  };

  return (
    <div className="text-white">
      <SliderComponent
        value={range}
        valueLabel={'DKK'}
        minValue={1}
        maxValue={5000}
        onChange={onChangeSliderHandle}
      />
    </div>
  );
};

export const Slider = Template.bind({});
