import React from 'react';
import addDays from 'date-fns/addDays';
import format from 'date-fns/format';
import startOfWeek from 'date-fns/startOfWeek';
import styles from './WeekDays.module.css';

const WeekDays = (props) => {
  const { currentDate } = props;
  const dateFormat = 'eeee';
  const days = [];
  let startDate = startOfWeek(currentDate);
  for (let i = 0; i < 7; i++) {
    days.push(
      <div className={styles.day} key={i}>
        {format(addDays(startDate, i), dateFormat)}
      </div>
    );
  }
  return <div className={styles.daysRow}>{days}</div>;
};

export default WeekDays;
