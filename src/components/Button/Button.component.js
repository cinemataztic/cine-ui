import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.css';

const getSizeStyle = (size) => {
  switch (size) {
    case 'sm':
      return 'h-9 w-auto text-base px-4 py-2';
    case 'lg':
    default:
      return 'h-12 w-auto text-lg px-6 py-3';
  }
};

const Button = ({ backgroundColor, label, color, size, onClick, disabled }) => {
  const sizeStyle = getSizeStyle(size);

  return (
    <button
      type='button'
      className={`border-0 rounded-md font-bold font-sans leading-none ${sizeStyle} ${
        disabled
          ? `pointer-events-none bg-primary opacity-50`
          : `cursor-pointer ${backgroundColor} ${color} bg-gradient-to-r hover:from-secondary hover:to-secondary active:from-primary active:to-primary `
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
  size: PropTypes.oneOf(['sm', 'lg']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: 'bg-primary',
  label: 'Click me',
  color: 'textgray',
  size: 'lg',
  onClick: () => {},
  disabled: false,
};
