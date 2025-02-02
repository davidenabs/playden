import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import FrameComponent from "../components/FrameComponent";
import FrameComponent3 from "../components/FrameComponent3";

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingsPerPage] = useState(10);

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("You are not logged in. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://api.playdenapp.com/api/v1/pitch-owner/bookings`,
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

        if (response.redirected) {
          window.location.href = response.url;
          return;
        }

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data);

        if (data.success && data.data?.bookings) {
          setBookings(data.data.bookings);
        } else {
          setError("No bookings found at this time.");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
        setError("Failed to load bookings. Please try again later.");
        toast.error("Error fetching bookings.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  // Get current bookings to display based on pagination
  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = bookings.slice(indexOfFirstBooking, indexOfLastBooking);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full bg-light-mode-gray-10-f5f5f5 flex flex-col items-start justify-start pb-10">
      <FrameComponent aare="/aare2@2x.png" />
      <FrameComponent3 />
      <section className="self-stretch flex flex-col items-center px-6 py-10">
        <div className="w-full bg-white shadow rounded-lg p-6 overflow-x-auto">
          {error ? (
            <div className="flex items-center justify-center border-none mt-7">
              <p className="text-center text-red-500 text-lg">{error}</p>
            </div>
          ) : currentBookings.length > 0 ? (
            <>
              <table className="min-w-full border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="p-3 border">S/N</th>
                    <th className="p-3 border">Username</th>
                    <th className="p-3 border">Booking ID</th>
                    <th className="p-3 border">Phone Number</th>
                    <th className="p-3 border">Status</th>
                    <th className="p-3 border">Date</th>
                    <th className="p-3 border">Time</th>
                    <th className="p-3 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentBookings.map((booking, index) => (
                    <tr key={index} className="text-center border">
                      <td className="p-3 border">{index + 1}</td>
                      <td className="p-3 border">{booking.user?.username ?? "N/A"}</td>
                      <td className="p-3 border">{booking.booking_code ?? "N/A"}</td>
                      <td className="p-3 border">+{booking.user?.phone_number ?? "N/A"}</td>
                      <td className="p-3 border">
                        <span
                          className={`px-2 py-1 rounded text-white text-sm ${
                            booking.status === "Confirmed" ? "bg-green-500" : "bg-yellow-500"
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="p-3 border">{booking?.date ? new Date(booking.date).toISOString().split('T')[0] : "Date not available"}</td>
                      <td className="p-3 border">{booking.end_time ?? "N/A"}</td>
                      <td className="p-3 border">
                        <Link
                          to="/booking-details"
                          state={{ booking }}
                          className="text-blue-500 underline"
                        >
                          View details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Pagination */}
              <div className="flex justify-center mt-6">
                <nav>
                  <ul className="flex list-none">
                    {Array.from(
                      { length: Math.ceil(bookings.length / bookingsPerPage) },
                      (_, index) => (
                        <li key={index} className="mx-2">
                          <button
                            onClick={() => paginate(index + 1)}
                            className={`px-4 py-2 rounded-lg bg-f2 ${
                              currentPage === index + 1
                                ? "bg-f2 text-gray-500"
                                : "bg-gray-200"
                            }`}
                          >
                            {index + 1}
                          </button>
                        </li>
                      )
                    )}
                  </ul>
                </nav>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-700">No bookings available at the moment.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookingManagement;
