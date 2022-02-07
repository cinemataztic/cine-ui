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
    return `border-buttonDanger ${
      disabled
        ? ''
        : 'hover:border-buttonDangerHover active:border-buttonDangerActive'
    }`;
  }

  if (variant === 'primary') {
    return `border-primary ${
      disabled
        ? ''
        : 'hover:border-buttonPrimaryHover active:border-buttonPrimaryActive'
    }`;
  } else if (variant === 'secondary') {
    return `border-buttonSecondary ${
      disabled ? '' : 'hover:border-white active:border-buttonSecondaryActive'
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
    return `bg-buttonDanger ${
      disabled ? '' : 'hover:bg-buttonDangerHover active:bg-buttonDangerActive'
    }`;
  }

  if (variant === 'primary') {
    return `bg-buttonPrimary ${
      disabled
        ? ''
        : 'hover:bg-buttonPrimaryHover active:bg-buttonPrimaryActive'
    }`;
  } else if (variant === 'secondary') {
    return `bg-buttonSecondary ${
      disabled ? '' : 'hover:bg-white active:bg-buttonSecondaryActive '
    }`;
  } else {
    return '';
  }
};

const getTextColors = (variant, appearance, danger, disabled) => {
  if (variant === 'tertiary' || appearance === 'outline')
    if (danger) {
      return `text-buttonDanger ${
        disabled
          ? ''
          : 'hover:text-buttonDangerHover active:text-buttonDangerActive'
      }`;
    }

  if (variant === 'tertiary') {
    return `text-accent1 ${
      disabled
        ? ''
        : 'hover:text-buttonTertiaryHover active:text-buttonTertiaryActive'
    }`;
  }

  if (appearance === 'outline') {
    if (variant === 'primary') {
      return `text-accent1 ${
        disabled
          ? ''
          : 'hover:text-buttonTertiaryHover active:text-buttonTertiaryActive'
      }`;
    } else if (variant === 'secondary') {
      return `text-buttonSecondary ${
        disabled ? '' : 'hover:text-white active:text-buttonSecondaryActive'
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
}) => {
  const sizeStyle = getSizeStyle(size);

  return (
    <button
      type={type}
      className={`rounded-md font-bold font-sans leading-none ${sizeStyle} ${getPointerStyle(
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
