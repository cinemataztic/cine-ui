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
      date={value}
      onDateChange={(date) => {
        onChange(date);
      }}
      focused={focused}
      onFocusChange={onFocusChange}
      id={id}
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
  id: PropTypes.string,
};
