import React from 'react';
import PropTypes from 'prop-types';
import './Label.stories';

const Label = ({ label, className }) => {
  return (
    <p
      className={`text-secondary bg-buttonPrimary font-sans inline-block rounded h-8 leading-snug text-lg px-4 py-1 ${className}`}
    >
      {label}
    </p>
  );
};

export default Label;

Label.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Label.defaultProps = {
  label: 'Label component',
};
