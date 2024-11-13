import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tooltip.styles.css';

const Tooltip = ({ text, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full mb-2 left-1/2 transform -translate-x-1/2',
    right: 'left-full ml-2 top-1/2 transform -translate-y-1/2',
    bottom: 'top-full mt-2 left-1/2 transform -translate-x-1/2',
    left: 'right-full mr-2 top-1/2 transform -translate-y-1/2',
  };

  const arrowClasses = {
    top: 'left-1/2 transform -translate-x-1/2 -bottom-1.5 border-l-8 border-r-8 border-t-8 border-t-tertiary border-transparent',
    right:
      'top-1/2 transform -translate-y-1/2 -left-1.5 border-t-8 border-b-8 border-r-8 border-r-tertiary border-transparent',
    bottom:
      'left-1/2 transform -translate-x-1/2 -top-1.5 border-l-8 border-r-8 border-b-8 border-b-tertiary border-transparent',
    left: 'top-1/2 transform -translate-y-1/2 -right-1.5 border-t-8 border-b-8 border-l-8 border-l-tertiary border-transparent',
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute ${positionClasses[position]} w-52 p-2 bg-hover text-default text-base font-normal rounded-md`}
        >
          {text}
          <div className={`absolute ${arrowClasses[position]}`}></div>
        </div>
      )}
    </div>
  );
};
export default Tooltip;

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  children: PropTypes.element.isRequired,
};

Tooltip.defaultProps = {
  position: 'top',
};
