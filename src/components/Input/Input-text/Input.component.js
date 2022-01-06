import React from "react";
import PropTypes from "prop-types";
import "./Input.styles.css";

const InputField = ({
  type,
  placeholder,
  id,
  value,
  onChange,
  disabled = true,
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      id={id}
      value={value}
      onChange={(e) => onChange(e)}
      className={`bg-secondary focus:outline-none rounded h-12 w-full px-4 ${
        disabled
          ? "opacity-50 textgray cursor-not-allowed"
          : "text-white cursor-pointer"
      }`}
      disabled={disabled}
    />
  );
};

export default InputField;

InputField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  placeholder: "",
  type: "text",
};
