import React, { useState, useEffect } from 'react';
import Container from "./Container";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { getImageUrl } from '../utills/imageUtils';

const Content = ({ className = "" }) => {
  const [pitches, setPitches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPitches = async () => {
      const token = localStorage.getItem("token");
      console.log("Token retrieved:", token);

      if (!token) {
        setError("No token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://api.playdenapp.com/api/v1/pitch-owner/pitches?sort_order=desc`,
          {
            method: "GET",
            headers: {
              'Accept': "application/json",
              "Content-Type": "application/json",
              'Authorization': `Bearer ${token}`,
              'ngrok-skip-browser-warning': 'true'
            },
          }
        );

        console.log("Response status:", response.status);
        console.log("Response headers:", response.headers);

        if (!response.ok) {
          const errorDetails = await response.text();
          console.error("Error details:", errorDetails);
          throw new Error(
            response.status === 403
              ? "Unauthorized access. Please check your credentials."
              : `HTTP error! status: ${response.status}`
          );
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const textResponse = await response.text();
          console.error("Non-JSON response:", textResponse);
          throw new Error("Received non-JSON response from the API.");
        }

        const data = await response.json();
        console.log("Fetched data:", data);

        if (data?.data && Array.isArray(data.data)) {
          setPitches(data.data);
        } else {
          console.warn("Unexpected API response format or no data.");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching pitches:", error.message);
        setError(error.message);
        setLoading(false);
        toast.error("Failed to load pitches. Please try again later.");
      }
    };

    fetchPitches();
  }, []);

  if (loading) {
    return <div className='text-center fontSize-xl'>Loading pitches...</div>;
  }

  if (error) {
    return <div className='text-center fontSize-xl'>Error: {error}</div>;
  }

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[15.3px] max-w-full mt-[20px] text-center text-base text-text font-poppins ${className}`}
    >
      {pitches.length > 0 ? (
        pitches.map((pitch) => (
          <Container
            key={pitch.id}
            image8={getImageUrl(pitch.image) || "/default-image.png"}
            name={`Pitch Name: ${pitch.name || "Football"}`}
            size={`Pitch Size: ${pitch.size || "Unknown"}`}
            amount_per_hour={`Per Hour: ₦${pitch.amount_per_hour || "0"}`}
          />
        ))
      ) : (
        <div>No pitches available for this particular user yet!</div>
      )}
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
