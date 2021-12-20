import React from 'react';
import PropTypes from 'prop-types';
import './Input.styles.css';

const InputField = ({
  type,
  placeholder,
  value,
  onChange,
  bgColor,
  textColor,
  height,
  width,
}) => {
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
        className={`${bgColor} bg-opacity-80 ${textColor} focus:outline-none rounded ${width} ${height} px-2 cursor-pointer`}
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
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

InputField.defaultProps = {
  type: '',
  placeholder: '',
  type: 'text',
};
