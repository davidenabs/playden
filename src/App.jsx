import React, { useEffect } from 'react';
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BookingManagement from "./pages/BookingManagement";
import LoginPage from "./auth/Login";
import PitchHistory from "./pages/PitchHistory";
import PitchListing from "./pages/PitchListing";
import BookingDetails from "./pages/BookingDetails";
import SignUp from "./auth/SignUp";
import NotFound from "./pages/NotFound";
import ForgetPassword from "./auth/forgetPassword";
import ResetOTP from "./auth/resetOtp";
import ResetPassword from './auth/change-password';
import OTPVerification from "./auth/VerifyPhoneNumber";
import ProfileSetting from './pages/ProfileSetting';

const App = () => {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up1":
        title = "";
        metaDescription = "";
        break;
      case "/booking-management":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/booking-management" element={<BookingManagement />} />
      <Route path="/pitch-listing" element={<PitchListing />} />
      {/* Update the PitchHistory route to accept a dynamic pitchId */}
      <Route path="/pitch-history/:pitchId" element={<PitchHistory />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/forgotpassword" element={<ForgetPassword />} />
      <Route path="/verify-otp" element={<OTPVerification />} />
      <Route path="/reset" element={<ResetOTP />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/profile-setting" element={<ProfileSetting />} />
      <Route path="/booking-details" element={<BookingDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
