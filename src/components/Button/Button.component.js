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

const getPointerStyle = (disabled) =>
  disabled ? 'cursor-not-allowed' : 'cursor-pointer';

const getTransparencyStyle = (disabled) => (disabled ? 'opacity-50' : '');

const getBorderWidth = (variant, appearance) => {
  if (variant === 'tertiary' || appearance === 'default') {
    return '';
  }

  return 'border-2';
};

const getBorderColors = (variant, appearance, danger, disabled) => {
  if (variant === 'tertiary' || appearance === 'default') {
    return '';
  }

  if (danger) {
    return `border-danger ${
      disabled ? '' : 'hover:border-dangerHover active:border-dangerActive'
    }`;
  }

  if (variant === 'primary') {
    return `border-primary ${
      disabled ? '' : 'hover:border-primaryHover active:border-primaryActive'
    }`;
  } else if (variant === 'secondary') {
    return `border-buttonSecondary ${
      disabled ? '' : 'hover:border-white active:border-secondaryActive'
    }`;
  } else {
    return '';
  }
};

const getBackgroundColors = (variant, appearance, danger, disabled) => {
  if (variant === 'tertiary' || appearance === 'outline') {
    return '';
  }

  if (danger) {
    return `bg-danger ${
      disabled ? '' : 'hover:bg-dangerHover active:bg-dangerActive'
    }`;
  }

  if (variant === 'primary') {
    return `bg-buttonPrimary ${
      disabled ? '' : 'hover:bg-primaryHover active:bg-primaryActive'
    }`;
  } else if (variant === 'secondary') {
    return `bg-buttonSecondary ${
      disabled ? '' : 'hover:bg-white active:bg-secondaryActive '
    }`;
  } else {
    return '';
  }
};

const getTextColors = (variant, appearance, danger, disabled) => {
  if (variant === 'tertiary' || appearance === 'outline')
    if (danger) {
      return `text-danger ${
        disabled ? '' : 'hover:text-dangerHover active:text-dangerActive'
      }`;
    }

  if (variant === 'tertiary') {
    return `text-primary ${
      disabled ? '' : 'hover:text-tertiaryHover active:text-tertiaryActive'
    }`;
  }

  if (appearance === 'outline') {
    if (variant === 'primary') {
      return `text-primary ${
        disabled ? '' : 'hover:text-tertiaryHover active:text-tertiaryActive'
      }`;
    } else if (variant === 'secondary') {
      return `text-buttonSecondary ${
        disabled ? '' : 'hover:text-white active:text-secondaryActive'
      }`;
    }
  } else if (appearance === 'default') {
    return 'text-secondary';
  }
};

const Button = ({
  type,
  label,
  size,
  onClick,
  disabled,
  variant,
  appearance,
  danger,
  className,
}) => {
  const sizeStyle = getSizeStyle(size);

  return (
    <button
      type={type}
      className={`rounded-md font-bold font-sans leading-none ${sizeStyle} ${className} ${getPointerStyle(
        disabled,
      )} ${getBorderWidth(variant, appearance)} ${getBorderColors(
        variant,
        appearance,
        danger,
        disabled,
      )} ${getBackgroundColors(
        variant,
        appearance,
        danger,
        disabled,
      )} ${getTextColors(
        variant,
        appearance,
        danger,
        disabled,
      )} ${getTransparencyStyle(disabled)} `}
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
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  appearance: PropTypes.oneOf(['default', 'outline']),
  danger: PropTypes.bool,
  className: PropTypes.string,
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
