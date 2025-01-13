import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = ({ onDateSelect }) => {
  const [date, setDate] = useState(new Date());

  const handleSelect = (newDate) => {
    setDate(newDate);
    onDateSelect(newDate);
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleSelect}
        className="rounded-md"
      />
    </div>
  );
};

export default CalendarView;
