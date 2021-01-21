import React, { useState } from 'react';
import addMonths from 'date-fns/addMonths';
import subMonths from 'date-fns/subMonths';
import Header from './Header';
import WeekDays from './WeekDays';
import Cells from './Cells';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };
  return (
    <>
      <Header
        currentDate={currentDate}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <WeekDays currentDate={currentDate} />
      <Cells currentDate={currentDate} />
    </>
  );
};

export default Calendar;
