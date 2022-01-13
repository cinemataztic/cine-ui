import React from 'react';
import PropTypes from 'prop-types';
import './Input.styles.css';

const Input = React.forwardRef(
  ({ type, name, placeholder, id, value, onChange, disabled = true }, ref) => {
    return (
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e)}
        className={`bg-secondary focus:outline-none rounded placeholder-primary h-12 w-full px-4 ${
          disabled
            ? 'opacity-50 textgray cursor-not-allowed'
            : 'text-white cursor-text'
        }`}
        ref={ref}
        disabled={disabled}
      />
    );
  },
);

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
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
