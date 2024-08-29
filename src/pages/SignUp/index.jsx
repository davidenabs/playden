import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Img, Text, Button, CheckBox, Input, Heading } from "../../components";
import React, { useState } from "react";
import 'animate.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Replace with 
    console.log('login successful');
    
    if (true) {
      // Navigate to the dashboard after successful login
      navigate('/login');
    } else {
      // Handle login failure 
      alert('Invalid login credentials');
    }
  };

  return (
    <>
      <Helmet>
        <title>PlayDen</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full h-screen items-center bg-gray-100 md:flex-col overflow-hidden">
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex mq450:w-[100%] mq450:pt-[100px] mq450:pr-[19px] w-full md:w-full lg:w-1/2 h-full flex-col items-center px-[2px] md:px-1 md:overflow-y-auto md:mt-0">
          <div className="flex w-[564px] max-w-[70%] lg:max-w-[90%] h-[90%] lg:h-[10%] md:w-[100%] bg-white-a700_bf flex-col items-center justify-center gap-2 rounded-lg bg-light_mode-white-5_ffffff px-8 py-12 mt-2 md:px-0 md:my-[40%] md:py-5 md:pt-[12px] shadow-strong md:shadow-none">
            <div className="flex flex-col items-center gap-4 w-full mt-0">
              <div className="flex flex-col items-center justify-center gap-5 w-full mt-0">
                <Link to="/login" rel="noreferrer" className="no-underline">
                  <Heading size="heading2xl" as="h1" className="font-worksans text-black-900_01 text-center no-underline">
                    Sign Up
                  </Heading>
                </Link>
                <Text as="p" className="text-center mt-0">Create your PlayDen account.</Text>
              </div>
              <div className="flex flex-col items-center gap-1 w-full ">
                <div className="flex flex-col gap-1 w-full ">
                    <div className="flex gap-4 mq450:gap-[1px] self-stretch sm:flex-col ">
                  <div className="flex flex-col items-start gap-[1px] w-full mq450:mt-[1px]">
                    <Text as="p">First Name</Text>
                    <input
                      size="md"
                      shape="round"
                      name="fName"
                      type="text"
                      className="w-full border border-black-900_01 rounded p-2 "
                      required
                    />
                  </div>
                  &nbsp;
                  <div className="flex flex-col items-start gap-[1px] w-full mq450:mt-[1px]">
                    <Text as="p">Last Name</Text>
                    <input
                      size="md"
                      shape="round"
                      name="lName"
                      type="text"
                      className="w-full border border-black-900_01 rounded p-2"
                      required
                    />
                  </div>
                  </div>
                  <div className="flex gap-4 mq450:gap-[1px] self-stretch sm:flex-col">
                  <div className="flex flex-col items-start gap-[1px] w-full mq450:mt-[1px]">
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
                  &nbsp;
                  <div className="flex flex-col items-start gap-[1px] w-full mq450:mt-[1px]">
                    <Text as="p">Phone No.</Text>
                    <input
                      size="md"
                      shape="round"
                      name="number"
                      type="tel"
                      className="w-full border border-black-900_01 rounded p-2"
                      required
                    />
                  </div>
                  </div>
                  <div className="flex gap-4 mq450:gap-[1px] self-stretch sm:flex-col">
                  <div className="flex flex-col items-start gap-[1px] w-full mq450:mt-[1px]">
                    <Text as="p">Password</Text>
                    <input
                      size="md"
                      shape="round"
                      name="password"
                      type="password"
                      className="w-full border border-black-900_01 rounded p-2"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                  &nbsp;
                  <div className="flex flex-col items-start gap-[1px] w-full">
                    <Text as="p">Confirm Password</Text>
                    <input
                      size="md"
                      shape="round"
                      name="cPassword"
                      type="password"
                      className="w-full border border-black-900_01 rounded p-2"
                      required
                    />
                  </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <CheckBox
                      name="tick"
                      label="&nbsp;I agree with the terms of use"
                      id="tick"
                      className="gap-2 mq450:my-4 md:mt-4 py-0.5 font-inter text-[16px] text-gray-900 border-black"
                      required
                    />
                    </div>
                </div>
                
                  <Button color="gray_800" size="lg" shape="round" className="min-w-[188px] font-worksans text-ghostwhite">
                    Sign Up
                  </Button>
                
              </div>
              <div className="flex">
            <Link to="/login"  className="text-center no-underline">
              <Text as="p" className="self-end !text-black-900_02">
                <span className="text-blue_gray-900">Already have an account</span>
                <span className="text-f2">&nbsp; Sign In</span>
              </Text>
            </Link>
            </div>
              </div>
            </div>
        </form>
        {/* Side Image */}
        <div className=" md:hidden lg:block w-[80%] h-full relative animate__animated animate__bounceInDown transform">
          <img src="/side-image.png" alt="Side Image" className="h-full w-full object-cover" />
          <img src="/logo.png" alt="Centered Image" className="absolute top-1/2 left-1/2 w-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </>
  );
}