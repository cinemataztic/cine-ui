import React from 'react';
import { RadioGroup } from '@headlessui/react';
import PropTypes from 'prop-types';
import './RadioButton.styles.css';

const RadioButton = ({
  data,
  value,
  updatedState,
  checkedbgColor,
  borderColor,
}) => {
  return (
    <>
      <RadioGroup
        value={value}
        onChange={updatedState}
        className={`w-full grid grid-rows-1 grid-flow-col gap-0`}
      >
        {data.map((item, index) => {
          return (
            <RadioGroup.Option value={item} className={`flex`} key={index}>
              {({ checked }) => (
                <>
                  <div
                    className={`
                    ${`w-5 h-5 rounded-full border-2 border-gray-500 bg-white mr-2 grid place-content-center`}
                    ${checked ? `border-${checkedbgColor}` : ``}`}
                  >
                    <div
                      className={
                        checked
                          ? `w-4 h-4 border-3 ${borderColor} rounded-full bg-${checkedbgColor} `
                          : ``
                      }
                    />
                  </div>
                  <span>{item}</span>
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
  data: PropTypes.array,
  value: PropTypes.string,
  updatedState: PropTypes.func,
  checkedbgColor: PropTypes.string,
  borderColor: PropTypes.string,
};
