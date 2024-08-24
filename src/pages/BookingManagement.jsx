import { Link } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import FrameComponent3 from "../components/FrameComponent3";

const BookingManagement = () => {

  const bookings = [
    {
      name: "Oyinkansola Soleye",
      bookingId: "#445664",
      number: "07066048648",
      status: "Confirmed",
      date: "8/8/2024",
      time: "1:30pm",
    },
    {
      name: "John Doe",
      bookingId: "#445665",
      number: "08012345678",
      status: "Confirmed",
      date: "8/9/2024",
      time: "2:00pm",
    },
    // Add more transaction objects as needed
  ];

  return (
    <div className="w-full relative bg-light-mode-gray-10-f5f5f5 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[52px] box-border leading-[normal] tracking-[normal]">
      <FrameComponent aare="/aare2@2x.png" />
      <FrameComponent3 />
      <section className="self-stretch flex flex-row items-start justify-start py-0 px-[70px] box-border max-w-full text-left text-base text-f2 font-poppins mq750:pl-[35px] mq750:pr-[35px] mq750:box-border">
        <div className="flex-1 rounded-lg bg-light-mode-white-5-ffffff flex flex-row items-start justify-start py-5 px-8 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-between flex-wrap content-start max-w-full gap-5">
            <div className="flex flex-col items-start justify-start gap-9">
              <div className="relative font-medium inline-block min-w-[30px]">
                S/N
              </div>
              <div className="flex flex-col items-start justify-start gap-[46px] text-xs">
              {bookings.map((_, index) => (
                  <div key={index} className="relative font-medium inline-block min-w-[5px]">
                    {index + 1}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[133px] flex flex-col items-start justify-start py-0 pl-0 pr-3.5 box-border gap-9">
              <div className="self-stretch flex flex-row items-start justify-end py-0 px-[29px]">
                <div className="relative font-medium inline-block min-w-[46px]">
                  NAME
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[46px] text-xs">
                {bookings.map((booking, index) => (
                  <div key={index} className="relative font-medium inline-block min-w-[119px]">
                    {booking.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[137.5px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-9 text-xs">
              <div className="relative text-base font-medium inline-block min-w-[94px]">
                BOOKING ID
              </div>
              <div className="flex flex-col items-start justify-start gap-[46px]">
                {bookings.map((booking, index) => (
                  <div key={index} className="relative font-medium inline-block min-w-[57px]">
                    {booking.bookingId}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[155.5px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border gap-9 text-xs">
              <div className="relative text-base font-medium inline-block min-w-[123px]">
                PHONE NUMBER
              </div>
              <div className="flex flex-col items-start justify-start gap-[46px]">
                {bookings.map((booking, index) => (
                  <div key={index} className="relative font-medium inline-block min-w-[84px]">
                    {booking.number}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-3.5 gap-[26px] text-xs text-light-mode-white-5-ffffff">
              <div className="flex flex-row items-start justify-start py-0 pl-[11px] pr-3.5 text-base text-f2">
                <div className="relative font-medium inline-block min-w-[60px]">
                  STATUS
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[26px]">
                {bookings.map((booking, index) => (
                  <div
                    key={index}
                    className={`rounded-13xl ${
                      booking.status === "Confirmed" ? "bg-darkolivegreen" : "bg-yellow-500"
                    } flex flex-row items-start justify-start p-2.5`}
                  >
                    <div className="relative font-medium inline-block min-w-[65px]">
                      {booking.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[52px] gap-9">
              <div className="flex flex-row items-start justify-start py-0 pl-[15px] pr-0.5">
                <div className="relative font-medium inline-block min-w-[40px]">
                  DATE
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[46px] text-xs">
                {bookings.map((booking, index) => (
                  <div key={index} className="relative font-medium inline-block min-w-[57px]">
                    {booking.date}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-14 gap-9">
              <div className="flex flex-row items-start justify-start py-0 pl-2.5 pr-0">
                <div className="relative font-medium inline-block min-w-[36px]">
                  TIME
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[46px] text-xs">
                {bookings.map((booking, index) => (
                  <div key={index} className="relative font-medium inline-block min-w-[43px]">
                    {booking.time}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-9">
              <div className="flex flex-row items-start justify-start py-0 pl-3 pr-0">
                <div className="relative font-medium inline-block min-w-[61px]">
                  ACTION
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[46px] text-xs">
                {bookings.map((_, index) => (
                  <div key={index} className="relative [text-decoration:underline] font-medium inline-block min-w-[73px]">
                      <Link to='/booking-details' className="text-black-900">View details</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingManagement;
