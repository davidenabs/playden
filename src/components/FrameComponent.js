import PropTypes from "prop-types";
import { Img } from "./Img";
import { memo } from "react";

const FrameComponent = memo(({ className = "", aare, username }) => {
  return (
    <header
    className={`self-stretch h-[130px] mq450:h-[60px] relative bg-icons overflow-hidden shrink-0 max-w-full text-left text-smi text-light-mode-white-5-ffffff font-poppins mq725:h-auto mq725:min-h-[131px] ${className}`}
  >
    <div className="absolute top-[0px] left-[1154px] w-[286px] h-[148px] overflow-hidden flex flex-row items-start justify-start py-0 pl-[9px] pr-0 box-border">
      <Img
       className="mt-[-106px] h-[492px] w-[369px] relative object-contain shrink-0 max-w-[134%]"
        alt=""
        src={aare}
      />
    </div>
    <div className="absolute top-[22.9px] left-[64px] top-[40px] mq450:left-[10px] right-[10px] flex flex-row items-end justify-between gap-5 max-w-full mq725:flex-wrap">
      <div className="flex flex-row items-end justify-start gap-4">
        <div className="flex flex-col items-start justify-end pt-0 pb-[7px]">
          <Img
            className="w-[50px] h-[50px] relative object-cover"
            loading="lazy"
            alt=""
            src="/artboard-12-1@2x.png"
          />
        </div>
        <div className="flex-1 rounded-md bg-f border-none-200 border-[1px] border-none flex flex-row items-start justify-between pt-1.5 pb-2 pl-3.5 pr-1 gap-2">
          <select
            className="relative text-base inline-block min-w-[44px] h-[36px] z-[1] rounded-md text-ghostwhite bg-f2 border-none outline-none pr-[65px]"
            defaultValue="Admin"
            style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
          >
            <option value="Admin" className="text-base">Admin</option>
            <option value="User">User</option>
            <option value="Guest">Guest</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col items-start justify-end text-xs text-black mr-[170px] mq450:ml-[196px] mq450:absolute mq450:left-[20px]">
        <div className="flex flex-row items-start justify-between gap-5">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-start gap-[7px] shrink-0">
              <div className="flex flex-col items-start justify-start pt-2.5 pb-0 pl-0 pr-[18px]">
                <Img
                  className="w-6 h-6 relative"
                  loading="lazy"
                  alt=""
                  src="/icons.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0">
              <div className="self-stretch relative font-medium text-ghostwhite">
                    <span>Hi</span>
                    <span className="text-2xs">,</span>
                    <span className="text-smi">{username || 'User'}</span>
                  </div>
                </div>
                <div className="w-[43px] rounded-md bg-f2 flex flex-row items-start justify-start pt-[9px] px-3.5 pb-2.5 box-border text-4xl text-light-mode-white-5-ffffff">
                  <div className="h-[43px] w-[43px] relative rounded-md bg-f2 hidden" />
                  <a className="[text-decoration:none] relative leading-[24px] text-[inherit] inline-block min-w-[13px] z-[1] mq450:text-lg mq450:leading-[19px] text-ghostwhite">
                    Z
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </header>
  );
});

FrameComponent.propTypes = {
  className: PropTypes.string,
  aare: PropTypes.string,
  username: PropTypes.string,
};

export default FrameComponent;
