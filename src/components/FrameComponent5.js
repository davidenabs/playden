import React, { useState } from 'react';
import CalendarView from './Calender/CalenderView';
import { Calendar, CheckCircle, XCircle, Clock3 } from 'lucide-react';

const FrameComponent5 = ({ className = "" }) => {
  const [selectedDateBookings, setSelectedDateBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle date selection
  const handleDateSelect = async (date) => {
    try {
      setIsLoading(true);
      const formattedDate = date.toISOString().split('T')[0];
      console.log(`Fetching bookings for date: ${formattedDate}`);

      const response = await fetch(`https://api.playdenapp.com/api/v1/pitch-admin/bookings?date=${formattedDate}`);
      console.log('Raw API Response:', response);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Parsed Bookings Data:', data);
      setSelectedDateBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setSelectedDateBookings([]);
    } finally {
      setIsLoading(false);
    }
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
    <div className={`min-h-screen md:w-full p-4 md:p-2 md:mr-6 ${className}`}>
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
            <CalendarView onDateSelect={handleDateSelect} />
          </div>

          {/* Upcoming Bookings Section with increased width */}
          <div className="flex-[3] min-w-[660px] w-full">
            <div className="w-full bg-gray-100 rounded-lg p-4 md:p-3 shadow-lg">
              <div className="flex items-center justify-between mb-4 w-full">
                <h3 className="text-lg font-semibold">Upcoming Bookings</h3>
                <Calendar className="w-5 h-5 text-purple-500" />
              </div>
              {isLoading ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                </div>
              ) : selectedDateBookings.length === 0 ? (
                <p className="text-gray-500 text-center">Select a date to view bookings.</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedDateBookings.map((booking, i) => (
                    <div key={i} className="flex flex-col bg-gray-50 rounded-lg p-4 shadow-md">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm md:text-base">{booking.name}</h4>
                        {getStatusIcon(booking.status)}
                      </div>
                      <p className="text-xs md:text-sm text-gray-600">
                        <strong>Booking Code:</strong> {booking.bookingCode}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        <strong>Schedule Date:</strong> {booking.scheduleDate}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        <strong>Schedule Time:</strong> {booking.scheduleTime}
                      </p>
                      <p className="text-xs md:text-sm text-gray-600">
                        <strong>Status:</strong> {booking.status}
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
