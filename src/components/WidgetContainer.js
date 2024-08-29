import Widget from "./Widget";
import PropTypes from "prop-types";

const WidgetContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-4 max-w-full text-left text-mid text-light-white font-poppins mq800:gap-7 mq1350:flex-wrap ${className}`}
    >
      <Widget
        generalHome7="/general--home-7.svg"
        separator="24"
        bookingRequests="Booking Requests"
      />
      <Widget
        propBackgroundColor="#41244b"
        generalHome7="/general--home-7-1.svg"
        propBorder="0px solid rgba(143, 85, 162, 0.38)"
        separator="500"
        propMinWidth="33px"
        bookingRequests="Number of bookings"
        propMinWidth1="123px"
      />
      <div className="w-[400px] rounded-xl bg-dimgray-100 overflow-hidden shrink-0 flex flex-row text-white items-start justify-start pt-[33px] px-[29px] pb-[35px] box-border gap-[33px] max-w-full z-[1] text-13xl font-work-sans mq800:flex-wrap mq450:gap-4">
        <div className="flex flex-col items-start justify-start gap-[4.5px] min-w-[243px] mq800:flex-1">
          <div className="w-[52px] h-[52px] rounded-13xl bg-gray-500 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2.5 box-border">
            <img
              className="h-[32.5px] w-[29.3px] relative"
              loading="lazy"
              alt=""
              src="/elements.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="h-[38px] relative inline-block text-white-a700_bf whitespace-nowrap mq800:text-7xl mq450:text-lgi">
              <b>₦</b>
              <span className="font-medium text-white-a700_bf">10,000,000.00</span>
            </div>
            <div className="relative text-xs font-medium text-white-a700_bf font-poppins inline-block min-w-[86px] mt-[-0.5px]">
              Total Revenue
            </div>
          </div>
        </div>
        <div className="mt-[-44px] h-[110px] w-28 relative min-w-[112px] text-white shrink-0 text-sm font-be-vietnam mq800:flex-1">
          <b className="absolute top-[23px] left-[0px] tracking-[-0.02em] leading-[24px] text-white inline-block min-w-[66px] z-[1]">
            This Week
          </b>
          <div className="absolute top-[0px] left-[2px] w-full h-full">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] border-gray-200 border-[0px] border-solid box-border w-[190px] h-[190px]" />
            <img
              className="absolute top-[23px] left-[68px] w-6 h-6 overflow-hidden z-[1]"
              loading="lazy"
              alt=""
              src="/arrowdown01sharp.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

WidgetContainer.propTypes = {
  className: PropTypes.string,
};

export default WidgetContainer;
