// Inspired by Ant Design and Material UI
import React from 'react';
import PropTypes from 'prop-types';

import TypographyBase from '../TypographyBase';

/****************************************************************
 * Helpers
 ****************************************************************/

const getComponent = (variant) => {
  switch (variant) {
    case 'label':
      return 'span';
    case 'secondary':
    case 'base':
    default:
      return 'p';
  }
};

const getFontSize = (variant) => {
  switch (variant) {
    case 'label':
      return 'text-sm';
    case 'secondary':
      return 'text-md';
    case 'base':
    default:
      return 'text-lg';
  }
};

/****************************************************************
 * Text
 ****************************************************************/

const Text = ({
  children,
  onClick,
  variant,
  color,
  className,
  emphasized,
  subtle,
}) => {
  return (
    <TypographyBase
      className={`${getFontSize(variant)} ${emphasized ? 'font-bold' : ''} ${
        subtle ? '!text-secondary' : ''
      } ${className ?? ''}`}
      as={getComponent(variant)}
      onClick={onClick}
      color={color}
    >
      {children}
    </TypographyBase>
  );
};

Text.propTypes = {
  ...TypographyBase.propTypes,
  variant: PropTypes.oneOf(['base', 'secondary', 'label']),
  emphasized: PropTypes.bool,
  subtle: PropTypes.bool,
};

Text.defaultProps = {
  variant: 'base',
};

export default Text;
