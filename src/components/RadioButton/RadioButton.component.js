import React from 'react';
import { RadioGroup } from '@headlessui/react';
import PropTypes from 'prop-types';
import './RadioButton.styles.css';

const RadioButton = ({
  options,
  value,
  onChange,
  checkedbgColor,
  borderColor,
}) => {
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      className={`w-full grid grid-rows-1 grid-flow-col gap-0`}
    >
      {options.map((option, index) => {
        return (
          <RadioGroup.Option
            value={option}
            className={`flex cursor-pointer`}
            key={index}
          >
            {({ checked }) => (
              <>
                <div
                  className={`
                      w-5 h-5 rounded-full border-2 border-gray-500 bg-white mr-2 grid place-content-center
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
                <span>{option}</span>
              </>
            )}
          </RadioGroup.Option>
        );
      })}
    </RadioGroup>
  );
};

export default RadioButton;

RadioButton.propTypes = {
  options: PropTypes.array.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  checkedbgColor: PropTypes.string,
  borderColor: PropTypes.string,
};
