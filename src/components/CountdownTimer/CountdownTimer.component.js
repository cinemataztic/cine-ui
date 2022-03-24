import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getRemainingTimeUtilMsTimestamp } from './Utils/CountdownTimerUtils';
import './CountdownTimer.styles.css';

const defaultRemainingTime = {
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
};

const dateTimeSegments = ['days', 'hours', 'minutes', 'seconds'];
function CountdownTimer({ startDate, endDate }) {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  // Start date in milliseconds
  const startDateTimestampMs = new Date(startDate).getTime();
  // End date in milliseconds
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
    <section className="flex flex-wrap">
      {dateTimeSegments.map(
        (dateTimeSegment, dateTimeSegmentIndex, { length }) => {
          return (
            <div className="flex ml-6" key={dateTimeSegment}>
              <div className="flex flex-col items-center">
                <div className="flex">
                  {Array.from(remainingTime[dateTimeSegment]).map(
                    (digit, digitIndex) => {
                      return (
                        <span
                          key={digitIndex}
                          className={`h-14 w-10 rounded-lg text-4xl flex justify-center items-center digitContainer ${
                            dateTimeSegmentIndex !== 0
                              ? 'bg-buttonSecondary'
                              : 'bg-inverted'
                          }`}
                        >
                          {digit}
                        </span>
                      );
                    },
                  )}
                </div>
                <div className="text-default mt-2 capitalize">
                  {dateTimeSegment}
                </div>
              </div>
              {dateTimeSegmentIndex + 1 !== length ? (
                <div className="mt-2 ml-6 ">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDEgNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMjcyNzI3Ii8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwLjI1Ii8+Cjwvc3ZnPgo=" />
                </div>
              ) : null}
            </div>
          );
        },
      )}
    </section>
  );
}

export default CountdownTimer;

CountdownTimer.propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};
