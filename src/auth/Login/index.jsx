import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Img, Text, Button, CheckBox, Input, Heading } from "../../components";
import React, { useState } from "react";
import 'animate.css';
import { toast } from 'react-toastify';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const signIn = useSignIn();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API endpoint and data
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // Assuming the API returns a token after successful sign-in
        if (signIn({
          token: data.token,
          expiresIn: 3600, // Set expiration time for the session
          tokenType: 'Bearer',
          authState: { email: data.email }, // Additional state data
        })) {
          // Redirect to the dashboard or any other page after successful login
          navigate('/dashboard');
          console.log('Sign up successful');
        } else {
          toast.error('Sign-In failed. Please try again.');
        }
      } else {
        const errorData = await response.json();
        toast.error(`Sign-In failed: ${errorData.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      toast.error('An error occurred. Please try again.');
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
        <form onSubmit={handleSignIn} className="flex mq450:w-[85%] mq450:mt-10 w-[130%] md:w-[89px] lg:w-1/2 md:h-[50px] h-[500px] flex-col items-center px-4 md:px-1 mb-[50px]">
          <div className="flex w-[564px] max-w-md lg:max-w-sm h-[679px] lg:h-[10%] md:w-[100%] flex-col items-center justify-center gap-0 rounded-lg bg-white-a700_bf px-2 py-[1px] pr-7 mt-[1px] md:px-5 md:py-1 shadow-xl md:shadow-none">
            <div className="flex flex-col items-center gap-1 w-[436px] h-[450px]">
              <div className="flex flex-col items-center justify-center gap-[1px] w-[197px] mt-[40px]">
                <Link to="/login" rel="noreferrer" className="no-underline">
                  <Heading size="heading2xl" as="h1" className="font-worksans text-black-900_01 text-center no-underline">
                    Login
                  </Heading>
                </Link>
                <Text as="p" className="text-center mt-0">Sign in to stay connected.</Text>
              </div>
              <div className="flex flex-col items-center gap-2 mq450:w-[300px] md:w-[406px]">
                <div className="flex flex-col gap-[1px] w-[130%] mq450:w-[100%] mq450:mr-[16px]">
                  <div className="flex flex-col items-start gap-0.1 w-full">
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
                  <div className="flex flex-col relative items-start gap-0.5 w-full">
                    <Text as="p">Password</Text>
                    <input
                      size="md"
                      shape="round"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="w-full border border-black-900_01 rounded p-2"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                     <span
          
          onClick={toggleShowPassword}
          className="absolute right-1 top-[75px] transform -translate-y-1/2"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <CheckBox
                      name="rememberme"
                      label="&nbsp;Remember me?"
                      id="rememberme"
                      className="gap-2 font-inter text-[16px] text-blue_gray-300"
                      
                    />
                    <Link to="/forgotpassword" className="text-right no-underline">
                      <Text as="p" className="!text-black-900_01">
                        Forgot Password
                      </Text>
                    </Link>
                  </div>
                </div>
                
                  <Button
                   color="gray_800" size="lg" shape="round" className="min-w-[188px] font-worksans" style={{ color: 'white' }}>
                    {loading ? 'Logging in...' : 'Login'}
                    
                  </Button>
                
              </div>
            </div>
            <Link to="/signUp" className="text-center no-underline mb-[40px] mt-[16px]">
              <Text as="p" className="!text-black-900_02">
                <span className="text-blue_gray-900">Don't have an account?&nbsp;</span>
                <span className="text-black-900_01">Click here to sign up</span>
              </Text>
            </Link>
          </div>
        </form>
        {/* Side Image */}
        <div className=" md:hidden lg:block w-[80%] h-full relative animate__animated animate__bounceInDown transform">
          <img src="/side-image.png" alt="Side Image" className="h-full w-full object-cover" />
          <img src="/logo.png" alt="Centered Image" className="absolute top-1/2 left-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </>
  );
}

export default LoginPage;