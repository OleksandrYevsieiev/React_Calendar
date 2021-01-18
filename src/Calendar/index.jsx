import React from 'react';
import CurrentDay from './CurrentDay';
import Month from './Month';
import propTypes from 'prop-types';
import styles from './Calendar.module.scss';

const Calendar = ({ currentDate }) => {
  return (
    <article className={styles.container}>
      <CurrentDay currentDate={currentDate} />
      <Month date={currentDate} currentDate={currentDate} />
    </article>
  );
};

Calendar.propTypes = { currentDate: propTypes.instanceOf(Date) };
Calendar.defaultProps = { currentDate: new Date() };

export default Calendar;
