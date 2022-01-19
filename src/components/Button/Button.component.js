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

const getButtonStyle = (bgColor, disabled) => {
  switch (bgColor) {
    case 'bg-buttonPrimary':
      switch (disabled) {
        case true:
          return `cursor-not-allowed ${bgColor} opacity-50 text-tertiary`;
        default:
          return `cursor-pointer ${bgColor} text-tertiary bg-gradient-to-r hover:from-secondary hover:to-secondary hover:text-secondary active:from-primary active:to-primary active:text-secondary`;
      }
    case 'bg-secondary':
      switch (disabled) {
        case true:
          return `cursor-not-allowed ${bgColor} bg-gradient-to-r from-tertiary to-tertiary opacity-50 text-secondary`;
        default:
          return `cursor-pointer ${bgColor} bg-gradient-to-r from-tertiary to-tertiary text-tertiary bg-gradient-to-r hover:from-white hover:to-white hover:text-secondary active:from-quaternary active:to-quaternary active:text-secondary`;
      }
    default:
      return;
  }
};

const Button = ({ type, label, size, onClick, disabled, bgColor }) => {
  const sizeStyle = getSizeStyle(size);
  const buttonStyle = getButtonStyle(bgColor, disabled);

  return (
    <button
      type={type}
      className={`border-0 rounded-md font-bold font-sans leading-none ${sizeStyle} ${buttonStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'lg']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  bgColor: PropTypes.oneOf(['bg-buttonPrimary', 'bg-secondary']),
};

Button.defaultProps = {
  type: 'button',
  bgColor: 'bg-buttonPrimary',
  label: 'Click me',
  size: 'lg',
  onClick: () => {},
  disabled: false,
};
