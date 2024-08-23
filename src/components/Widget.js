import { useMemo } from "react";
import PropTypes from "prop-types";

const Widget = ({
  className = "",
  propBackgroundColor,
  generalHome7,
  propBorder,
  separator,
  propMinWidth,
  bookingRequests,
  propMinWidth1,
}) => {
  const widget6Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const revenueCardsStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const separatorStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const bookingRequestsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`h-[180px] w-[400px] rounded-xl bg-thistle overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[97px] px-[22px] pb-[35px] box-border max-w-full z-[1] text-left text-mid text-light-mode-white-5-ffffff font-poppins ${className}`}
      style={widget6Style}
    >
      <div className="mt-[-108px] w-[394.5px] h-[110px] flex flex-row items-end justify-start gap-[232.5px] max-w-[111%] shrink-0 mq800:gap-[116px]">
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-4">
          <img
            className="w-[52px] h-[52px] relative rounded-13xl"
            loading="lazy"
            alt=""
            src={generalHome7}
          />
        </div>
        <div
          className="h-[190px] w-[190px] relative rounded-[50%] border-plum border-[0px] border-solid box-border shrink-0"
          style={revenueCardsStyle}
        />
      </div>
      <div className="flex flex-row items-start justify-start py-0 px-1.5 mt-[-2px]">
        <div className="flex flex-col items-start justify-start gap-1">
          <div
            className="relative font-semibold inline-block min-w-[22px]"
            style={separatorStyle}
          >
            {separator}
          </div>
          <div
            className="relative text-xs font-medium inline-block min-w-[108px]"
            style={bookingRequestsStyle}
          >
            {bookingRequests}
          </div>
        </div>
      </div>
    </div>
  );
};

Widget.propTypes = {
  className: PropTypes.string,
  generalHome7: PropTypes.string,
  separator: PropTypes.string,
  bookingRequests: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propBorder: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Widget;
