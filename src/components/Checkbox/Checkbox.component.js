import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.styles.css';

const Checkbox = ({ item, selectedDays, onChange, checkedBgColor }) => {
  return (
    <>
      <div>
        <label htmlFor={item} className='relative cursor-pointer'>
          <input
            type='checkbox'
            id={item}
            name={item}
            value={item}
            checked={selectedDays[item]}
            onChange={(e) => onChange(e)}
            className={`appearance-none h-5 w-5 bg-white cursor-pointer rounded-sm checked:${checkedBgColor}`}
          />
          <img
            src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABCSURBVHgBvY8xDQAwCASpg1qoAxxVGhJroQywEfK/QPLT3xEQ4WYvAjbPYeDn0Rn4RgFv1igMgSsJvjkl+MGUWvgDzFMSXmVLe0UAAAAASUVORK5CYII='
            className={`h-3.5 absolute left-0.5 bottom-1.5 invisible check-1`}
            alt='tick'
          />
          <span className={`px-2 absolute bottom-px`}>{item} </span>
        </label>
      </div>
    </>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  item: PropTypes.string,
  selectedDays: PropTypes.object,
  onChange: PropTypes.func,
  checkedBgColor: PropTypes.string,
};
