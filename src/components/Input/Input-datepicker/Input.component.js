import React, { useState } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './Input.styles.css';

const InputField = ({ value, onChange }) => {
  const [focused, setFocused] = useState(false);

  const onDateChangeHandle = (date) => {
    onChange(date);
  };

  const onFocusChangeHandle = ({ focused }) => {
    setFocused(focused);
  };

  return (
    <div className='custom'>
      <SingleDatePicker
        date={value}
        onDateChange={onDateChangeHandle}
        focused={focused}
        onFocusChange={onFocusChangeHandle}
        id='date'
        noBorder
        showDefaultInputIcon={true}
        inputIconPosition='after'
        placeholder='From'
      />
    </div>
  );
};

export default InputField;
