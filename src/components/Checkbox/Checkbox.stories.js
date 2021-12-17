import React, { useState } from 'react';
import Checkbox from './Checkbox.component';

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
      <Checkbox
        data={data}
        updatedState={day}
        onChange={onChangeHandle}
        checkbgColor={'bg-primary'}
      />
      <div>
        info:
        {Object.keys(day)
          .filter((x) => day[x] === true)
          .map((data, index) => {
            return <p key={index}> {data}</p>;
          })}
      </div>
    </>
  );
};

export const Checkboxs = Template.bind({});
