import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[23px] box-border max-w-full text-left text-xs text-light-mode-white-5-ffffff font-poppins ${className}`}
    >
      <div className="flex-1 bg-light-mode-white-5-ffffff overflow-hidden flex flex-row items-end justify-between pt-[21px] px-16 pb-[22px] box-border max-w-full gap-5 mq975:flex-wrap mq975:pl-8 mq975:pr-8 mq975:box-border">
        <div className="h-[39px] w-[97px] relative hidden">
          <div className="absolute top-[0px] left-[0px] rounded bg-gray-300 w-full h-full" />
          <div className="absolute top-[11px] left-[9px]">Components</div>
        </div>
        <div className="h-[39px] w-[49px] relative hidden">
          <div className="absolute top-[0px] left-[0px] rounded bg-gray-300 w-full h-full" />
          <div className="absolute top-[11px] left-[9px]">Apps</div>
        </div>
        <div className="flex flex-row items-start justify-start gap-4 max-w-full text-silver mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
          <Link to='/dashboard' className="[text-decoration:none] relative text-xs font-medium font-poppins text-gray-200 text-left inline-block min-w-[68px] z-[1]">Dashboard</Link>
          </div>
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
          <Link to='/pitch-listing' className="[text-decoration:none] relative text-xs font-medium font-poppins text-gray-200 text-left inline-block min-w-[68px] z-[1]">Pitch Listing</Link>
          </div>
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
          <Link to='/booking-management' className="[text-decoration:none] relative text-xs font-medium font-poppins text-gray-200 text-left inline-block min-w-[68px] z-[1]">Booking Management</Link>
          </div>
          <button className="cursor-pointer [border:none] pt-[11px] px-[22px] pb-2.5 bg-f2 rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslategray-300">
            <div className="h-[39px] w-[116px] relative rounded-md bg-f2 hidden" />
            <div className="relative text-xs font-medium font-poppins text-light-mode-white-5-ffffff text-left inline-block min-w-[72px] z-[1]">
            <Link to='/profile-setting' className="[text-decoration:none] relative text-xs font-medium font-poppins text-ghostwhite text-left inline-block min-w-[68px] z-[1]">Profile Setting</Link>
            </div>
          </button>
        </div>
        {/* <div className="w-[250px] rounded-md bg-f2 border-dimgray-200 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[9px] px-[18px] pb-2 gap-2 text-smi">
          <div className="h-[42px] w-[250px] relative rounded-md bg-f2 border-dimgray-200 border-[1px] border-solid box-border hidden" />
          <img
            className="h-[19px] w-[19px] relative object-cover z-[1]"
            alt=""
            src="/search-logo@2x.png"
          />
           <input
    type="text"
    className="h-[10px] w-full rounded-md bg-f2 border-none focus:outline-none outline-none placeholder-silver text-silver"
    placeholder="Search..."
  />
        </div> */}
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
