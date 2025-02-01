import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FrameComponent from "../components/FrameComponent";
import FrameComponent2 from "../components/FrameComponent2";

const PitchHistory = () => {
  const { pitchId } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [pitchDetails, setPitchDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 10;
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("No token found. Please log in.");
      setLoading(false);
      return;
    }

    const fetchPitchData = async () => {
      try {
        const pitchResponse = await fetch(
          `${process.env.REACT_APP_API_URL}/api/v1/pitch-owner/pitches/${pitchId}`,
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
        if (!pitchResponse.ok) throw new Error("Failed to fetch pitch details");
        const pitchData = await pitchResponse.json();
        setPitchDetails(pitchData?.data || null);

        let allBookings = [];
        let page = 1;
        let lastPage = 1;
        do {
          const bookingsResponse = await fetch(
            `https://api.playdenapp.com/api/v1/pitch-owner/pitches/bookings/${pitchId}?page=${page}`,
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
          if (!bookingsResponse.ok) throw new Error("Failed to fetch booking history");
          const bookingsData = await bookingsResponse.json();
          allBookings = [...allBookings, ...(bookingsData?.data?.pitch_bookings || [])];
          lastPage = bookingsData?.data?.last_page || 1;
          page++;
        } while (page <= lastPage);

        setTransactions(allBookings);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        toast.error("Failed to load pitch details or booking history.");
      } finally {
        setLoading(false);
      }
    };

    if (pitchId) fetchPitchData();
  }, [pitchId]);

  const handleViewDetails = (transaction) => {
    navigate("/booking-details", { state: { booking: transaction } });
  };
  

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);

  return (
    <div className="w-full bg-light-mode-gray-10-f5f5f5 flex flex-col items-start justify-start">
      <FrameComponent aare="/aare@2x.png" />
      <main className="self-stretch flex flex-col items-end justify-start gap-6 max-w-full">
        <FrameComponent2 />
        <section className="flex justify-center bg-white py-5 px-5 mr-[50px] max-w-full text-center text-base">
          <div className="w-[1145px] rounded-lg bg-white shadow-md p-6 max-w-full">
            <header className="flex space-x-4 text-left gap-1 mb-6">
              <img src={pitchDetails?.image} alt="Pitch" className="h-[155px] rounded-xl object-cover" />
              <div>
                <h3 className="text-lg font-bold">{`Pitch Name: ${pitchDetails?.name || "N/A"}`}</h3>
                <p>{`Size: ${pitchDetails?.size || "N/A"}`}</p>
                <p>{`Amount per hour: ₦${pitchDetails?.amount_per_hour || "N/A"}`}</p>
              </div>
            </header>
            <h3 className="text-xl font-medium my-4">Pitch Booking History</h3>
            {error ? (
              <p className="text-center text-red-500 text-lg">{error}</p>
            ) : currentTransactions.length > 0 ? (
              <div>
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-4 py-2">ID</th>
                      <th className="border px-4 py-2">User ID</th>
                      <th className="border px-4 py-2">Sport</th>
                      <th className="border px-4 py-2">Date</th>
                      <th className="border px-4 py-2">Amount</th>
                      <th className="border px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTransactions.map((transaction, index) => (
                      <tr key={index} className="border">
                        <td className="border px-4 py-2 bg-gray-100">{transaction.id}</td>
                        <td className="border px-4 py-2 ">{transaction.user_id}</td>
                        <td className="border px-4 py-2 bg-gray-100">{transaction.sport}</td>
                        <td className="border px-4 py-2">{transaction.date}</td>
                        <td className="border px-4 py-2 bg-gray-100">₦{transaction.total_cost || "N/A"}</td>
                        <td className="border px-4 py-2">
                          <button className="text-blue-500 underline" onClick={() => handleViewDetails(transaction)}>View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex justify-center mt-4">
                  <button
                    className="px-4 py-2 mx-2 bg-f2 rounded text-gray-100 cursor-pointer"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Previous
                  </button>
                  <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
                  <button
                    className="px-4 py-2 mx-2 bg-f2 rounded text-gray-100 cursor-pointer"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-600">No transactions available yet!</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PitchHistory;
