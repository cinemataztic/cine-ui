import React, { useState, useEffect } from 'react';
import { getRemainingTimeUtilMsTimestamp } from './Utils/CountdownTimerUtils';
import './CountdownTimer.styles.css';

const defaultRemainingTime = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
};

function CountdownTimer({ startDate, endDate }) {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  //Start date in milliseconds
  const startDateTimestampMs = new Date(startDate).getTime();
  //End date in milliseconds
  const endDateTimestampMs = new Date(endDate).getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      updateRemainingTime(startDateTimestampMs, endDateTimestampMs);
    }, 1000);
    return () => clearInterval(interval);
  });

  const updateRemainingTime = (startDateTimestampMs, endDateTimestampMs) => {
    setRemainingTime(
      getRemainingTimeUtilMsTimestamp(startDateTimestampMs, endDateTimestampMs),
    );
  };

  return (
    <section className="flex justify-between flex-wrap ">
      <div className="flex flex-col items-center">
        <div className="flex">
          {Array.from(remainingTime.days).map((number, index) => {
            return (
              <span
                key={index}
                className="h-14 w-10 rounded-lg bg-white text-4xl flex justify-center items-center"
              >
                {number}
              </span>
            );
          })}
        </div>
        <div className="text-white mt-2">Days</div>
      </div>
      <div className="mt-2 ">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDEgNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMjcyNzI3Ii8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjI1Ii8+Cjwvc3ZnPgo=" />
      </div>
      <div className="flex flex-col items-center ">
        <div className="flex">
          {Array.from(remainingTime.hours).map((number, index) => {
            return (
              <span
                key={index}
                className="h-14 w-10 rounded-lg bg-white text-4xl flex justify-center items-center "
              >
                {number}
              </span>
            );
          })}
        </div>
        <div className="text-white mt-2">Hours</div>
      </div>
      <div className="mt-2">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDEgNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMjcyNzI3Ii8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjI1Ii8+Cjwvc3ZnPgo=" />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex">
          {Array.from(remainingTime.minutes).map((number, index) => {
            return (
              <span
                key={index}
                className="h-14 w-10 rounded-lg bg-white text-4xl flex justify-center items-center"
              >
                {number}
              </span>
            );
          })}
        </div>
        <div className="text-white mt-2">Minutes</div>
      </div>
      <div className="mt-2">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDEgNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMjcyNzI3Ii8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjI1Ii8+Cjwvc3ZnPgo=" />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex">
          {Array.from(remainingTime.seconds).map((number, index) => {
            return (
              <span
                key={index}
                className="h-14 w-10 rounded-lg bg-white text-4xl flex justify-center items-center"
              >
                {number}
              </span>
            );
          })}
        </div>
        <div className="text-white mt-2">Seconds</div>
      </div>
    </section>
  );
}

export default CountdownTimer;
