import React from 'react';
import format from 'date-fns/format';
import styles from './Header.module.css';

const Header = (props) => {
  const dateFormat = 'MMMM yyyy';
  const { currentDate, prevMonth, nextMonth } = props;

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={prevMonth}>
        Previous month
      </button>

      <div className={styles.monthYear}>
        <span>{format(currentDate, dateFormat)}</span>
      </div>

      <button className={styles.button} onClick={nextMonth}>
        Next month
      </button>
    </div>
  );
};

export default Header;
