import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Container = ({ className = "", image8 }) => {
  const navigate = useNavigate();

  const onViewClick = useCallback(() => {
    navigate("/pitch-history");
  }, [navigate]);

  return (
    <div
      className={`self-stretch bg-white-a700_bf flex flex-row items-start justify-between py-0 pl-0 pr-6 box-border max-w-full gap-5 text-center text-base text-text font-poppins mq1000:flex-wrap mq1000:p-5 mq1000:box-border ${className}`}
    >
      <div className="w-[614px] flex flex-row items-start justify-start gap-[23px] max-w-full mq725:flex-wrap">
        <img
          className="h-[155px] flex-1 relative rounded-xl max-w-full overflow-hidden object-cover min-w-[234px]"
          loading="lazy"
          alt=""
          src={image8}
        />
        <div className="flex flex-col items-start justify-start pt-[33px] px-0 pb-0 box-border min-w-[231px] mq725:flex-1">
          <div className="flex flex-col items-start justify-start gap-[9px]">
            <div className="relative tracking-[-0.5px] leading-[14px] inline-block min-w-[114px]">{`SPORT: Football `}</div>
            <div className="flex flex-row items-start justify-start py-0 px-px">
              <div className="relative tracking-[-0.5px] leading-[14px] inline-block min-w-[110px]">{`PITCH SIZE: 5X5 `}</div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pl-px pr-0">
              <div className="relative tracking-[-0.5px] leading-[14px]">{`PITCH MANAGER: Ahmed Salisu `}</div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-0.5">
              <div className="relative tracking-[-0.5px] leading-[14px] inline-block min-w-[123px]">{`PRIZE: N10,000/hr `}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[188px] flex flex-col items-start justify-start pt-[55px] px-0 pb-0 box-border">
        <button
          className="cursor-pointer [border:none] py-2 px-6 bg-icons self-stretch rounded-2xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-slategray-200"
          onClick={onViewClick}
        >
          <div className="flex-1 relative text-base leading-[175%] font-inter text-ghostwhite text-center">
            View details
          </div>
        </button>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  image8: PropTypes.string,
};

export default Container;
