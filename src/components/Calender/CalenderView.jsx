import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = ({ onDateSelect, allBookings }) => {
  const [date, setDate] = useState(new Date());

  const handleSelect = (newDate) => {
    setDate(newDate);
    onDateSelect(newDate);
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const formattedDate = date.toISOString().split('T')[0];
      const bookingsForDate = allBookings.filter(booking => booking.scheduleDate === formattedDate);
      if (bookingsForDate.length > 0) {
        return (
          <div className="flex justify-center items-center">
            <span className="text-xs text-white bg-purple-500 rounded-full px-2 py-1">
              {bookingsForDate.length}
            </span>
          </div>
        );
      }
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <Calendar
        value={date}
        onChange={handleSelect}
        tileContent={tileContent}
        className="rounded-md"
      />
    </div>
  );
};

export default CalendarView;
// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// const CalendarView = ({ onDateSelect }) => {
//   const [date, setDate] = useState(new Date());

//   const handleSelect = (newDate) => {
//     setDate(newDate);
//     onDateSelect(newDate);
//   };

//   return (
//     <div className="bg-white rounded-lg p-4 shadow-lg">
//       <Calendar
//         mode="single"
//         selected={date}
//         onSelect={handleSelect}
//         className="rounded-md"
//       />
//     </div>
//   );
// };

// export default CalendarView;
