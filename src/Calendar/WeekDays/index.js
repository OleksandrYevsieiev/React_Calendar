import React from 'react';
import addDays from 'date-fns/addDays';
import format from 'date-fns/format';
import startOfWeek from 'date-fns/startOfWeek';

const WeekDays = (props) => {
  const { currentDate } = props;
  const dateFormat = 'dd';
  const days = [];
  let startDate = startOfWeek(currentDate);
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className='column col-center' key={i}>
        {format(addDays(startDate, i), dateFormat)}
      </div>
    );
  }
  return <div className='days row'>{days}</div>;
};

export default WeekDays;
