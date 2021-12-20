import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.css';

const Button = ({ backgroundColor, label, color, size, onClick, disabled }) => {
  let sizeChoice;

  if (size === 'xm') {
    sizeChoice = 'h-7 w-20 text-xs';
  } else if (size === 'sm') {
    sizeChoice = 'h-9 w-24 text-sm';
  } else if (size === 'md') {
    sizeChoice = 'h-10 w-32 text-base';
  } else if (size === 'lg') {
    sizeChoice = 'h-11 w-36 text-lg';
  }

  return (
    <button
      type='button'
      className={`${
        disabled
          ? `border-0 rounded-md font-bold font-sans leading-none ${sizeChoice} bg-gray-400 text-gray-300`
          : `border-0 rounded-md cursor-pointer font-bold font-sans leading-none ${backgroundColor} ${color} ${sizeChoice}`
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOf(['xm', 'sm', 'md', 'lg']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: 'bg-primary',
  label: 'Click me',
  color: 'textgray',
  size: 'sm',
  onClick: () => {},
  disabled: false,
};
