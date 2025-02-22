import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import FrameComponent from "../components/FrameComponent";
import FrameComponent3 from "../components/FrameComponent3";

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchBookings = useCallback(async () => {
    setLoading(true);
    setError(null);

    const token = localStorage.getItem("token");
    if (!token) {
      setError("You are not logged in. Please log in.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://api.playdenapp.com/api/v1/pitch-owner/bookings?sort_order=desc&page=${currentPage}&per_page=${perPage}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

      const data = await response.json();

      if (data.success && data.data?.bookings) {
        setBookings(data.data.bookings);
        setTotalPages(data.data.last_page);
      } else {
        setError("No bookings found.");
        setBookings([]);
      }
    } catch (error) {
      setError("Failed to load bookings. Please try again later.");
      toast.error("Error fetching bookings.");
    } finally {
      setLoading(false);
    }
  }, [currentPage, perPage]);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handlePerPageChange = (event) => {
    setPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page on perPage change
  };

  const filteredBookings = bookings.filter((booking) =>
    booking.user?.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="w-full bg-light-gray flex flex-col items-start pb-10">
      <FrameComponent aare="/aare2@2x.png" />
      <FrameComponent3 />
      <section className="self-stretch flex flex-col items-center py-10 px-12">
        <div className="w-full bg-white shadow rounded-lg p-6 overflow-x-auto">
          <input
            type="text"
            placeholder="Search by Username"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded-full mb-4"
          />

          {error ? (
            <p className="text-center text-red-500 text-lg">{error}</p>
          ) : filteredBookings.length > 0 ? (
            <>
              <table className="min-w-full border border-gray-300 rounded-lg text-left">
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
                  {filteredBookings.map((booking, index) => (
                    <tr key={index} className="text-left border">
                      <td className="p-3 border">{booking.user?.username ?? "N/A"}</td>
                      <td className="p-3 border">{booking.booking_code ?? "N/A"}</td>
                      <td className="p-3 border">{booking.user?.phone_number ?? "N/A"}</td>
                      <td className="p-3 border">
                        <span
                          className={`p-2 text-white text-sm font-semibold rounded-full ${{
                              pending: "bg-yellow-500",
                              confirmed: "bg-blue-500",
                              cancelled: "bg-gray-500",
                              completed: "bg-green-500",
                              rejected: "bg-red-500",
                              paid: "bg-purple-500",
                            }[booking.status] || "bg-gray-300"
                            }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="p-3 border">
                        {new Date(booking.date).toISOString().split("T")[0]}
                      </td>
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

              {/* Pagination Controls */}
              <div className="flex justify-between items-center w-full mt-4">
                <div>
                  <label htmlFor="perPage" className="mr-2">
                    Items per page:
                  </label>
                  <select
                    id="perPage"
                    value={perPage}
                    onChange={handlePerPageChange}
                    className=" border rounded-full"
                  >
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                  >
                    Previous
                  </button>
                  <span className="p-2">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-700">No bookings available.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default BookingManagement;
