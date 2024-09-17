import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import ContentArea from "../components/ContentArea";

const BookingDetails = () => {
  return (
    <div className="w-full relative bg-light-mode-gray-10-f5f5f5 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[163px] box-border leading-[normal] tracking-[normal]">
      <FrameComponent aare="/aare3@2x.png" username={username}/>
      <section className="self-stretch flex flex-col items-end justify-start gap-6 max-w-full">
        <FrameComponent1 propFlex="unset" propAlignSelf="stretch" />
        <ContentArea />
      </section>
    </div>
  );
};

export default BookingDetails;
