import PropTypes from "prop-types";

const WidgetContainer = ({ className = "", statistics }) => {
  return (
    <div
      className={`self-stretch flex flex-wrap items-start justify-start gap-6 max-w-full text-left text-mid text-white-a700_bf font-poppins ${className}`}
    >
      {/* Card 1 */}
      <div className="w-[390px] sm:w-[400px] rounded-xl bg-f2 overflow-hidden flex flex-col text-white items-start justify-start pt-[33px] px-[29px] pb-[35px] box-border gap-[33px] max-w-full z-[1] text-13xl font-work-sans">
        <div className="flex flex-col items-start justify-start gap-[4.5px] w-full">
          <div className="w-[52px] h-[52px] rounded-13xl bg-gray-500 overflow-hidden flex items-center justify-center p-2.5 box-border">
            <img
              className="h-[32.5px] w-[29.3px] relative"
              loading="lazy"
              alt=""
              src="/general--home-7.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="h-[38px] relative inline-block text-white-a700_bf whitespace-nowrap sm:text-7xl text-lg">
              <b>₦</b>
              <span className="font-medium text-white-a700_bf">{statistics?.other_commissions || "0"}</span>
            </div>
            <div className="relative text-xs font-medium text-white-a700_bf font-poppins inline-block sm:min-w-[86px] mt-[-0.5px]">
              Total Revenue
            </div>
          </div>
        </div>
        <div className="mt-[-44px] h-[110px] w-28 relative min-w-[112px] text-white text-sm font-be-vietnam sm:w-[190px] w-full">
          <div className="absolute top-[0px] left-[2px] w-full h-full">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] border-gray-200 border-[0px] border-solid box-border w-[190px] h-[190px]" />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      {/* <div className="w-[390px] sm:w-[400px] rounded-xl bg-dimgray-100 overflow-hidden flex flex-col text-white items-start justify-start pt-[33px] px-[29px] pb-[35px] box-border gap-[33px] max-w-full z-[1] text-13xl font-work-sans">
        <div className="flex flex-col items-start justify-start gap-[4.5px] w-full">
          <div className="w-[52px] h-[52px] rounded-13xl bg-gray-500 overflow-hidden flex items-center justify-center p-2.5 box-border">
            <img
              className="h-[32.5px] w-[29.3px] relative"
              loading="lazy"
              alt=""
              src="/general--home-7-1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="h-[38px] relative inline-block text-white-a700_bf whitespace-nowrap sm:text-7xl text-lg">
              <b>₦</b>
              <span className="font-medium text-white-a700_bf">5,000,000.00</span>
            </div>
            <div className="relative text-xs font-medium text-white-a700_bf font-poppins inline-block sm:min-w-[86px] mt-[-0.5px]">
              Booking Revenue
            </div>
          </div>
        </div>
        <div className="mt-[-44px] h-[110px] w-28 relative min-w-[112px] text-white text-sm font-be-vietnam sm:w-[190px] w-full">
          <div className="absolute top-[0px] left-[2px] w-full h-full">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] border-gray-200 border-[0px] border-solid box-border w-[190px] h-[190px]" />
          </div>
        </div>
      </div> */}

      {/* Card 3 */}
      <div className="w-[390px] sm:w-[400px] rounded-xl bg-deep_purple-400 overflow-hidden flex flex-col text-white items-start justify-start pt-[33px] px-[29px] pb-[35px] box-border gap-[33px] max-w-full z-[1] text-13xl font-work-sans">
        <div className="flex flex-col items-start justify-start gap-[4.5px] w-full">
          <div className="w-[52px] h-[52px] rounded-13xl bg-gray-500 overflow-hidden flex items-center justify-center p-2.5 box-border">
            <img
              className="h-[32.5px] w-[29.3px] relative"
              loading="lazy"
              alt=""
              src="/elements.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="h-[38px] relative inline-block text-white-a700_bf whitespace-nowrap sm:text-7xl text-lg">
              <b>₦</b>
              <span className="font-medium text-white-a700_bf">{statistics?.pending_payout || "0"}</span>
            </div>
            <div className="relative text-xs font-medium text-white-a700_bf font-poppins inline-block sm:min-w-[86px] mt-[-0.5px]">
              Pending Payments
            </div>
          </div>
        </div>
        <div className="mt-[-44px] h-[110px] w-28 relative min-w-[112px] text-white text-sm font-be-vietnam sm:w-[190px] w-full">
          <div className="absolute top-[0px] left-[2px] w-full h-full">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] border-gray-200 border-[0px] border-solid box-border w-[190px] h-[190px]" />
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
