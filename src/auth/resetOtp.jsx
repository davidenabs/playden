import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Text, Button, Heading } from "../components";
import 'animate.css';

const ResetOTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([
      ...otp.map((d, idx) => (idx === index ? element.value : d))
    ]);

    // Move to the next input if the current one is filled
    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    // Automatically submit when all inputs are filled
    if (otp.every(digit => digit !== "")) {
      handleSubmit();
    }
  }, [otp]);

  const handleSubmit = async () => {
    
  };

  return (
    <>
      <Helmet>
        <title>OTP Verification</title>
        <meta name="description" content="OTP verification page" />
      </Helmet>
      <div className="flex w-full h-screen items-center bg-gray-100 md:flex-col overflow-hidden">
        {/* OTP Form */}
        <form className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col items-center bg-white-a700_bf h-[380px] shadow-xl px-3 gap-2">
            <Heading size="heading2xl" as="h1" className="font-worksans text-black-900_01 text-center">
              OTP Verification
            </Heading>
            <Text as="p" className="text-center mt-0">Enter the 6-digit OTP sent to your email.</Text>

            <div className="flex gap-2">
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
            
            <Button
              color="gray_800"
              size="lg"
              shape="round"
              className="mt-[100px] min-w-[188px] font-worksans"
              style={{ color: 'white' }}
              onClick={handleSubmit}
              disabled={otp.some(digit => digit === "")} // Disable button if any input is empty
            >
              Verify OTP
            </Button>
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
