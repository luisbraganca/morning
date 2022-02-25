import React from 'react';
import useDateTimeString from '../../hooks/useDateTimeString';
import useStyle from './useStyle';

export default function CurrentDateTime() {
  const style = useStyle();
  const { dateString, timeString } = useDateTimeString();
  return (
    <div style={style.root}>
      <h1 style={style.time}>{timeString}</h1>
      <h3 style={style.date}>{dateString}</h3>
    </div>
  );
}
