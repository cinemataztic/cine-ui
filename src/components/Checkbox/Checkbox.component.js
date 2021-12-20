import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.styles.css';

const Checkbox = ({ data, updatedState, onChange, checkbgColor }) => {
  const onCheckHandle = (e) => {
    const { value, checked } = e.target;
    onChange(value, checked);
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <label htmlFor={item} className={`relative`}>
              <input
                type='checkbox'
                id={item}
                name={item}
                value={item}
                checked={updatedState[item]}
                onChange={onCheckHandle}
                className={`appearance-none h-5 w-5 bg-white rounded-sm checked:${checkbgColor}`}
              />
              <img
                src='https://img.icons8.com/material-outlined/24/000000/checkmark--v2.png'
                className={`h-5 absolute bottom-0.5 invisible check-1`}
                alt='tick'
              />
              <span className={`px-2 absolute bottom-px`}>{item} </span>
            </label>
          </div>
        );
      })}
    </>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  data: PropTypes.array,
  updatedState: PropTypes.object,
  onChange: PropTypes.func,
  checkbgColor: PropTypes.string,
};
