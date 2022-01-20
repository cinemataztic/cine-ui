// Inspired by Ant Design
import React from 'react';
import PropTypes from 'prop-types';

/****************************************************************
 * Typography Base
 ****************************************************************/

const TypographyBase = ({ children, onClick, className, as: Component }) => {
  return (
    <Component onClick={onClick} className={className}>
      {children}
    </Component>
  );
};

TypographyBase.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

TypographyBase.defaultProps = {
  as: 'p',
};

export default TypographyBase;
