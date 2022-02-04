// Inspired by Ant Design
import React from 'react';
import PropTypes from 'prop-types';

/****************************************************************
 * Helpers
 ****************************************************************/

const getTextColor = (color, subtle) => {
  switch (color) {
    case 'primary':
      return 'text-primary';
    case 'default':
    default:
      return subtle ? 'text-defaultSubtle' : 'text-default';
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
  subtle,
  as: Component,
}) => {
  return (
    <Component
      onClick={onClick}
      className={`${getTextColor(color, subtle)} ${className ?? ''}`}
    >
      {children}
    </Component>
  );
};

TypographyBase.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.oneOf(['default', 'primary']),
};

TypographyBase.defaultProps = {
  as: 'p',
  color: 'default',
};

export default TypographyBase;
