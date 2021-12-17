import React, { useState } from 'react';
import Checkbox from './Checkbox.component';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
};

const Template = () => {
  const data = [
    {
      name: 'day1',
      day: 'Mon',
    },
    {
      name: 'day2',
      day: 'Tue',
    },
    {
      name: 'day3',
      day: 'Wed',
    },
    {
      name: 'day4',
      day: 'Thu',
    },
    {
      name: 'day5',
      day: 'Fri',
    },
    {
      name: 'day6',
      day: 'Sat',
    },
    {
      name: 'day7',
      day: 'Sun',
    },
  ];

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
      <Checkbox data={data} day={day} onChange={onChangeHandle} />
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
