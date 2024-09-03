import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import BookingManagement from "./pages/BookingManagement";
import LoginPage from "./pages/auth/Login";
import PitchHistory from "./pages/PitchHistory";
import PitchListing from "./pages/PitchListing";
import BookingDetails from "./pages/BookingDetails";
import SignUp from "./pages/auth/SignUp";
import NotFound from "./pages/NotFound";
import ForgetPassword  from "./pages/auth/forgetPassword";
import ResetOTP from "./pages/auth/resetOtp";

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
      <Route path="/pitch-history" element={<PitchHistory/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/reset" element={<ResetOTP/>} />
      <Route path="/booking-details" element={<BookingDetails />} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
}
export default App;
