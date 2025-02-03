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
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBookings = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("You are not logged in. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("https://api.playdenapp.com/api/v1/pitch-owner/bookings", {
          method: "GET",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            "ngrok-skip-browser-warning": "true",
          },
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.success && data.data?.bookings) {
          setBookings(data.data.bookings);
        } else {
          setError("No bookings found at this time.");
        }
      } catch (error) {
        setError("Failed to load bookings. Please try again later.");
        toast.error("Error fetching bookings.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const filteredBookings = bookings.filter((booking) =>
    booking.user?.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
  const currentBookings = filteredBookings.slice(indexOfFirstBooking, indexOfLastBooking);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="w-full bg-light-gray flex flex-col items-start pb-10">
      <FrameComponent aare="/aare2@2x.png" />
      <FrameComponent3 />
      <section className="self-stretch flex flex-col items-center px-6 py-10">
        <div className="w-full bg-white shadow rounded-lg p-6 overflow-x-auto">
          <input
            type="text"
            placeholder="Search by Username"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded w-42 mb-4"
          />

          {error ? (
            <p className="text-center text-red-500 text-lg">{error}</p>
          ) : currentBookings.length > 0 ? (
            <table className="min-w-full border border-gray-300 rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3 border">Username</th>
                  <th className="p-3 border">Booking ID</th>
                  <th className="p-3 border">Phone</th>
                  <th className="p-3 border">Status</th>
                  <th className="p-3 border">Date</th>
                  <th className="p-3 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentBookings.map((booking, index) => (
                  <tr key={index} className="text-center border">
                    <td className="p-3 border">{booking.user?.username ?? "N/A"}</td>
                    <td className="p-3 border">{booking.booking_code ?? "N/A"}</td>
                    <td className="p-3 border">+{booking.user?.phone_number ?? "N/A"}</td>
                    <td className="p-3 border text-white bg-green-500 p-1 rounded">
                      {booking.status}
                    </td>
                    <td className="p-3 border">{new Date(booking.date).toISOString().split('T')[0]}</td>
                    <td className="p-3 border">
                      <Link to="/booking-details" state={{ booking }} className="text-blue-500 underline">
                        View details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-700">No bookings available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookingManagement;
