import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Text, Heading } from "../components";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const phone_number = location.state?.phone_number; // Retrieve phone number from state

  // Handle password changes
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Validate passwords
  const validatePasswords = () => {
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return false;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return false;
    }
    return true;
  };

  // Handle form submission for resetting the password
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePasswords()) return;

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}api/v1/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number: phone_number,
          password: newPassword,
        })
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Error response:', data);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast.success("Password reset successfully.");
      navigate("/login"); // Navigate to login page after successful password reset

    } catch (error) {
      console.error('Error during fetch:', error.message);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Reset Password</title>
        <meta name="description" content="Reset your password" />
      </Helmet>
      <div className="flex w-full h-screen items-center bg-gray-100 md:flex-col overflow-hidden">
        {/* Reset Password Form */}
        <form onSubmit={handleSubmit} method="post" className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col items-center bg-white shadow-xl px-3 gap-2 mq450:pt-[60px]">
            <Heading size="heading2xl" as="h1" className="font-worksans text-black-900_01 text-center">
              Reset Password
            </Heading>
            <Text as="p" className="text-center mt-0 mq450:mb-12">Enter and confirm your new password.</Text>

            <div className="flex flex-col items-center gap-6 w-full">
              <div className="flex flex-col gap-2 w-full">
                <Text as="p" className="text-left">New Password</Text>
                <input
                  type="password"
                  value={newPassword}
                  onChange={handleNewPasswordChange}
                  className="w-full border border-gray-400 rounded p-2"
                  placeholder="Enter new password"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <Text as="p" className="text-left">Confirm New Password</Text>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="w-full border border-gray-400 rounded p-2"
                  placeholder="Confirm new password"
                  required
                />
              </div>

              <Button
                color="gray_800"
                size="lg"
                shape="round"
                className="min-w-[188px] font-worksans"
                style={{ color: 'white' }}
                disabled={newPassword === "" || confirmPassword === ""} // Disable button if passwords are empty
              >
                Reset Password
              </Button>
            </div>
          </div>
        </form>
        {/* Side Image */}
        <div className="md:hidden lg:block w-[80%] h-full relative">
          <img src="/side-image.png" alt="Side Image" className="h-full w-full object-cover" />
          <img src="/logo.png" alt="Centered Image" className="absolute top-1/2 left-1/2 w-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
