import { useEffect, useState } from "react";
import FrameComponent from "../components/FrameComponent";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import WidgetContainer from "../components/WidgetContainer";
import { getSession } from "../utills/sessionUntil";

const Dashboard = () => {

  const [allBookings, setAllBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const session = getSession();
  const [statistics, setStatistics] = useState(null);
  
  // Fetch all bookings on component mount
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(`https://api.playdenapp.com/api/v1/pitch-owner/bookings`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.token}`,
            "ngrok-skip-browser-warning": "true",
          },
        });
        // console.log('Raw API Response:', response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data?.data);

        setStatistics(data?.data?.statistics);
        setAllBookings(data?.data?.bookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
        setError("Failed to fetch bookings. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="w-full relative bg-light-mode-gray-10-f5f5f5 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      {/* <img
        className="w-[1770px] h-[1156.1px] absolute !m-[0] bottom-[-152.1px] left-[calc(50%_-_885px)] object-cover"
        alt=""
        src="/back@2x.png"
      /> */}
      <FrameComponent aare="/aare1@2x.png" />
      <FrameComponent4 />
      <section className="self-stretch flex pt-10 pb-0 mb-0 flex-row bg-gray-100 items-start justify-start py-0 px-16 box-border max-w-full mq800:pl-8 mq800:pr-8 mq800:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
          <WidgetContainer statistics={statistics}/>
          <FrameComponent5 allBookings={allBookings} isLoading={isLoading} error={error}/>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
