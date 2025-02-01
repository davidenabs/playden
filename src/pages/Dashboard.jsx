import FrameComponent from "../components/FrameComponent";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import WidgetContainer from "../components/WidgetContainer";

const Dashboard = () => {
  return (
    <div className="w-full relative bg-light-mode-gray-10-f5f5f5 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <img
        className="w-[1770px] h-[1156.1px] absolute !m-[0] bottom-[-152.1px] left-[calc(50%_-_885px)] object-cover"
        alt=""
        src="/back@2x.png"
      />
      <FrameComponent aare="/aare1@2x.png" />
      <FrameComponent4 />
      <section className="self-stretch flex pt-10 pb-0 mb-0 flex-row bg-gray-500 items-start justify-start py-0 px-16 box-border md:h-0 max-w-full h-[0%] mq800:pl-8 mq1350:h-0 mq800:pr-8 mq800:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
          <WidgetContainer />
           <FrameComponent5 /> 
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
