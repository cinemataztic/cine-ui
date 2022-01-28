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
  const { type, label, size, onClick, disabled, variant, appearance } = props;

  const sizeStyle = getSizeStyle(size);

  let buttonStyle;

  if (variant === 'primary') {
    if (appearance === 'outline') {
      if (disabled) {
        buttonStyle =
          'cursor-not-allowed border-2 border-primary opacity-50 text-secondary';
      } else {
        buttonStyle =
          'cursor-pointer border-2 border-primary text-quaternary hover:border-buttonPrimaryHover hover:text-secondary active:border-buttonPrimaryActive active:text-secondary';
      }
    } else {
      if (disabled) {
        buttonStyle =
          'cursor-not-allowed bg-buttonPrimary opacity-50 text-quaternary';
      } else {
        buttonStyle =
          'cursor-pointer bg-buttonPrimary text-quaternary hover:bg-buttonPrimaryHover hover:text-secondary active:bg-buttonPrimaryActive active:text-secondary';
      }
    }
  } else if (variant === 'secondary') {
    if (appearance === 'outline') {
      if (disabled) {
        buttonStyle =
          'cursor-not-allowed border-2 border-buttonSecondary opacity-50 text-secondary';
      } else {
        buttonStyle =
          'cursor-pointer border-2 border-buttonSecondary text-senary hover:border-white hover:text-secondary active:border-buttonSecondaryActive active:text-secondary';
      }
    } else {
      if (disabled) {
        buttonStyle =
          'cursor-not-allowed bg-buttonSecondary opacity-50 text-secondary';
      } else {
        buttonStyle =
          'cursor-pointer bg-buttonSecondary text-quinary hover:bg-white hover:text-secondary active:bg-buttonSecondaryActive active:text-secondary';
      }
    }
  } else if (variant === 'tertiary') {
    if (disabled) {
      buttonStyle = 'cursor-not-allowed text-primary opacity-50';
    } else {
      buttonStyle =
        'cursor-pointer text-primary hover:text-septenary active:text-octonary';
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
  varaint: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  appearance: PropTypes.oneOf(['default', 'outline']),
};

Button.defaultProps = {
  type: 'button',
  label: 'Click me',
  size: 'lg',
  onClick: () => {},
  disabled: false,
  variant: 'primary',
  appearance: 'default',
};
