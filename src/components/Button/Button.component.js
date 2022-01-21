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

const Button = (props) => {
  const { type, label, size, onClick, disabled, color, variant } = props;

  const sizeStyle = getSizeStyle(size);

  let buttonStyle;

  if (color === 'primary') {
    if (variant === 'outlined') {
      if (disabled) {
        buttonStyle =
          'cursor-not-allowed border border-primary opacity-50 text-tertiary';
      } else {
        buttonStyle =
          'cursor-pointer text-tertiary border-2 border-primary hover:border-tertiary hover:text-secondary active:border-quaternary active:text-secondary';
      }
    } else if (variant === 'text') {
      if (disabled) {
        buttonStyle = 'cursor-not-allowed text-primary opacity-50';
      } else {
        buttonStyle =
          'cursor-pointer text-primary hover:text-quaternary active:text-quinary';
      }
    } else {
      if (disabled) {
        buttonStyle =
          'cursor-not-allowed bg-buttonPrimary opacity-50 text-tertiary';
      } else {
        buttonStyle =
          'cursor-pointer bg-buttonPrimary text-tertiary bg-gradient-to-r hover:from-secondary hover:to-secondary hover:text-secondary active:from-primary active:to-primary active:text-secondary';
      }
    }
  } else if (color === 'secondary') {
    if (variant === 'outlined') {
      if (disabled) {
        buttonStyle =
          'cursor-not-allowed border-2 border-quinary opacity-50 text-secondary';
      } else {
        buttonStyle =
          'cursor-pointer text-senary border-2 border-quinary hover:border-white hover:text-secondary active:border-senary active:text-secondary';
      }
    } else if (variant === 'text') {
      if (disabled) {
        buttonStyle = 'cursor-not-allowed text-septenary opacity-50';
      } else {
        buttonStyle =
          'cursor-pointer text-septenary hover:text-nonary active:text-octonary';
      }
    } else {
      if (disabled) {
        buttonStyle =
          'cursor-not-allowed bg-secondary bg-gradient-to-r from-tertiary to-tertiary opacity-50 text-secondary';
      } else {
        buttonStyle =
          'cursor-pointer bg-secondary bg-gradient-to-r from-tertiary to-tertiary text-tertiary bg-gradient-to-r hover:from-white hover:to-white hover:text-secondary active:from-quaternary active:to-quaternary active:text-secondary';
      }
    }
  }

  return (
    <button
      type={type}
      className={`rounded-md font-bold font-sans leading-none ${sizeStyle} ${buttonStyle} `}
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
};

Button.defaultProps = {
  type: 'button',
  label: 'Click me',
  size: 'lg',
  onClick: () => {},
  disabled: false,
};
