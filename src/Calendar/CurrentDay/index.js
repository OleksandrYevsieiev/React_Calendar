import React from 'react';
import propTypes from 'prop-types';
import styles from './CurrentDay.module.scss';
import { format } from 'date-fns';

const CurrentDay = ({ currentDate }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>{format(currentDate, 'iiii')}</div>
      <div className={styles.number}>{format(currentDate, 'd')}</div>
    </div>
  );
};

CurrentDay.propTypes = { currentDate: propTypes.instanceOf(Date).isRequired };

export default CurrentDay;
