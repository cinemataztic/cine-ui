import React from 'react';
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react';
import PropTypes from 'prop-types';

import './RadioGroup.styles.css';

const RadioGroup = ({ options, value, onChange, className, onBlur }) => {
  return (
    <HeadlessRadioGroup
      value={value}
      onChange={onChange}
      className={`flex flex-wrap text-white ${className}`}
      onBlur={onBlur}
    >
      {options.map((option) => {
        return (
          <HeadlessRadioGroup.Option
            value={option.value}
            className="mr-10 cursor-pointer"
            key={option.value}
            disabled={option.disabled}
          >
            {({ checked }) => (
              <div
                className={`flex flex-row items-center ${
                  option.disabled && 'cursor-not-allowed opacity-50'
                }`}
              >
                <div
                  className={`
                      w-5 h-5 rounded-full border-2 bg-white mr-2 grid place-content-center
                      ${
                        checked
                          ? 'bg-transparent border-primary'
                          : 'border-transparent'
                      }`}
                >
                  <div
                    className={
                      checked
                        ? `w-3 h-3 border-3 border-transparent rounded-full bg-buttonPrimary `
                        : ``
                    }
                  />
                </div>
                <span>{option.label}</span>
              </div>
            )}
          </HeadlessRadioGroup.Option>
        );
      })}
    </HeadlessRadioGroup>
  );
};

export default RadioGroup;

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
