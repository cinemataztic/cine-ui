import React from 'react';
import PropTypes from 'prop-types';

import './Input.styles.css';

const Input = React.forwardRef(
  (
    {
      type,
      name,
      placeholder,
      id,
      value,
      onChange,
      onBlur,
      disabled,
      className,
    },
    ref,
  ) => {
    return (
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        id={id}
        value={value}
        onChange={(e) => onChange(e)}
        onBlur={onBlur}
        className={`bg-tertiary focus:outline-none rounded placeholder-primary h-12 w-full px-4 ${
          disabled
            ? 'opacity-50 text-secondary cursor-not-allowed'
            : 'text-white cursor-text'
        } ${className}`}
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
  onblur: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
  type: 'text',
};
