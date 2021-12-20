import React, { useState } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './Input.styles.css';
import PropTypes from 'prop-types';

const InputField = ({ value, onChange, placeholder }) => {
  const [focused, setFocused] = useState(false);

  const onDateChangeHandle = (date) => {
    onChange(date);
  };

  const onFocusChangeHandle = ({ focused }) => {
    setFocused(focused);
  };

  return (
    <SingleDatePicker
      date={value}
      onDateChange={onDateChangeHandle}
      focused={focused}
      onFocusChange={onFocusChangeHandle}
      id='date'
      noBorder
      showDefaultInputIcon={true}
      inputIconPosition='after'
      placeholder={placeholder}
    />
  );
};

export default InputField;

InputField.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
