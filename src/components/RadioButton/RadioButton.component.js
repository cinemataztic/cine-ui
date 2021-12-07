import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import Checkbox from '../Checkbox/Checkbox.component';
import './RadioButton.styles.css';

const RadioButton = ({}) => {
  const [days, setdays] = useState('');

  const data = [
    {
      daysValue: 'All days',
    },
    {
      daysValue: 'Weekends',
    },
    {
      daysValue: 'Week days',
    },
    {
      daysValue: 'Custom',
    },
  ];

  console.log(days);

  return (
    <>
      <RadioGroup
        value={days}
        onChange={setdays}
        className={`w-1/2 grid grid-rows-1 grid-flow-col gap-0`}
      >
        {data.map((data, index) => {
          return (
            <RadioGroup.Option
              value={data.daysValue}
              className={`flex`}
              key={index}
            >
              {({ checked }) => (
                <>
                  <div
                    className={`
                    ${`w-5 h-5 rounded-full border-2 border-gray-500 bg-white mr-2 grid place-content-center`}
                    ${checked ? `border-primary` : ``}`}
                  >
                    <div
                      className={
                        checked
                          ? `w-4 h-4 border-3 border-gray-600 rounded-full bg-primary `
                          : ``
                      }
                    />
                  </div>
                  <span>{data.daysValue}</span>
                </>
              )}
            </RadioGroup.Option>
          );
        })}
      </RadioGroup>
      <div className={`mt-6`}>{days === 'Custom' && <Checkbox />}</div>
    </>
  );
};

export default RadioButton;
