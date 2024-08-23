import Container from "./Container";
import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[15.3px] max-w-full text-center text-base text-text font-poppins ${className}`}
    >
      <Container image8="/image-81@2x.png" />
      <Container image8="/image-81@2x.png" />
      <Container image8="/image-81@2x.png" />
      <Container image8="/image-81@2x.png" />
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
