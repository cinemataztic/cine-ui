import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.styles.css';

const Checkbox = ({ item, selectedDays, onChange }) => {
  return (
    <div>
      <label htmlFor={item} className='relative cursor-pointer'>
        <input
          type='checkbox'
          id={item}
          name={item}
          value={item}
          checked={selectedDays[item]}
          onChange={(e) => onChange(e)}
          className='appearance-none h-5 w-5 bg-white cursor-pointer rounded-sm checked:bg-primary'
        />
        <img
          src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxOCAxNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuOTk5OTEgMTEuMTdMMS44Mjk5MSA2Ljk5OTk3TDAuNDA5OTEyIDguNDA5OTdMNS45OTk5MSAxNEwxNy45OTk5IDEuOTk5OTdMMTYuNTg5OSAwLjU4OTk2Nkw1Ljk5OTkxIDExLjE3WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=='
          className='h-3 absolute left-0.5 bottom-1.5 invisible check-1'
          alt='tick'
        />
        <span className='px-2 absolute bottom-px'>{item} </span>
      </label>
    </div>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  item: PropTypes.string,
  selectedDays: PropTypes.object,
  onChange: PropTypes.func,
};
