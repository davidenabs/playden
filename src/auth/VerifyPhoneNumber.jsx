import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Img, Text, Button, CheckBox, Input, Heading } from "../components";
import React, { useState } from "react";
import { toast } from "react-toastify";

const OTPVerification = ({ userId, token }) => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();  // To redirect the user
  
    // Function to handle OTP input change
    const handleOTPChange = (e) => {
      setOtp(e.target.value);
    };
  
    // Function to submit the OTP for verification
    const handleOTPSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch('https://api.playdenapp.com/api/v1/auth/verify-otp', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,  // Include Bearer token for authentication
          },
          body: JSON.stringify({
            user_id: userId,  // User's email or user_id
            otp: otp,  // OTP entered by the user
          }),
        });
  
        if (response.ok) {
          // If the OTP is verified successfully, redirect to the login page
          toast.success('OTP verified successfully!');
          navigate('/login');  // Redirect to the login page
        } else {
          const errorData = await response.json();
          toast.error(`Verification failed: ${errorData.message || 'Please try again.'}`);
        }
      } catch (error) {
        toast.error('An error occurred. Please try again.');
        console.error('Error during OTP verification:', error);
      }
    };
  
  return (
    <>
      <Helmet>
        <title>PlayDen</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full h-screen items-center bg-light_mode-white-5_ffffff md:flex-col mq450:mt-[85px] mq450:pr-[0px] overflow-hidden">
        {/* Verify OTPForm */}
        <form onSubmit={handleOTPSubmit} className="flex mq450:w-[85%] mq450:ml-[3px] mq450:mt-5 w-[130%] md:w-[89px] lg:w-1/2 md:h-[50px] h-[500px] flex-col items-center px-4 md:px-1 mq450:h-[70%] mq450:w-[80%] mq450:shadow-xs">
          <div className="flex w-[564px] max-w-md lg:max-w-sm h-[679px] lg:h-[10%] md:w-[100%] flex-col items-center justify-center gap-1 rounded-lg bg-light_mode-white-5_ffffff px-8 py-[1px] mt-[1px] md:px-5 md:py-1 shadow-xl md:shadow-none">
            <div className="flex flex-col items-center gap-1 w-full">
              <div className="flex flex-col items-center justify-center gap-1 w-full">
                <Link to="/login" rel="noreferrer" className="no-underline">
                  <Heading size="heading2xl" as="h1" className="font-worksans text-black-900_01 text-center no-underline">
                    Validate Phone Number
                  </Heading>
                </Link>
                <Text as="p" className="text-center">OTP has been sent to the registered phone number.</Text>
              </div>
              <div className="flex flex-col items-center gap-6 w-full">
                <div className="flex flex-col gap-[1px] w-full">
                  <div className="flex flex-col items-start gap-2.5 mq450:gap-[1px] w-full">
                    <Text as="p">OTP</Text>
                    <input
                      size="md"
                      shape="round"
                      name="email"
                      type="text"
                      className="w-full border border-black-900_01 rounded p-2 otp-input mq450:w-[90%] mq450:ml-1"
                      value={otp}
                      onChange={handleOTPChange}
                      placeholder="Enter OTP"
                      required
                    />
                  </div>
                </div>
                
                  <Button type='submit' color="gray_800" size="lg" shape="round" className="min-w-[188px] font-worksans" style={{ color: 'white' }}>
                  {otp ? 'Verifying OTP...' : 'Verify OTP'}
                  </Button>
                
              </div>
            </div>
          </div>
        </form>
        {/* Side Image */}
        <div className=" md:hidden lg:block w-[80%] h-full relative">
          <img src="/side-image.png" alt="Side Image" className="h-full w-full object-cover" />
          <img src="/logo.png" alt="Centered Image" className="absolute top-1/2 left-1/2 w-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </>
  );
};

export default OTPVerification;