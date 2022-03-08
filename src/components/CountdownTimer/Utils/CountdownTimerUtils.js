import dayjs from 'dayjs';

export function getRemainingTimeUtilMsTimestamp(
  startDateTimestampMs,
  endDateTimestampMs,
) {
  const startDateTimestampDayjs = dayjs(startDateTimestampMs);
  const endDateTimestampDayjs = dayjs(endDateTimestampMs);
  const nowDayjs = dayjs();

  // Error handling for invalid dates
  if (isNaN(startDateTimestampDayjs)) {
    throw new Error(`Invalid start date`);
  } else if (isNaN(endDateTimestampDayjs)) {
    throw new Error(`Invalid end date`);
  }

  // Return "--" when start date is later than today and
  // end date is earlier than today.
  if (
    startDateTimestampDayjs.isAfter(nowDayjs) ||
    endDateTimestampDayjs.isBefore(nowDayjs)
  ) {
    return {
      days: '--',
      hours: '--',
      minutes: '--',
      seconds: '--',
    };
  }

  return {
    days: getRemainingDays(nowDayjs, endDateTimestampDayjs),
    hours: getRemainingHours(nowDayjs, endDateTimestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, endDateTimestampDayjs),
    seconds: getRemainingSeconds(nowDayjs, endDateTimestampDayjs),
  };
}

function getRemainingSeconds(nowDayjs, endDateTimestampDayjs) {
  const seconds = endDateTimestampDayjs.diff(nowDayjs, 'seconds') % 60;
  return paddingWithZeros(seconds, 2);
}
function getRemainingMinutes(nowDayjs, endDateTimestampDayjs) {
  const minutes = endDateTimestampDayjs.diff(nowDayjs, 'minutes') % 60;
  return paddingWithZeros(minutes, 2);
}
function getRemainingHours(nowDayjs, endDateTimestampDayjs) {
  const hours = endDateTimestampDayjs.diff(nowDayjs, 'hours') % 24;
  return paddingWithZeros(hours, 2);
}
function getRemainingDays(nowDayjs, endDateTimestampDayjs) {
  const days = endDateTimestampDayjs.diff(nowDayjs, 'days');
  return paddingWithZeros(days, 2);
}

// Padding with zeros, when the number is a single digit
function paddingWithZeros(number, minLength) {
  const numberString = number.toString();
  if (numberString.length >= minLength) return numberString;
  return '0'.repeat(minLength - numberString.length) + numberString;
}
