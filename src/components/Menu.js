import PropTypes from "prop-types";

const Menu = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch bg-light-mode-white-5-ffffff overflow-hidden flex flex-row items-start justify-start pt-6 px-16 pb-[22px] gap-4 text-left text-xs text-silver font-poppins mq450:flex-wrap mq725:pl-8 mq725:pr-8 mq725:box-border ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
        <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[68px]">
          Dashboard
        </a>
      </div>
      <div className="h-[39px] w-[97px] relative hidden text-light-mode-white-5-ffffff">
        <div className="absolute top-[0px] left-[0px] rounded bg-gray-300 w-full h-full" />
        <div className="absolute top-[11px] left-[9px]">Components</div>
      </div>
      <button className="cursor-pointer [border:none] pt-[11px] px-[22px] pb-2.5 bg-f2 rounded-md flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslategray-300">
        <div className="h-[39px] w-[116px] relative rounded-md bg-f2 hidden" />
        <div className="relative text-xs font-medium font-poppins text-light-mode-white-5-ffffff text-left inline-block min-w-[72px] z-[1]">
          Pitch Listing
        </div>
      </button>
      <div className="h-[39px] w-[49px] relative hidden text-light-mode-white-5-ffffff">
        <div className="absolute top-[0px] left-[0px] rounded bg-gray-300 w-full h-full" />
        <div className="absolute top-[11px] left-[9px]">Apps</div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
        <div className="relative font-medium">Booking Management</div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};

export default Menu;
