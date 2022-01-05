import React from 'react';
import { RadioGroup } from '@headlessui/react';
import PropTypes from 'prop-types';

import './RadioGroup.styles.css';

const RadioButton = ({ options, value, onChange }) => {
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      className='w-full grid grid-rows-1 grid-flow-col gap-0'
    >
      {options.map((option, index) => {
        return (
          <RadioGroup.Option
            value={option.value}
            className='flex cursor-pointer'
            key={option.value}
          >
            {({ checked }) => (
              <>
                <div
                  className={`
                      w-5 h-5 rounded-full border-2 border-gray-500 bg-white mr-2 grid place-content-center
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
                <span>{option.value}</span>
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
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
