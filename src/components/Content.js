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
              'Authorization': `Bearer ${token}`, // Include the token
              'ngrok-skip-browser-warning': 'true'  // ngrok header
            },
          }
        );
  
        const contentType = response.headers.get("content-type");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        // Check if the response is JSON
        if (!contentType || !contentType.includes("application/json")) {
          const textResponse = await response.text(); // Read as text to debug
          console.error("Non-JSON response:", textResponse);
          throw new Error("Received non-JSON response from the API.");
        }
  
        // Parse JSON response
        const data = await response.json();
        console.log("Fetched pitches data:", data);

            // Log the parsed JSON
    // console.log("Parsed JSON data:", data);
  
        if (data && data.data && Array.isArray(data.data)) {
          setPitches(data.data); // Set pitches data from API response
        } else {
          toast.info("No items found.");
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
  

  // Show loading message while pitches are being fetched
  if (loading) {
    return <div>Loading pitches...</div>;
  }

  // Show error message if fetching pitches failed
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[15.3px] max-w-full mt-[20px] text-center text-base text-text font-poppins ${className}`}
    >{pitches.length > 0 ? (
      pitches.map((pitch) => (
        <Container
          key={pitch.id}
          image8={pitch.image_url || "/default-image.png"} // Fallback to a default image if not available
          sport={`SPORT: ${pitch.sport || "Football"}`} // Fallback to "Football" if sport is undefined
          size={`PITCH SIZE: ${pitch.size || "5x5"}`} // Fallback to "5x5" if size is undefined
          manager={`PITCH MANAGER: ${pitch.manager_name || "Not available"}`} // Fallback if manager_name is undefined
          price={`PRICE: N${pitch.price || "0"}/hr`} // Fallback to "0" if price is undefined
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
