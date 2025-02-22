import React, { useState, useEffect } from 'react';
import CalendarView from './Calender/CalenderView';
import { Calendar, CheckCircle, XCircle, Clock3 } from 'lucide-react';
import { getSession } from '../utills/sessionUntil';

const FrameComponent5 = ({ className = "", allBookings, isLoading, error }) => {
  const [selectedDateBookings, setSelectedDateBookings] = useState([]);


  // Function to handle date selection
  const handleDateSelect = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    const bookingsForDate = allBookings.filter(booking => {
      const formattedBookingDate = booking.date?.split('T')[0];

      return formattedBookingDate === formattedDate;
    });
    setSelectedDateBookings(bookingsForDate);
  };

  // Function to display status icons
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock3 className="w-5 h-5 text-yellow-500" />;
    }
  };

  return (
    <div className={`min-h-[400px] md:w-full p-4 md:p-2 md:mr-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <header className="mb-6 md:mb-8">
          <div className="flex items-center gap-2 mt-2">
            <Calendar className="w-5 h-5 text-deep_purple-400" />
            <span className="text-white text-sm md:text-base">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </header>

        {/* Main components row */}
        <div className="flex flex-row gap-6 mb-6 w-full">
          {/* Calendar Section */}
          <div className="flex-1 min-w-[390px]">
            <CalendarView onDateSelect={handleDateSelect} allBookings={allBookings} />
          </div>

          {/* Upcoming Bookings Section */}
          <div className="flex-[2] min-w-[610px] w-full">
            <div className="w-full bg-gray-100 rounded-lg p-4 md:p-3 shadow-lg">
              <div className="flex items-center justify-between mb-4 w-full">
                <h3 className="text-lg font-black">Upcoming Bookings</h3>
                <Calendar className="w-5 h-5 text-purple-500" />
              </div>
              {isLoading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                </div>
              ) : error ? (
                <p className="text-red-500 text-center">{error}</p>
              ) : selectedDateBookings.length === 0 ? (
                <p className="font-black text-center">Select a date to view bookings.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedDateBookings.map((booking, i) => (
                    <div key={i} className="flex flex-col bg-gray-50 rounded-lg p-4 shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm md:text-base">{booking.pitch.name}</h4>
                        {/* {getStatusIcon(booking.status)} */}
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">
                        <strong>Booking Code:</strong> {booking.booking_code}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        <strong>Schedule Date:</strong> {booking.date.split('T')[0]}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        <strong>Schedule Time:</strong> {booking.start_time}-{booking.end_time}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        <strong>Status:</strong> <span
                          className={`p-2 text-white text-sm font-semibold rounded-full ${{
                            pending: "bg-yellow-500",
                            confirmed: "bg-blue-500",
                            cancelled: "bg-gray-500",
                            completed: "bg-green-500",
                            rejected: "bg-red-500",
                            paid: "bg-purple-500",
                          }[booking.status] || "bg-gray-300"
                            }`}
                        >{booking.status}</span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;

// import React, { useState } from 'react';
// import CalendarView from './Calender/CalenderView';
// import { Calendar, CheckCircle, XCircle, Clock3 } from 'lucide-react';

// const FrameComponent5 = ({ className = "" }) => {
//   const [selectedDateBookings, setSelectedDateBookings] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Function to handle date selection
//   const handleDateSelect = async (date) => {
//     try {
//       setIsLoading(true);
//       setError(null);
//       const formattedDate = date.toISOString().split('T')[0];
//       console.log(`Fetching bookings for date: ${formattedDate}`);

//       const response = await fetch(`https://api.playdenapp.com/api/v1/pitch-owner/pitches/bookings`);
//       console.log('Raw API Response:', response);

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log('Parsed Bookings Data:', data);
//       setSelectedDateBookings(data);
//     } catch (error) {
//       console.error('Error fetching bookings:', error);
//       setError("Failed to fetch bookings. Please try again.");
//       setSelectedDateBookings([]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Function to display status icons
//   const getStatusIcon = (status) => {
//     switch (status.toLowerCase()) {
//       case 'confirmed':
//         return <CheckCircle className="w-5 h-5 text-green-500" />;
//       case 'cancelled':
//         return <XCircle className="w-5 h-5 text-red-500" />;
//       default:
//         return <Clock3 className="w-5 h-5 text-yellow-500" />;
//     }
//   };

//   return (
//     <div className={`min-h-[400px] md:w-full p-4 md:p-2 md:mr-6 ${className}`}>
//       <div className="max-w-7xl mx-auto">
//         <header className="mb-6 md:mb-8">
//           <div className="flex items-center gap-2 mt-2">
//             <Calendar className="w-5 h-5 text-deep_purple-400" />
//             <span className="text-white text-sm md:text-base">
//               {new Date().toLocaleDateString('en-US', {
//                 weekday: 'long',
//                 year: 'numeric',
//                 month: 'long',
//                 day: 'numeric',
//               })}
//             </span>
//           </div>
//         </header>

//         {/* Main components row */}
//         <div className="flex flex-row gap-6 mb-6 w-full">
//           {/* Calendar Section */}
//           <div className="flex-1 min-w-[390px]">
//             <CalendarView onDateSelect={handleDateSelect} />
//           </div>

//           {/* Upcoming Bookings Section */}
//           <div className="flex-[2] min-w-[610px] w-full">
//             <div className="w-full bg-gray-100 rounded-lg p-4 md:p-3 shadow-lg">
//               <div className="flex items-center justify-between mb-4 w-full">
//                 <h3 className="text-lg font-black">Upcoming Bookings</h3>
//                 <Calendar className="w-5 h-5 text-purple-500" />
//               </div>
//               {isLoading ? (
//                 <div className="flex justify-center items-center py-8">
//                   <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
//                 </div>
//               ) : error ? (
//                 <p className="text-red-500 text-center">{error}</p>
//               ) : selectedDateBookings.length === 0 ? (
//                 <p className="font-black text-center">Select a date to view bookings.</p>
//               ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {selectedDateBookings.map((booking, i) => (
//                     <div key={i} className="flex flex-col bg-gray-50 rounded-lg p-4 shadow-md">
//                       <div className="flex items-center justify-between mb-2">
//                         <h4 className="font-semibold text-sm md:text-base">{booking.name}</h4>
//                         {getStatusIcon(booking.status)}
//                       </div>
//                       <p className="text-xs md:text-sm text-gray-600">
//                         <strong>Booking Code:</strong> {booking.bookingCode}
//                       </p>
//                       <p className="text-xs md:text-sm text-gray-600">
//                         <strong>Schedule Date:</strong> {booking.scheduleDate}
//                       </p>
//                       <p className="text-xs md:text-sm text-gray-600">
//                         <strong>Schedule Time:</strong> {booking.scheduleTime}
//                       </p>
//                       <p className="text-xs md:text-sm text-gray-600">
//                         <strong>Status:</strong> {booking.status}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FrameComponent5;
