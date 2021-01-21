import React from 'react';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import format from 'date-fns/format';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import addDays from 'date-fns/addDays';
import isSameMonth from 'date-fns/isSameMonth';
import isSameDay from 'date-fns/isSameDay';
import styles from './Cells.module.css';
import classNames from 'classnames/bind';

const Cells = (props) => {
  const { currentDate } = props;
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const dateFormat = 'd';
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = '';

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const conditionalStyle = classNames(styles.number, {
        [styles.currentDate]: isSameDay(day, new Date()),
        [styles.anotherMonthDate]: !isSameMonth(day, monthStart),
      });
      formattedDate = format(day, dateFormat);

      days.push(
        <div className={conditionalStyle} key={day}>
          {formattedDate}
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className={styles.row} key={day}>
        {days}
      </div>
    );
    days = [];
  }

  return <div>{rows}</div>;
};

export default Cells;
