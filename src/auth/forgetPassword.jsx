import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Img, Text, Button, CheckBox, Input, Heading } from "../components";
import React, { useState } from "react";

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const [otp, setOtp] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (e) => {
  
  };

  return (
    <>
      <Helmet>
        <title>PlayDen</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full h-screen items-center bg-light_mode-white-5_ffffff md:flex-col overflow-hidden">
        {/* Forgotten password Form */}
        <form onSubmit={handleSubmit} className="flex mq450:w-[70%] mq450:mt-5 w-[130%] md:w-[89px] lg:w-1/2 md:h-[50px] h-[500px] flex-col items-center px-4 md:px-1">
          <div className="flex w-[564px] max-w-md lg:max-w-sm h-[679px] lg:h-[10%] md:w-[100%] flex-col items-center justify-center gap-1 rounded-lg bg-light_mode-white-5_ffffff px-8 py-[1px] mt-[1px] md:px-5 md:py-1 shadow-xl md:shadow-none">
            <div className="flex flex-col items-center gap-1 w-full">
              <div className="flex flex-col items-center justify-center gap-1 w-full">
                <Link to="/login" rel="noreferrer" className="no-underline">
                  <Heading size="heading2xl" as="h1" className="font-worksans text-black-900_01 text-center no-underline">
                    Forgot Password
                  </Heading>
                </Link>
                <Text as="p" className="text-center">Kindly enter your email to get OTP.</Text>
              </div>
              <div className="flex flex-col items-center gap-6 w-full">
                <div className="flex flex-col gap-[1px] w-full">
                  <div className="flex flex-col items-start gap-2.5 w-full">
                    <Text as="p">Email</Text>
                    <input
                      size="md"
                      shape="round"
                      name="email"
                      type="email"
                      className="w-full border border-black-900_01 rounded p-2"
                      value={email}
                      onChange={handleEmailChange}
                      required
                    />
                  </div>
                </div>
                
                  <Button color="gray_800" size="lg" shape="round" className="min-w-[188px] font-worksans" style={{ color: 'white' }}>
                  {otp ? 'Generating OTP...' : 'Generate OTP'}
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

export default ForgetPassword;