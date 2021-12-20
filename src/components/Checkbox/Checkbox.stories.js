import React, { useState } from 'react';
import Checkbox from './Checkbox.component';
import './Checkbox.styles.css';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
};

const Template = () => {
  const data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const [day, setDay] = useState({
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });

  const onChangeHandle = (value, checked) => {
    setDay((e) => {
      const selectedDay = e;
      selectedDay[value] = checked;
      return { ...selectedDay };
    });
  };

  return (
    <>
      <div
        className={`grid grid-cols-5 gap-y-6 w-4/6 h-28 px-4 border-0 rounded-lg py-6 bg-secondary bg-opacity-70 text-white`}
      >
        <Checkbox
          data={data}
          updatedState={day}
          onChange={onChangeHandle}
          checkBgColor={'bg-primary'}
        />
      </div>
    </>
  );
};

export const CheckboxComponent = Template.bind({});
