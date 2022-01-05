import React from 'react';
import PropTypes from 'prop-types';
import { Listbox as HeadlessListBox } from '@headlessui/react';

import './Listbox.styles.css';

const ListBox = ({ options, value, onChange }) => {
  return (
    <HeadlessListBox as='div' value={value} onChange={onChange}>
      <HeadlessListBox.Button className='border-2 border-gray-600 focus:border-primary bg-secondary text-white w-full h-10 rounded-lg text-left pl-3'>
        <span className='flex justify-between'>
          <span>{value}</span>
          <span className='mt-2 mr-2'>
            <img
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgBhYzREQAQDEPLRDbqKIxi06hTHFeVrzb3XogkABJ9shg5MkbYgVmZHOUP2ldL0q7qG2ZZsMPGck+5lw7JhR+SDz8kH74kE27czYwZeCNT6wAAAABJRU5ErkJggg=='
              alt='Down Arrow'
            />
          </span>
        </span>
      </HeadlessListBox.Button>
      <HeadlessListBox.Options className='border-2 border-gray-600 focus:border-primary bg-secondary text-white w-full rounded-lg text-left pl-3'>
        {options.map((option) => (
          <HeadlessListBox.Option
            key={option.id}
            value={option.label}
            hidden={option.disabled}
            className='m-2 cursor-pointer'
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
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
