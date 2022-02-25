import { useEffect, useState } from "react";

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const yearMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const numberFormat = (number, digits) =>
  "0".repeat(digits - number.toString().length) + number.toString();

export default function useDateTimeString() {
  const [dateString, setDateString] = useState("");
  const [timeString, setTimeString] = useState("");

  const updateDateTime = () => {
    var date = new Date();
    var weekDay = weekdays[date.getDay()];
    var yearMonth = yearMonths[date.getMonth()];
    setDateString(
      `${weekDay}, ${date.getDate()} ${yearMonth} ${date.getFullYear()}`
    );
    setTimeString(
      `${numberFormat(date.getHours(), 2)}:${numberFormat(
        date.getMinutes(),
        2
      )}`
    );
  };

  useEffect(() => {
    const intervalId = setInterval(updateDateTime, 1000);
    updateDateTime();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return {
    dateString,
    timeString,
  };
}
