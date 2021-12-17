import React from 'react';
import PropTypes from 'prop-types';
import './Input.styles.css';

const InputField = ({ type, placeholder, value, onChange }) => {
  const onChangeInputHandle = (e) => {
    const { value } = e.target;
    onChange(value);
  };

  return (
    <div>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChangeInputHandle}
        className={`bg-secondary bg-opacity-70 text-white focus:outline-none rounded h-10 w-64  px-2 cursor-pointer`}
      />
    </div>
  );
};

export default InputField;

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

InputField.defaultProps = {
  type: '',
  placeholder: '',
  type: 'text',
};
