import React from 'react';
import { RadioGroup as HeadlessRadioGroup } from '@headlessui/react';
import PropTypes from 'prop-types';

import './RadioGroup.styles.css';

const RadioGroup = ({ options, value, onChange }) => {
  return (
    <HeadlessRadioGroup
      value={value}
      onChange={onChange}
      className="w-full grid grid-rows-1 grid-flow-col gap-0 text-white"
    >
      {options.map((option) => {
        return (
          <HeadlessRadioGroup.Option
            value={option.value}
            className="flex cursor-pointer"
            key={option.value}
            disabled={option.disabled}
          >
            {({ checked }) => (
              <>
                <div
                  className={`
                      w-5 h-5 rounded-full border-2 bg-white mr-2 grid place-content-center
                      ${
                        checked
                          ? `bg-transparent border-primary`
                          : `border-transparent`
                      }`}
                >
                  <div
                    className={
                      checked
                        ? `w-3 h-3 border-3 border-transparent rounded-full bg-primary `
                        : ``
                    }
                  />
                </div>
                <span>{option.label}</span>
              </>
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
};
