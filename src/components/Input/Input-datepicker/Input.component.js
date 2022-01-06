import React, { useState } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './Input.styles.css';
import PropTypes from 'prop-types';

const InputField = ({ value, onChange, placeholder, id }) => {
  const [focused, setFocused] = useState(false);

  const onFocusChange = ({ focused }) => {
    setFocused(focused);
  };

  return (
    <SingleDatePicker
      hideKeyboardShortcutsPanel
      numberOfMonths={1}
      date={value}
      onDateChange={(date) => {
        onChange(date);
      }}
      focused={focused}
      onFocusChange={onFocusChange}
      id={id}
      noBorder
      showDefaultInputIcon={true}
      inputIconPosition="after"
      customInputIcon={
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V9H18V20ZM18 7H2V4H18V7Z"
            fill="white"
          />
        </svg>
      }
      placeholder={placeholder}
    />
  );
};

export default InputField;

InputField.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  id: PropTypes.string,
};
