import FrameComponent from "../components/FrameComponent";
import FrameComponent2 from "../components/FrameComponent2";
import Content from "../components/Content";

const PitchListing = () => {
  return (
    <div className="w-full relative bg-light-mode-gray-10-f5f5f5 overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[99px] box-border leading-[normal] tracking-[normal]">
      <FrameComponent aare="/aare1@2x.png" />
      <FrameComponent2 />
      <section className="self-stretch flex flex-row items-start justify-end py-0 pl-[65px] pr-16 box-border max-w-full mq975:pl-8 mq975:pr-8 mq975:box-border">
        <Content />
      </section>
    </div>
  );
};

export default PitchListing;
