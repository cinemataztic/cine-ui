import React from 'react';
import { RadioGroup } from '@headlessui/react';
import PropTypes from 'prop-types';
import './RadioButton.styles.css';

const RadioButton = ({ data, value, updatedState }) => {
  return (
    <>
      <RadioGroup
        value={value}
        onChange={updatedState}
        className={`w-full grid grid-rows-1 grid-flow-col gap-0`}
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
    </>
  );
};

export default RadioButton;

RadioButton.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  updatedState: PropTypes.func,
};
