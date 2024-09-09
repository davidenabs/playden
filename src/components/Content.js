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
      const token = localStorage.getItem("authToken");
      if (!token) {
        setError("No token found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}api/v1/pitch-owner/pitches?sort_order=desc`,
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

        const contentType = response.headers.get("content-type");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        if (!contentType || !contentType.includes("application/json")) {
          const textResponse = await response.text();
          console.error("Non-JSON response:", textResponse);
          throw new Error("Received non-JSON response from the API.");
        }

        const data = await response.json();
        console.log("Fetched pitches data:", data);

        if (data && data.data && Array.isArray(data.data)) {
          setPitches(data.data);
          const pitchId = data[0].id;  // Fetching the first pitch's ID, or whichever pitch you need
      console.log("Pitch ID:", pitchId);

      // Optionally, store the pitch ID in localStorage
      localStorage.setItem("pitchId", pitchId);
      
      // Now you can use this pitchId for other operations
        } else {
      console.log("No pitches found for this user.");
    }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching pitches:", error);
        setError(error.message);
        setLoading(false);
        toast.error("Failed to load pitches. Please try again later.");
      }
    };

    fetchPitches();
  }, []);

  if (loading) {
    return <div>Loading pitches...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[15.3px] max-w-full mt-[20px] text-center text-base text-text font-poppins ${className}`}
    >
      {pitches.length > 0 ? (
        pitches.map((pitch) => (
          <Container
            key={pitch.id}
            image8={getImageUrl(pitch.image) || "/default-image.png"} // Use the image URL from the API or fallback
            name={`Pitch Name: ${pitch.name || "Football"}`} // Use pitch.sport if available
            size={`PITCH SIZE: ${pitch.size || "Unknown"}`} // Use pitch.size from the API
            manager={`PITCH MANAGER: ${pitch.manager_name || "Not available"}`} // Use pitch.manager_name if available
            amount_per_hour={` N${pitch.amount_per_hour || "0"}`} // Use pitch.amount_per_hour for price
          />
        ))
      ) : (
        <div>No pitches available for this user.</div>
      )}
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
