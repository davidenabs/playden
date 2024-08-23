import PropTypes from "prop-types";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full text-left text-xs text-light-mode-white-5-ffffff font-poppins ${className}`}
    >
      <div className="flex-1 bg-light-mode-white-5-ffffff overflow-hidden flex flex-row items-start justify-start flex-wrap content-start pt-[22px] px-16 pb-[21px] box-border gap-[25px] max-w-full z-[1] mq800:pl-8 mq800:pr-8 mq800:box-border">
        <div className="w-[116px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
          <button className="cursor-pointer [border:none] pt-[11px] px-[21px] pb-2.5 bg-f2 self-stretch rounded-md flex flex-row items-start justify-start hover:bg-darkslategray-300">
            <div className="h-[39px] w-[116px] relative rounded-md bg-f2 hidden" />
            <a className="[text-decoration:none] relative text-xs font-medium font-poppins text-light-mode-white-5-ffffff text-left inline-block min-w-[68px] z-[1]">
            <Link to='/' className="no-underline text-silver">Dashboard</Link>
            </a>
          </button>
        </div>
        <div className="h-[39px] w-[97px] relative hidden">
          <div className="absolute top-[0px] left-[0px] rounded bg-gray-300 w-full h-full" />
          <div className="absolute top-[11px] left-[9px]">Components</div>
        </div>
        <div className="h-[39px] w-[49px] relative hidden">
          <div className="absolute top-[0px] left-[0px] rounded bg-gray-300 w-full h-full" />
          <div className="absolute top-[11px] left-[9px]">Apps</div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[582px] max-w-full text-silver mq800:min-w-full">
          <div className="flex flex-row items-start justify-start gap-6">
            <div className="relative font-medium inline-block min-w-[72px]">
            
             <Link to='/pitch-listing' className="no-underline text-silver">Pitch Listing</Link>
             
            </div>
            <div className="relative font-medium">
            <Link to='/pitch-listing' className="no-underline text-silver">Booking Management</Link>
            </div>
          </div>
        </div>
        <div className="w-[250px] rounded-md bg-f2 border-dimgray-200 border-[1px] border-solid box-border flex flex-row items-start justify-start pt-[9px] px-[18px] pb-2 gap-2 text-smi">
          <div className="h-[42px] w-[250px] relative rounded-md bg-f2 border-dimgray-200 border-[1px] border-solid box-border hidden" />
          <img
            className="h-[19px] w-[19px] relative object-cover z-[1]"
            alt=""
            src="/search-logo@2x.png"
          />
          <div className="relative inline-block min-w-[59px] z-[1]">
            Search...
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
