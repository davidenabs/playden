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

      if (!token) {
        setError("You are not logged in. Please log in to view pitches.");
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

        if (!response.ok) {
          throw new Error(
            response.status === 403
              ? "Unauthorized access. Please log in again."
              : "Something went wrong while fetching pitches. Please try again later."
          );
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Unexpected response from the server. Please contact support.");
        }

        const data = await response.json();
        if (data?.data && Array.isArray(data.data)) {
          setPitches(data.data);
        } else {
          setError("No pitches found. Please check back later.");
        }

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        toast.error("An error occurred. Please try again.");
      }
    };

    fetchPitches();
  }, []);

  if (loading) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <div className='loader mb-4'></div>
        <p className='text-center fontSize-xl'>Loading pitches...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='text-center fontSize-xl text-red-600 mt-10 mr-[500px] mb-10'>
        {error}
      </div>
    );
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