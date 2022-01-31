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
  const { type, label, size, onClick, disabled, variant, appearance, danger } =
    props;

  const sizeStyle = getSizeStyle(size);

  let buttonStyle;

  if (variant === 'primary') {
    if (appearance === 'default') {
      if (danger) {
        if (disabled) {
          buttonStyle =
            'cursor-not-allowed bg-buttonDanger opacity-50 text-secondary';
        } else {
          buttonStyle =
            'cursor-pointer bg-buttonDanger text-secondary hover:bg-buttonDangerHover hover:text-secondary active:bg-buttonDangerActive active:text-secondary';
        }
      } else {
        if (disabled) {
          buttonStyle =
            'cursor-not-allowed bg-buttonPrimary opacity-50 text-buttonPrimary';
        } else {
          buttonStyle =
            'cursor-pointer bg-buttonPrimary text-buttonPrimary hover:bg-buttonPrimaryHover hover:text-secondary active:bg-buttonPrimaryActive active:text-secondary';
        }
      }
    } else if (appearance === 'outline') {
      if (danger) {
        if (disabled) {
          buttonStyle =
            'cursor-not-allowed border-2 border-buttonDanger opacity-50 text-buttonDanger';
        } else {
          buttonStyle =
            'cursor-pointer border-2 border-buttonDanger text-buttonDanger hover:border-buttonDangerHover hover:text-buttonDangerHover active:border-buttonDangerActive active:text-buttonDangerActive';
        }
      } else {
        if (disabled) {
          buttonStyle =
            'cursor-not-allowed border-2 border-primary opacity-50 text-secondary';
        } else {
          buttonStyle =
            'cursor-pointer border-2 border-primary text-buttonPrimary hover:border-buttonPrimaryHover hover:text-secondary active:border-buttonPrimaryActive active:text-secondary';
        }
      }
    }
  } else if (variant === 'secondary') {
    if (appearance === 'default') {
      if (danger) {
        if (disabled) {
          buttonStyle =
            'cursor-not-allowed bg-buttonDanger opacity-50 text-secondary';
        } else {
          buttonStyle =
            'cursor-pointer bg-buttonDanger text-secondary hover:bg-buttonDangerHover hover:text-secondary active:bg-buttonDangerActive active:text-secondary';
        }
      } else {
        if (disabled) {
          buttonStyle =
            'cursor-not-allowed bg-buttonSecondary opacity-50 text-secondary';
        } else {
          buttonStyle =
            'cursor-pointer bg-buttonSecondary text-buttonDefaultSecondary hover:bg-white hover:text-secondary active:bg-buttonSecondaryActive active:text-secondary';
        }
      }
    } else if (appearance === 'outline') {
      if (danger) {
        if (disabled) {
          buttonStyle =
            'cursor-not-allowed border-2 border-buttonDanger opacity-50 text-buttonDanger';
        } else {
          buttonStyle =
            'cursor-pointer border-2 border-buttonDanger text-buttonDanger hover:border-buttonDangerHover hover:text-buttonDangerHover active:border-buttonDangerActive active:text-buttonDangerActive';
        }
      } else {
        if (disabled) {
          buttonStyle =
            'cursor-not-allowed border-2 border-buttonSecondary opacity-50 text-secondary';
        } else {
          buttonStyle =
            'cursor-pointer border-2 border-buttonSecondary text-buttonOutlineSecondary hover:border-white hover:text-secondary active:border-buttonSecondaryActive active:text-secondary';
        }
      }
    }
  } else if (variant === 'tertiary') {
    if (danger) {
      if (disabled) {
        buttonStyle = 'cursor-not-allowed text-buttonDanger opacity-50';
      } else {
        buttonStyle =
          'cursor-pointer text-buttonDanger hover:text-buttonDangerHover active:text-buttonDangerActive';
      }
    } else {
      if (disabled) {
        buttonStyle = 'cursor-not-allowed text-accent1 opacity-50';
      } else {
        buttonStyle =
          'cursor-pointer text-accent1 hover:text-buttonTertiaryHover active:text-buttonTertiaryActive';
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
  varaint: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  appearance: PropTypes.oneOf(['default', 'outline']),
  danger: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  label: 'Click me',
  size: 'lg',
  onClick: () => {},
  disabled: false,
  variant: 'primary',
  appearance: 'default',
  danger: false,
};
