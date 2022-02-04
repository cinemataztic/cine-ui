// Inspired by Ant Design
import React from 'react';
import PropTypes from 'prop-types';

/****************************************************************
 * Helpers
 ****************************************************************/

const getTextColor = (color) => {
  switch (color) {
    case 'primary':
      return 'text-primary';
    case 'secondary':
      return 'text-secondary';
    case 'default':
    default:
      return 'text-default';
  }
};

/****************************************************************
 * Typography Base
 ****************************************************************/

const TypographyBase = ({
  children,
  onClick,
  className,
  color,
  as: Component,
}) => {
  return (
    <Component
      onClick={onClick}
      className={`${getTextColor(color)} ${className ?? ''}`}
    >
      {children}
    </Component>
  );
};

TypographyBase.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
};

TypographyBase.defaultProps = {
  as: 'p',
  color: 'default',
};

export default TypographyBase;
