import FrameComponent1 from "./FrameComponent1";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-8 box-border max-w-full text-left text-xs text-light-mode-white-5-ffffff font-poppins ${className}`}
    >
      <FrameComponent1 />
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
