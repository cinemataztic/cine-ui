import React from 'react';
import PropTypes from 'prop-types';
import './Listbox.styles.css';
import { Listbox } from '@headlessui/react';

const ListBox = ({ options, selectedValue, onChange }) => {
  return (
    <Listbox as='div' value={selectedValue} onChange={onChange}>
      <Listbox.Button className='border-2 border-gray-600 focus:border-primary bg-secondary text-white w-full h-10 rounded-lg text-left pl-3'>
        <span className='flex justify-between'>
          <span>{selectedValue.label}</span>
          <span className='mt-2 mr-2'>
            <img
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgBhYzREQAQDEPLRDbqKIxi06hTHFeVrzb3XogkABJ9shg5MkbYgVmZHOUP2ldL0q7qG2ZZsMPGck+5lw7JhR+SDz8kH74kE27czYwZeCNT6wAAAABJRU5ErkJggg=='
              alt='Down Arrow'
            />
          </span>
        </span>
      </Listbox.Button>
      <Listbox.Options className='border-2 border-gray-600 focus:border-primary bg-secondary text-white text-white w-full rounded-lg text-left pl-3'>
        {options.map((option) => (
          <Listbox.Option
            key={option.id}
            value={option}
            hidden={option.disabled}
            className='m-2 cursor-pointer'
          >
            {option.label}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default ListBox;

ListBox.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  selectedValue: PropTypes.object,
  onChange: PropTypes.func,
};
