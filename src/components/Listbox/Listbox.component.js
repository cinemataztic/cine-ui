import React from 'react';
import PropTypes from 'prop-types';
import { Listbox as HeadlessListBox } from '@headlessui/react';

import './Listbox.styles.css';

function getLabelForValue(value, options = []) {
  const selectedOption = options.filter((option) => option.value === value);
  if (selectedOption.length === 1) {
    return selectedOption[0].label;
  } else throw new Error(`More than one label/option pair with same value.`);
}

const ListBox = ({ options, value, onChange, placeholder }) => {
  return (
    <HeadlessListBox as="div" value={value} onChange={onChange}>
      <HeadlessListBox.Button className="border-2 border-secondary focus:border-primary bg-tertiary text-white w-full h-12 rounded-lg text-left pl-4 ">
        <span className="flex justify-between">
          <span>{value ? getLabelForValue(value, options) : placeholder}</span>
          <span className="mt-2 mr-4">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMC41OSAwLjU5MDAyN0w2IDUuMTcwMDNMMS40MSAwLjU5MDAyN0wwIDIuMDAwMDNMNiA4LjAwMDAzTDEyIDIuMDAwMDNMMTAuNTkgMC41OTAwMjdaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"
              alt="Down Arrow"
            />
          </span>
        </span>
      </HeadlessListBox.Button>
      <HeadlessListBox.Options className="border-2 border-secondary focus:border-primary bg-tertiary w-full rounded-lg max-h-80 overflow-y-auto">
        {options.map((option) => (
          <HeadlessListBox.Option
            key={option.value}
            value={option.value}
            className="cursor-pointer hover:bg-hover text-white text-left px-4 py-2 rounded-lg "
          >
            {option.label}
          </HeadlessListBox.Option>
        ))}
      </HeadlessListBox.Options>
    </HeadlessListBox>
  );
};

export default ListBox;

ListBox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
