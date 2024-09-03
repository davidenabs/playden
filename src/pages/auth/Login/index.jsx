import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Img, Text, Button, CheckBox, Input, Heading } from "../../../components/index.jsx";
import React, { useState, useCallback } from "react";
import 'animate.css';
import { toast } from 'react-toastify';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { loginAtom, loginFormErrorAtom, defaultFormState } from "../../../atoms/loginAtom.js";
import { appAtom } from "../../../atoms/app.js";
import { useAtom } from "jotai";
import loginFormValidation from "../../../validations/LoginFormValidation";
import { showErrorToast, showSuccessToast } from "../../../utils/toast";
import InputField from "../../../components/form/input";
import { Button as RizzuiButton } from "rizzui";
import createApiManager from "../../../managers/apiManager";


const LoginPage = () => {
  const [app, setApp] = useAtom(appAtom);
  const [formState, setFormState] = useAtom(loginAtom);
  const [errors, setErrors] = useAtom(loginFormErrorAtom);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const signIn = useSignIn();
  const apiManager = createApiManager();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const updateFormState = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };


  const signInUser = useCallback(
    async (data) => {
      try {
        const signUserIn = signIn({
          auth: {
            token: data.token,
            type: "Bearer",
          },
          userState: { user: data.user, profile: data.profile },
        });

        if (signUserIn) {
          // navigateToDashboard();
        } else {
          throw new Error("Unable to sign you in");
        }
      } catch (error) {
        // showErrorToast(error.message);
      }
    },
    [signIn]
  );



  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const validationErrors = loginFormValidation(formState);
      console.log(formState);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      try {
        const response = await apiManager.login({
          email: formState.email,
          password: formState.password,
        });

        console.log(response);

        if (response["status"] === "success") {
          showSuccessToast("Login successful!");
          setFormState(defaultFormState);
          // signInUser(response["data"]);
        } else {
          showErrorToast(response["message"]);
        }
      } catch (error) {
        showErrorToast('Invalid Credentials');
        console.log(error);
        // setError(error);
      }
    },
    [formState]
  );



  const handleSignIn = async (e) => {
    e.preventDefault();
    showErrorToast('Hellow')
    // try {
    //   // Replace with your API endpoint and data
    //   const response = await fetch(process.env.REACT_APP_API_URL, {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();

    //     // Assuming the API returns a token after successful sign-in
    //     if (signIn({
    //       token: data.token,
    //       expiresIn: 3600, // Set expiration time for the session
    //       tokenType: 'Bearer',
    //       authState: { email: data.email }, // Additional state data
    //     })) {
    //       // Redirect to the dashboard or any other page after successful login
    //       navigate('/dashboard');
    //       console.log('Sign up successful');
    //     } else {
    //       toast.error('Sign-In failed. Please try again.');
    //     }
    //   } else {
    //     const errorData = await response.json();
    //     toast.error(`Sign-In failed: ${errorData.message || 'Please try again.'}`);
    //   }
    // } catch (error) {
    //   console.error('Error during sign-in:', error);
    //   toast.error('An error occurred. Please try again.');
    // }
  };

  return (
    <>
      <Helmet>
        <title>PlayDen</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full h-screen items-center bg-gray-100 md:flex-col overflow-hidden">
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex mq450:w-[85%] mq450:mt-10 w-[130%] md:w-[89px] lg:w-1/2 md:h-[50px] h-[500px] flex-col items-center px-4 md:px-1 mb-[50px]">
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
                    <InputField
                      label="Email"
                      name="email"
                      value={formState.email}
                      onChange={(e) =>
                        updateFormState("email", e.target.value)
                      }
                      placeholder={"clay@gmail.com"}
                      error={errors.email}
                      className={"w-full border border-black-900_01 rounded p-2"}
                      disabled={app.loading}
                    // required
                    />
                    {/* <input
                      size="md"
                      shape="round"
                      name="email"
                      type="email"
                      className="w-full border border-black-900_01 rounded p-2"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState("email", e.target.value)
                      }
                      disabled={app.loading}
                      required
                      error={errors.email}
                    /> */}
                  </div>
                  <div className="flex flex-col relative items-start gap-0.5 w-full">
                    <InputField
                      label="Password"
                      name="password"
                      value={formState.password}
                      onChange={(e) =>
                        updateFormState("password", e.target.value)
                      }
                      placeholder={"********"}
                      error={errors.password}
                      className={"w-full border border-black-900_01 rounded p-2"}
                      disabled={app.loading}
                      type="password"
                    // required
                    />
                    {/* <Text as="p">Password</Text>
                    <input
                      size="md"
                      shape="round"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="w-full border border-black-900_01 rounded p-2"
                      value={formState.password}
                      onChange={(e) =>
                        setFormState("password", e.target.value)
                      }
                      disabled={app.loading}
                      required
                    /> */}
                    {/* <button
                      // type="submit"
                      // onClick={toggleShowPassword}
                      
                      onChange={ (e) =>
                        setFormState("isChecked", e.target.value)
                      }
                      className="absolute right-1 top-[75px] transform -translate-y-1/2"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />} </button> */}

                  </div>
                  <div className="flex items-center justify-between w-full">
                    <CheckBox
                      name="rememberme"
                      label="&nbsp;Remember me?"
                      id="rememberme"
                      className="gap- font-inter text-[16px] text-blue_gray-300"

                    />
                    <Link to="/forgotpassword" className="text-righ no-underline">
                      Forgot Password
                    </Link>
                  </div>
                </div>

                {/* <Button
                  isLoading={app.loading}
                  disabled={app.loading}
                  type='submit'
                  color="gray_800" size="lg" shape="round" className="min-w-[188px] font-worksans" style={{ color: 'white' }}>
                  Login

                </Button> */}

                <RizzuiButton type="submit" disabled={app.loading} isLoading={app.loading}>
                  Sign in
                </RizzuiButton>


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