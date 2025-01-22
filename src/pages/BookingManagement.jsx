import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import FrameComponent3 from "../components/FrameComponent3";
import { toast } from "react-toastify"; // To display error messages if necessary

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch bookings from the API
    const fetchBookings = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("You are not logged in. Please log in to view your bookings.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://api.playdenapp.com/api/v1/pitch-owner/bookings/`,
          {
            method: "GET",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
              "ngrok-skip-browser-warning": "true",
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            response.status === 403
              ? "Unauthorized access. Please log in again."
              : "Something went wrong while fetching bookings. Please try again later."
          );
        }

        const data = await response.json();
        console.log(data);
        if (data.success) {
          setBookings(data.bookings || []);
        } else {
          setError("No bookings found at this time.");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setError("An error occurred while fetching bookings. Please try again later.");
        toast.error("Failed to load bookings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="loader"></div>
        <p className="ml-4 text-lg">Loading bookings...</p>
      </div>
    );
  }

  

  return (
    <div className="w-full bg-light-mode-gray-10-f5f5f5 overflow-hidden flex flex-col items-start justify-start pb-10">
      <FrameComponent aare="/aare2@2x.png" />
      <FrameComponent3 />
      <section className="self-stretch flex flex-col items-center px-6 py-10">
      <div className="w-full bg-white shadow rounded-lg p-6">
  {error ? (
    <div className="flex items-center justify-center border-none mt-7">
      <p className="text-center text-red-500 text-lg">{error}</p>
    </div>
  ) : bookings.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {bookings.map((booking, index) => (
        <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
          <p><strong>S/N:</strong> {index + 1}</p>
          <p><strong>Username:</strong> {booking.user.username}</p>
          <p><strong>Booking ID:</strong> {booking.booking_code}</p>
          <p><strong>Phone Number:</strong> +{booking.user.phone_number}</p>
          <p>
            <strong>Status:</strong>
            <span
              className={`px-2 py-1 rounded ${
                booking.status === "Confirmed"
                  ? "bg-green-500 text-white"
                  : "bg-yellow-500 text-black"
              }`}
            >
              {booking.status}
            </span>
          </p>
          <p><strong>Date:</strong> {booking.date}</p>
          <p><strong>Time:</strong> {booking.end_time}</p>
          <Link
            to="/booking-details"
            state={{ booking }}
            className="text-blue-500 underline mt-2 block"
          >
            View details
          </Link>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-700">No bookings available at the moment.</p>
  )}
</div>
      </section>
    </div>
  );
};

export default BookingManagement;