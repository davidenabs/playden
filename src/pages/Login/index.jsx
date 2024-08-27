import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Img, Text, Button, CheckBox, Input, Heading } from "../../components";
import React, { useState } from "react";

export default function LoginPage() {
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
    
    // Replace with actual login logic
    const isLoginSuccessful = email === "user@example.com" && password === "password"; // Dummy condition

    if (isLoginSuccessful) {
      // Navigate to the dashboard after successful login
      navigate('/dashboard');
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
      <div className="flex w-full h-screen items-center bg-light_mode-white-5_ffffff md:flex-col overflow-hidden">
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex mq450:w-[70%] mq450:mt-5 w-[130%] md:w-[89px] lg:w-1/2 md:h-[50px] h-[500px] flex-col items-center px-4 md:px-1">
          <div className="flex w-[564px] max-w-md lg:max-w-sm h-[679px] lg:h-[10%] md:w-[100%] flex-col items-center justify-center gap-1 rounded-lg bg-light_mode-white-5_ffffff px-8 py-[1px] mt-[1px] md:px-5 md:py-1 shadow-xl md:shadow-none">
            <div className="flex flex-col items-center gap-1 w-full">
              <div className="flex flex-col items-center justify-center gap-1 w-full">
                <Link to="/login" rel="noreferrer" className="no-underline">
                  <Heading size="heading2xl" as="h1" className="font-worksans text-black-900_01 text-center no-underline">
                    Login
                  </Heading>
                </Link>
                <Text as="p" className="text-center">Sign in to stay connected.</Text>
              </div>
              <div className="flex flex-col items-center gap-6 w-full">
                <div className="flex flex-col gap-4 w-full">
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
                  <div className="flex flex-col items-start gap-2.5 w-full">
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
                  <div className="flex items-center justify-between w-full">
                    <CheckBox
                      name="rememberme"
                      label="&nbsp;Remember me?"
                      id="rememberme"
                      className="gap-2 font-inter text-[16px] text-blue_gray-300"
                      required
                    />
                    <Link to="/forgotpassword" className="text-right no-underline">
                      <Text as="p" className="!text-black-900_01">
                        Forgot Password
                      </Text>
                    </Link>
                  </div>
                </div>
                
                  <Button color="gray_800" size="lg" shape="round" className="min-w-[188px] font-worksans" style={{ color: 'white' }}>
                    Login
                  </Button>
                
              </div>
            </div>
            <Link to="/signUp" className="text-center no-underline">
              <Text as="p" className="!text-black-900_02">
                <span className="text-blue_gray-900">Don't have an account?&nbsp;</span>
                <span className="text-black-900_01">Click here to sign up</span>
              </Text>
            </Link>
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
}
