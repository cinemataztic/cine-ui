import React from 'react';
import PropTypes from 'prop-types';
import './Input.styles.css';

const InputField = ({ type, placeholder, id, value, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      id={id}
      value={value}
      onChange={(e) => onChange(e)}
      className='bg-secondary text-white focus:outline-none rounded h-12 w-full px-4 cursor-pointer'
    />
  );
};

export default InputField;

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputField.defaultProps = {
  placeholder: '',
  type: 'text',
};
