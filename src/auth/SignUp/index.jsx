import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Img, Text, Button, CheckBox, Input, Heading } from "../../components";
import React, { useState } from "react";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import 'animate.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const signIn = useSignIn();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  }

  const handleSignUp = async (e) => {
    const requestBody = {
      email,
      username,
      address,
      phone_number: phoneNumber,
      password,
    };

    try {
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();

        
        if (signIn({
          token: data.token, 
          expiresIn: 3600, 
          tokenType: 'Bearer', 
          authState: { email: data.email, username: data.username }, 
        })) {
          // Redirect to the login page after successful sign-up
          navigate('/login');
        } else {
          alert('Sign-In failed. Please try again.');
        }
      } else {
        const errorData = await response.json();
        alert(`Sign-Up failed: ${errorData.message || 'Please try again.'}`);
      }
    } catch (error) {
      console.error('Error during sign-up:', error);
      alert('An error occurred. Please try again.');
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
        <form onSubmit={handleSignUp} className="flex scale-[0.8] mt-3 mq450:w-[160%] mq450:mt-[0px] mq450:pr-[4px] w-[130%] lg:w-1/2 mq450:h-full h-[750px] flex-col items-center px-[2px] md:px-1 md:overflow-y-auto md:mt-0">
          <div className="flex w-[590px] max-w-[70%] lg:max-w-[90%] h-[70%] lg:h-[10%] md:w-[100%] bg-white-a700_bf flex-col items-center justify-center gap-2 rounded-lg bg-light_mode-white-5_ffffff mq450:h-[600%] mq450:pr-[10px] px-8 py-9 my-[1px] pt-[150px] mq450:pt-[1px] mq450:px-0 mq450:mt-[5px] md:py-5 mq450:pt-[40px] shadow-strong md:shadow-none">
            <div className="flex flex-col items-center gap-4 w-full mt-0">
              <div className="flex flex-col items-center justify-center gap-[1px] w-full mt-0">
                <Link to="/login" rel="noreferrer" className="no-underline">
                  <Heading size="heading2xl" as="h1" className="font-worksans text-black-900_01 text-center no-underline">
                    Sign Up
                  </Heading>
                </Link>
                <Text as="p" className="text-center mt-0">Create your PlayDen account.</Text>
              </div>
              <div className="flex flex-col items-center gap-0.5 w-[75%] ">
                <div className="flex flex-col gap-0.5 w-full ">
                    <div className="flex gap-4 mq450:gap-0.5 self-stretch sm:flex-col ">
                  <div className="flex flex-col items-start gap-0 w-full mq450:mt-[1px]">
                    <Text as="p">First Name</Text>
                    <input
                      size="md"
                      shape="round"
                      name="fName"
                      type="text"
                      onChange={handleFirstNameChange}
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
                      onChange={handleLastNameChange}
                      className="w-full border border-black-900_01 rounded p-2"
                      required
                    />
                  </div>
                  </div>
                  <div className="flex gap-4 mq450:gap-0.5 self-stretch sm:flex-col">
                  <div className="flex flex-col items-start gap-0.5 w-full mq450:mt-[1px]">
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
                  <div className="flex flex-col items-start gap-0.5 w-full mq450:mt-[1px]">
                    <Text as="p">Phone No.</Text>
                    <input
                      size="md"
                      shape="round"
                      name="number"
                      type="tel"
                      onChange={handlePhoneNumberChange}
                      className="w-full border border-black-900_01 rounded p-2"
                      required
                    />
                  </div>
                  </div>
                  <div className="flex gap-4 mq450:gap-0.5 self-stretch sm:flex-col">
                  <div className="flex flex-col items-start gap-0.5 w-full mq450:mt-[1px]">
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
                  <div className="flex flex-col items-start gap-0.5 w-full">
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
                      className="gap-2 mq450:my-4 md:mt-4 py-[24px] font-inter text-[16px] text-gray-900 border-black"
                      required
                    />
                    </div>
                </div>
                
                  <Button color="gray_800" size="lg" shape="round" className="min-w-[188px] font-worksans text-ghostwhite">
                    Sign Up
                  </Button>
                
              </div>
              <div className="flex mb-[126px]">
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

export default SignUp;