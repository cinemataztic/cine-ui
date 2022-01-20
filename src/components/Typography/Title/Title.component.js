// Inspired by Ant Design
import React from 'react';
import PropTypes from 'prop-types';

import TypographyBase from '../TypographyBase';

/****************************************************************
 * Helpers
 ****************************************************************/

const getComponent = (level) => {
  switch (level) {
    case 1:
      return 'h1';
    case 2:
      return 'h2';
    case 3:
      return 'h3';
    case 4:
      return 'h4';
    default:
      return 'h1';
  }
};

const getFontSize = (level) => {
  switch (level) {
    case 1:
      return 'text-4xl';
    case 2:
      return 'text-3xl';
    case 3:
      return 'text-2xl';
    case 4:
      return 'text-xl';
    default:
      return 'text-4xl';
  }
};

const getTextColor = (color) => {
  switch (color) {
    case 'primary':
      return 'text-primary';
    case 'secondary':
      return 'text-secondary';
    case 'accent1':
      return 'text-accent1';
    default:
      return 'text-primary';
  }
};

/****************************************************************
 * Title
 ****************************************************************/

const Title = ({ children, onClick, level, color, className }) => {
  return (
    <TypographyBase
      className={`font-bold ${getTextColor(color)} ${getFontSize(
        level,
      )} ${className}`}
      as={getComponent(level)}
      onClick={onClick}
    >
      {children}
    </TypographyBase>
  );
};

Title.propTypes = {
  ...TypographyBase.propTypes,
  level: PropTypes.oneOf([1, 2, 3, 4]),
  color: PropTypes.oneOf(['primary', 'secondary', 'accent1']),
};

Title.defaultProps = {
  level: 1,
  color: 'primary',
};

export default Title;
