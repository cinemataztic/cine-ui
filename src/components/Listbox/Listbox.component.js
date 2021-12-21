import React from 'react';
import PropTypes from 'prop-types';
import './Listbox.styles.css';
import { Listbox } from '@headlessui/react';

const ListBox = ({
  data,
  value,
  updatedstate,
  bgColor,
  borderColor,
  textColor,
}) => {
  return (
    <Listbox as='div' value={value} onChange={updatedstate}>
      <Listbox.Button
        className={`border-2 border-gray-600 focus:${borderColor} ${bgColor} ${textColor} w-3/5 h-10 rounded-lg text-left pl-3`}
      >
        <span className={`flex justify-between`}>
          <span>{value.ad}</span>
          <span className={`mt-2 mr-2`}>
            <img
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABNSURBVHgBhYzREQAQDEPLRDbqKIxi06hTHFeVrzb3XogkABJ9shg5MkbYgVmZHOUP2ldL0q7qG2ZZsMPGck+5lw7JhR+SDz8kH74kE27czYwZeCNT6wAAAABJRU5ErkJggg=='
              alt='Down Arrow'
            />
          </span>
        </span>
      </Listbox.Button>
      <Listbox.Options
        className={`border-2 border-gray-600 focus:${borderColor} ${bgColor} ${textColor} text-white w-3/5 rounded-lg text-left pl-3`}
      >
        {data.map((advertisement) => (
          <Listbox.Option
            key={advertisement.id}
            value={advertisement}
            hidden={advertisement.disabled}
            className={`m-2 cursor-pointer`}
          >
            {advertisement.ad}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default ListBox;

ListBox.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.object,
  updatedstate: PropTypes.func,
  bgColor: PropTypes.oneOf(['bg-secondary', 'bg-red-600']),
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
};
