import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "animate.css";
import { Img, Text, Button, CheckBox, Input, Heading } from "../../components";

const setSession = (token, user_id) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user_id", user_id);
};

const LoginPage = () => {
  const [user_id, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://api.playdenapp.com/api/v1/auth/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setSession(data.data.user.token, data.data.user.id);
        navigate("/dashboard");
        toast.success("Sign-In successful!");
      } else {
        const errorData = await response.json();
        toast.error(`Sign-In failed: ${errorData.message || "Please try again."}`);
      }
    } catch (error) {
      toast.error("Network error! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>PlayDen</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col md:flex-row w-full md:w-full h-screen items-center bg-gray-100 overflow-hidden">
        {/* Login Form */}
        <form
          onSubmit={handleSignIn}
          className="flex flex-col items-center justify-center w-full md:w-full md:w-1/2 p-4 md:p-8 bg-white shadow-lg md:rounded-lg"
        >
          <div className="flex flex-col items-center w-full max-w-sm">
            <h1 className="text-2xl font-bold text-black mb-2">Login</h1>
            <p className="text-gray-600 mb-6">Sign in to stay connected.</p>
            <div className="w-full mb-4">
              <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
                value={user_id}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="w-full mb-4 relative">
              <label htmlFor="password" className="block text-sm text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="w-full border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <span
                onClick={toggleShowPassword}
                className="absolute top-2/3 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="flex items-center justify-between w-full mb-4">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <Link to="/forgotpassword" className="text-sm text-blue-600 no-underline">
                Forgot Password?
              </Link>
            </div>
            <Button
              type='submit' color="gray_800" size="lg" shape="round" className="min-w-[188px] font-worksans text-ghostwhite"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Don't have an account?{' '}
            <Link to="/signUp" className="text-blue-600 no-underline">
              Sign up here
            </Link>
          </p>
        </form>

        {/* Side Image */}
        <div className="md:hidden md:flex w-1/2 h-full relative">
          <img
            src="/side-image.png"
            alt="Side Image"
            className="h-full w-full object-cover"
          />
          <img
            src="/logo.png"
            alt="Centered Logo"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2"
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
