import React from 'react';
import PropTypes from 'prop-types';
import './Input.styles.css';

const Input = ({
  type,
  placeholder,
  id,
  value,
  onChange,
  disabled = true,
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      id={id}
      value={value}
      onChange={(e) => onChange(e)}
      className={`bg-secondary focus:outline-none rounded placeholder-primary h-12 w-full px-4 ${
        disabled
          ? 'opacity-50 textgray cursor-not-allowed'
          : 'text-white cursor-text'
      }`}
      disabled={disabled}
    />
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: '',
  type: 'text',
};
