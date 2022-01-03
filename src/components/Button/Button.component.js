import React from 'react';
import PropTypes from 'prop-types';
import './Button.styles.css';

const getSizeStyle = (size) => {
  switch (size) {
    case 'xs':
      return 'h-7 w-20 text-xs';
    case 'sm':
      return 'h-9 w-24 text-sm';
    case 'lg':
      return 'h-12 w-32 text-lg';
    case 'md':
    default:
      return 'h-12 w-28 text-base';
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
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  backgroundColor: 'bg-primary',
  label: 'Click me',
  color: 'textgray',
  size: 'md',
  onClick: () => {},
  disabled: false,
};
