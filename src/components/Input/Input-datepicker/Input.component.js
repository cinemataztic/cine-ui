import React, { useState } from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './Input.styles.css';
import PropTypes from 'prop-types';

const InputField = ({ value, onChange, placeholder, id, isDayBlocked, isOutsideRange }) => {
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
      isDayBlocked={(day) => isDayBlocked(day)}
      isOutsideRange={isOutsideRange}
      navPrev={
        <div className="DayPickerNavigation_button DayPickerNavigation_button_1 DayPickerNavigation_button__default DayPickerNavigation_button__default_2 DayPickerNavigation_button__horizontal DayPickerNavigation_button__horizontal_3 DayPickerNavigation_button__horizontalDefault DayPickerNavigation_button__horizontalDefault_4 DayPickerNavigation_leftButton__horizontalDefault DayPickerNavigation_leftButton__horizontalDefault_5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9799 18L15.3899 16.59L10.8099 12L15.3899 7.41L13.9799 6L7.97989 12L13.9799 18Z"
              fill="#3AC1C8"
            />
          </svg>
        </div>
      }
      navNext={
        <div className="DayPickerNavigation_button DayPickerNavigation_button_1 DayPickerNavigation_button__default DayPickerNavigation_button__default_2 DayPickerNavigation_button__horizontal DayPickerNavigation_button__horizontal_3 DayPickerNavigation_button__horizontalDefault DayPickerNavigation_button__horizontalDefault_4 DayPickerNavigation_rightButton__horizontalDefault DayPickerNavigation_rightButton__horizontalDefault_5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#3AC1C8"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
          </svg>
        </div>
      }
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
  isDayBlocked: PropTypes.func,
  isOutsideRange: PropTypes.func,
  placeholder: PropTypes.string,
  id: PropTypes.string,
};

InputField.defaultProps = {
  placeholder: '',
  isDayBlocked: () => {},
};
