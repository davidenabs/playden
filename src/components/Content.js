import React, { useState, useEffect } from "react";
import Container from "./Container";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { getImageUrl } from "../utills/imageUtils";

const Content = ({ className = "" }) => {
  const [pitches, setPitches] = useState([]);
  const [filteredPitches, setFilteredPitches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPitches = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("You are not logged in. Please log in to view pitches.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://api.playdenapp.com/api/v1/pitch-owner/pitches?sort_order=desc&page=${currentPage}&per_page=${perPage}`,
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

        if (!response.ok) {
          throw new Error(
            response.status === 403
              ? "Unauthorized access. Please log in again."
              : "Something went wrong while fetching pitches. Please try again later."
          );
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Unexpected response format. Please contact support.");
        }

        const data = await response.json();
        console.log("Fetched Data:", data);

        if (data?.success && data?.data?.pitches && Array.isArray(data.data.pitches)) {
          setPitches(data.data.pitches);
          setFilteredPitches(data.data.pitches);
          setTotalPages(data.data.last_page);
        } else {
          throw new Error("No pitches found. Please check back later.");
        }
      } catch (error) {
        console.error("Error fetching pitches:", error);
        setError(error.message || "An error occurred. Please try again.");
        toast.error(error.message || "An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPitches();
  }, [currentPage, perPage]);

  useEffect(() => {
    const filtered = pitches.filter((pitch) =>
      pitch.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPitches(filtered);
  }, [searchTerm, pitches]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handlePerPageChange = (event) => {
    setPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="loader mb-4"></div>
        <p className="text-center text-xl">Loading pitches...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-xl text-red-600 mt-10">{error}</div>;
  }

  return (
    <div className={`flex-1 flex flex-col items-start justify-start gap-4 max-w-full mt-5 text-center text-base font-poppins ${className}`}>
      {/* Search Input */}
      <div className="w-42 mb-4">
        <input
          type="text"
          placeholder="Search pitches by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-42 p-2 border rounded"
        />
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center w-full mb-4">
        <div>
          <label htmlFor="perPage" className="mr-2">Items per page:</label>
          <select
            id="perPage"
            value={perPage}
            onChange={handlePerPageChange}
            className="p-2 border rounded"
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

      {/* Pitches List */}
      {filteredPitches.length > 0 ? (
        filteredPitches.map((pitch) => (
          <Container
            key={pitch.id}
            image8={getImageUrl(pitch.image) || "/default-image.png"}
            name={`Pitch Name: ${pitch.name || "Unknown"}`}
            size={`Pitch Size: ${pitch.size || "Unknown"}`}
            amount_per_hour={`Per Hour: ₦${pitch.amount_per_hour || "0"}`}
            pitchId={pitch.id}
          />
        ))
      ) : (
        <div>No pitches available matching your search.</div>
      )}
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
