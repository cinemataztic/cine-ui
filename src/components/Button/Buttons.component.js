import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.styles.css';

const Buttons = ({
  backgroundColor,
  label,
  color,
  height,
  width,
  fontSize,
  onClick,
}) => {
  return (
    <button
      type='button'
      className={`border-0 rounded-lg cursor-pointer font-bold font-sans leading-none`}
      style={{
        backgroundColor: `${backgroundColor}`,
        color: `${color}`,
        height: `${height}px`,
        width: `${width}px`,
        fontSize: `${fontSize}px`,
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Buttons;

Buttons.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  fontSize: PropTypes.number,
  onClick: PropTypes.func,
};

Buttons.defaultProps = {
  backgroundColor: '#3AC1C8',
  label: 'Click me',
  color: 'rgba(0, 0, 0, 60);',
  height: 40,
  width: 300,
  fontSize: 18,
  onClick: () => {},
};
