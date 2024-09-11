import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useNavigate, useLocation } from "react-router-dom";
import { Text, Button, Heading } from "../components";
import 'animate.css';

const ResetOTP = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [error, setError] = useState(null); // For handling errors
  const [loading, setLoading] = useState(false); // For button loading state
  const [resendAvailable, setResendAvailable] = useState(false); // Track if resend button is enabled
  const [timer, setTimer] = useState(60); // Timer for resend button countdown (60 seconds)
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const location = useLocation();
  const phone_number = location.state?.phone_number; // Retrieve phone number from location.state

  // Handle OTP change
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([
      ...otp.map((d, idx) => (idx === index ? element.value : d))
    ]);

    // Move to the next input if the current one is filled
    if (element.value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace navigation
  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Automatically submit when all inputs are filled
  useEffect(() => {
    if (otp.every(digit => digit !== "")) {
      handleSubmit();
    }
  }, [otp]);

  // Handle OTP submission
  const handleSubmit = async () => {
    setError(null); // Clear previous errors
    setLoading(true); // Set loading state
    const otpCode = otp.join(""); // Join the 4 digits into a single string

    try {
      // Send OTP and phone number to the verification API
      const response = await fetch(`${process.env.REACT_APP_API_URL}api/v1/auth/confirm-password-reset-otp`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number: phone_number, // Include phone number here
          otp: otpCode,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // OTP is valid, navigate to the password reset page
        navigate('/reset-password', { state: { phone_number: phone_number } });
      } else {
        // Handle invalid OTP or any other error from the server
        setError(data.message || 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      // Handle any network errors
      setError('An error occurred while verifying the OTP. Please try again.');
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  // Resend OTP handler
  const handleResendOTP = async () => {
    setLoading(true); // Set loading while resending OTP

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}api/v1/auth/resend-otp-forgot-password`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number: phone_number, // phone number here
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setError(null); // Clear previous error
        setResendAvailable(false); // Disable resend button
        setTimer(60); // Reset timer to 60 seconds
      } else {
        setError(data.message || 'Failed to resend OTP. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while resending the OTP. Please try again.');
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  // Timer logic for Resend OTP button
  useEffect(() => {
    let interval = null;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else {
      setResendAvailable(true); // Enable resend button when timer reaches 0
    }

    return () => clearInterval(interval); // Clear interval when component unmounts or timer changes
  }, [timer]);

  return (
    <>
      <Helmet>
        <title>OTP Verification</title>
        <meta name="description" content="OTP verification page" />
      </Helmet>
      <div className="flex w-full h-screen items-center bg-gray-100 md:flex-col overflow-hidden">
        {/* OTP Form */}
        <form method='post' className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col items-center bg-white-a700_bf h-[380px] shadow-xl px-3 gap-2 mq450:pt-[60px]">
            <Heading size="heading2xl" as="h1" className="font-worksans text-black-900_01 text-center">
              OTP Verification
            </Heading>
            <Text as="p" className="text-center mt-0 mq450:mb-12">Enter the 4-digit OTP sent to your phone.</Text>

            <div className="flex gap-2 mq450:gap-[5px]">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={e => handleChange(e.target, index)}
                  onKeyDown={e => handleKeyDown(e, index)}
                  ref={el => inputRefs.current[index] = el}
                  className="w-7 h-8 text-center text-2xl border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
                />
              ))}
            </div>

            {/* Error message */}
            {error && <Text as="p" className="text-red-500 mt-1">{error}</Text>}

            {/* Button */}
            <Button
              color="gray_800"
              size="lg"
              shape="round"
              className="mt-[40px] mq450:mt-[30px] min-w-[188px] font-worksans"
              style={{ color: 'white' }}
              onClick={handleSubmit}
              disabled={loading || otp.some(digit => digit === "")} // Disable button if OTP is incomplete or loading
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </Button>

            {/* Resend OTP */}
            <div className="mt-4">
              <Button
                color="gray_600"
                size="sm"
                shape="round"
                onClick={handleResendOTP}
                disabled={!resendAvailable || loading} // Disable until timer reaches 0 or it's loading
              >
                {resendAvailable ? "Resend OTP" : `Get OTP in ${timer}s`}
              </Button>
            </div>
          </div>
        </form>
        {/* Side Image */}
        <div className="md:hidden lg:block w-[80%] h-full relative animate__animated animate__bounceInDown transform">
          <img src="/side-image.png" alt="Side Image" className="h-full w-full object-cover" />
          <img src="/logo.png" alt="Centered Image" className="absolute top-1/2 left-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </>
  );
};

export default ResetOTP;
