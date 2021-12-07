import React, { useState } from 'react';
import './Input.styles.css';

const InputField = ({}) => {
  const [fromDateTime, setFromDateTime] = useState('');
  const [toDateTime, setToDateTime] = useState('');

  const onChangeFromDateTimeHandle = (e) => {
    setFromDateTime(e.target.value);
  };

  const onChangeToDateTimeHandle = (e) => {
    setToDateTime(e.target.value);
  };

  const currentDateTime = () => {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    let hh = today.getHours();
    let min = today.getMinutes();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    if (hh < 10) hh = '0' + hh;
    if (min < 10) min = '0' + min;

    return yyyy + '-' + mm + '-' + dd + 'T' + hh + ':' + min;
  };

  console.log(fromDateTime, toDateTime);
  //className={`w-full border-2 flex justify-between`}
  return (
    <div className={`w-1/2 flex justify-between`}>
      <div>
        <input
          placeholder='From'
          type='text'
          onFocus={(e) => (e.target.type = 'datetime-local')}
          onBlur={(e) => (e.target.type = 'text')}
          value={fromDateTime}
          onChange={onChangeFromDateTimeHandle}
          className={`bg-secondary bg-opacity-70 text-white focus:outline-none rounded h-10 w-64  px-2 cursor-pointer mr-8`}
          min={currentDateTime()}
        />
      </div>
      <div>
        <input
          placeholder='To'
          type='text'
          onFocus={(e) => (e.target.type = 'datetime-local')}
          onBlur={(e) => (e.target.type = 'text')}
          value={toDateTime}
          onChange={onChangeToDateTimeHandle}
          className={`bg-secondary bg-opacity-70 text-white focus:outline-none rounded h-10 w-64  px-2 cursor-pointer`}
          min={currentDateTime()}
        />
      </div>
    </div>
  );
};

export default InputField;
