import PropTypes from "prop-types";
import { Img } from "./Img";

const FrameComponent = ({ className = "", aare }) => {
  return (
    <header
      className={`self-stretch h-[151px] relative bg-icons overflow-hidden shrink-0 max-w-full text-left text-smi text-light-mode-white-5-ffffff font-poppins mq725:h-auto mq725:min-h-[151] ${className}`}
    >
      <div className="absolute top-[0px] left-[1154px] w-[286px] h-[148px] overflow-hidden flex flex-row items-start justify-start py-0 pl-[9px] pr-0 box-border">
        <Img
          className="mt-[-106px] h-[492px] w-[369px] relative object-contain shrink-0 max-w-[134%]"
          alt=""
          src={aare}
        />
      </div>
      <div className="absolute top-[22.9px] left-[64px] w-[1194.5px] flex flex-row items-end justify-between gap-5 max-w-full mq725:flex-wrap">
        <div className="w-[217px] flex flex-row items-end justify-start gap-[22px]">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3px]">
            <Img
              className="w-[50px] h-[50px] relative object-cover"
              loading="lazy"
              alt=""
              src="/artboard-12-1@2x.png"
            />
          </div>
          <div className="flex-1 rounded-md bg-f border-none-200 border-[1px] border-none flex flex-row items-start justify-between pt-1.5 pb-2 pl-3.5 pr-1 gap-5">
  <div className="h-[36px] w-[145px] relative rounded-md bg-f2 border-darkslategray-200 border-[1px] border-solid box-border hidden" />
  
  <select
    className="relative text-base inline-block min-w-[44px] h-[36px] z-[1] rounded-md text-ghostwhite bg-f2 border-none outline-none pr-[65px]"
    defaultValue="Admin"
    style={{ appearance: "none", WebkitAppearance: "none", MozAppearance: "none" }}
  >
    <option value="Admin" className="text-base">Admin</option>
    <option value="User">User</option>
    <option value="Guest">Guest</option>
  </select>
  
  <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
    <img
      className="w-[7px] h-1 relative rounded-12xs z-[1]"
      alt=""
      src="/amin-icon.svg"
    />
  </div>
</div>

        </div>
        <div className="w-[257px] flex flex-col items-start justify-end pt-0 px-0 pb-2 box-border text-xs text-black">
          <div className="self-stretch flex flex-row items-start justify-between gap-5">
            <div className="w-[152.5px] flex flex-col items-start justify-start pt-[30.1px] px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[7px] shrink-0">
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
                    <span className="text-smi"> Zak</span>
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
            <Img
              className="h-[17px] w-[15.8px] relative object-contain shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/shape.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  aare: PropTypes.string,
};

export default FrameComponent;
