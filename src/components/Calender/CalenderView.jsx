import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import 'react-calendar/dist/Calendar.css';

const CalendarView = ({ onDateSelect }) => {
  const [activeDate, setActiveDate] = useState(new Date());

  const handleDateChange = (date) => {
    setActiveDate(date); // Set the selected date as active
    onDateSelect(date);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <Calendar
        onChange={handleDateChange}
        value={activeDate}
        className="border-none"
        tileClassName={({ date }) =>
          date.toDateString() === activeDate.toDateString()
            ? 'bg-purple-100 text-purple-800 rounded-full'
            : 'rounded-full hover:bg-purple-100'
        }
        formatDay={(locale, date) => format(date, 'd')}
      />
    </div>
  );
};

export default CalendarView;
