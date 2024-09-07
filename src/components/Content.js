import React, { useState, useEffect } from 'react';
import Container from "./Container";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const Content = ({ className = "" }) => {
  const [pitches, setPitches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPitches = async () => {
        const token = localStorage.getItem("authToken"); // Retrieve token from local storage
  
        if (!token) {
          setError("No token found. Please log in.");
          setLoading(false);
          return;
        }
         console.log(token);
      try {
        const response = await fetch(
          `https://4c9d-2c0f-2a80-db-1010-f9de-2419-b82b-bc34.ngrok-free.app/api/v1/pitch-owner/pitches?sort_order=desc`,
          {
            method: "GET",
            headers: {
              'Accept': 'application/json',
          'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPitches(data.data); // API response has a `data` field that contains the list of pitches
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
    >{pitches.map((pitch) => (
      <Container
        key={pitch.id}
        image8={pitch.image_url || "/default-image.png"} // Assuming `image_url` is the field for the image, otherwise adjust accordingly
        sport={`SPORT: ${pitch.sport || "Football"}`}
        size={`PITCH SIZE: ${pitch.size || "5x5"}`}
        manager={`PITCH MANAGER: ${pitch.manager_name || "Not available"}`}
        price={`PRIZE: N${pitch.price || "0"}/hr`}
      />
    ))}
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
