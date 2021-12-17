import React, { useState } from 'react';
import './Checkbox.styles.css';

const Checkbox = ({}) => {
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

  const onCheckHandle = (e) => {
    const { value, checked } = e.target;

    setDay((e) => {
      const selectedDay = e;
      selectedDay[value] = checked;
      return { ...selectedDay };
    });
  };

  return (
    <>
      <div
        className={`grid grid-cols-5 gap-y-6 w-5/6 h-28 px-4 border-0 rounded-lg py-6 bg-secondary bg-opacity-70 text-white`}
      >
        {data.map((data, index) => {
          return (
            <label key={index} htmlFor={data.name} className={`relative`}>
              <input
                type='checkbox'
                id={data.name}
                name={data.name}
                value={data.day}
                checked={day[data.day]}
                onChange={onCheckHandle}
                className={`appearance-none h-5 w-5 bg-white rounded-sm`}
              />
              <img
                src='https://img.icons8.com/material-outlined/24/000000/checkmark--v2.png'
                className={`h-5 absolute top-0 invisible check-1`}
                alt='tick'
              />
              <span className={`px-2 absolute -top-px`}>{data.day} </span>
            </label>
          );
        })}
      </div>
      {/* <div>
        info:
        {Object.keys(day)
          .filter((x) => day[x] === true)
          .map((data, index) => {
            return <p key={index}> {data}</p>;
          })}
      </div> */}
    </>
  );
};

export default Checkbox;
