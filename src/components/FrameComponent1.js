import { useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "./Button";

const FrameComponent1 = ({ className = "", propFlex, propAlignSelf }) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  return (
    <div
      className={`flex-1 bg-light-mode-white-5-ffffff overflow-hidden flex flex-row items-end justify-between pt-[22px] px-16 pb-[21px] box-border max-w-full gap-5 text-left text-xs text-light-mode-white-5-ffffff font-poppins mq750:flex-wrap mq750:pl-8 mq750:pr-8 mq750:box-border ${className}`}
      style={frameDivStyle}
    >
      <div className="h-[39px] w-[97px] relative hidden">
        <div className="absolute top-[0px] left-[0px] rounded bg-gray-300 w-full h-full" />
        <div className="absolute top-[11px] left-[9px]">Components</div>
      </div>
      <div className="w-[356px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border max-w-full text-silver">
        <div className="self-stretch flex flex-row items-start justify-start gap-[19px] mq450:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-2.5 pb-0 pl-0 pr-[19px]">
          <Link to='/dashboard' className="[text-decoration:none] relative text-xs font-medium font-poppins text-gray-200 text-left inline-block min-w-[68px] z-[1] text-black-900">Dashboard</Link>
          </div>
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <div className="relative font-medium inline-block min-w-[72px]">
              <Link to='/pitch-listing' className="[text-decoration:none] relative text-xs font-medium font-poppins text-gray-200 text-left inline-block min-w-[68px] z-[1]">Pitch Listing</Link>
            </div>
          </div>
          <div className="rounded-md bg-f2 flex flex-row items-start justify-start pt-2.5 px-3 pb-[11px] text-light-mode-white-5-ffffff">
            <div className="h-[39px] w-[49px] relative hidden">
              <div className="absolute top-[0px] left-[0px] rounded bg-gray-300 w-full h-full" />
              <div className="absolute top-[11px] left-[9px]">Apps</div>
            </div>
            <Link to='/booking-management' className="[text-decoration:none] relative text-xs font-medium font-poppins text-ghostwhite text-left inline-block min-w-[140px] z-[1]">Booking Management</Link>
          </div>
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <div className="relative font-medium inline-block min-w-[92px]">
              <Link to='/profile-setting' className="[text-decoration:none] relative text-xs font-medium font-poppins text-gray-200 text-left inline-block min-w-[68px] z-[1]">Profile Setting</Link>
            </div>
          </div>
        </div>
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
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default FrameComponent1;
