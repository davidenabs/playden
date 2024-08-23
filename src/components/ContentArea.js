import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ContentArea = ({ className = "" }) => {
  const navigate = useNavigate();

  const onConfirmButtonClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full text-left text-sm text-lightslategray font-oxygen ${className}`}
    >
      <div className="w-[1115px] shadow-[0px_4px_20px_rgba(184,_168,_168,_0.1)] rounded bg-light-mode-white-5-ffffff border-whitesmoke-200 border-[1px] border-solid box-border flex flex-col items-start justify-start pt-6 px-[29px] pb-[121px] gap-12 max-w-full mq675:gap-6 mq675:pt-5 mq675:pb-[79px] mq675:box-border">
        <div className="w-[1115px] h-[596px] relative shadow-[0px_4px_20px_rgba(184,_168,_168,_0.1)] rounded bg-light-mode-white-5-ffffff border-whitesmoke-200 border-[1px] border-solid box-border hidden max-w-full" />
        <div className="flex flex-row items-start justify-start py-0 px-0.5">
          <div className="flex flex-row items-start justify-start gap-[6.5px]">
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative leading-[17px] z-[1]">
                Booking confirmation
              </div>
            </div>
            <div className="relative text-base leading-[120%] text-saddlebrown inline-block min-w-[10px] z-[1]">{`>`}</div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
              <div className="relative leading-[17px] inline-block min-w-[98px] z-[1]">
                Booking details
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1040px] flex flex-col items-start justify-start gap-[43px] max-w-full text-lg text-black mq675:gap-[21px]">
          <div className="flex flex-col items-start justify-start gap-[7px]">
            <h3 className="m-0 relative text-inherit leading-[22px] font-bold font-[inherit] z-[1]">
              Oyinkansola Soleye
            </h3>
            <div className="relative text-xs font-medium font-poppins text-f2 inline-block min-w-[57px] z-[1]">
              #445664
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[18px] pr-0 box-border max-w-full text-xs text-darkslategray-400">
            <div className="flex-1 flex flex-row items-start justify-start flex-wrap content-start gap-[37px] max-w-full mq675:gap-[18px]">
              <div className="h-[227px] w-[202px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/23edeef2d1cb4d1392344b37c50f2ff1-1@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[27.1px] min-w-[509px] max-w-full mq750:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16.5px]">
                  <input
                    className="w-[121px] [border:none] [outline:none] inline-block font-oxygen text-base bg-[transparent] h-[19px] relative leading-[120%] font-bold text-darkslategray-400 text-left p-0 z-[1]"
                    placeholder="Booking Details"
                    type="text"
                  />
                  <div className="self-stretch h-[0.4px] relative border-gainsboro-200 border-t-[0.4px] border-solid box-border z-[1]" />
                </div>
                <div className="w-[228px] flex flex-row items-start justify-start pt-0 px-px pb-[29.9px] box-border">
                  <div className="flex-1 flex flex-col items-start justify-start gap-4">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[22px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                        <div className="relative leading-[120%] inline-block min-w-[65px] z-[1]">
                          Date joined:
                        </div>
                        <div className="relative leading-[120%] inline-block min-w-[88px] z-[1]">
                          Mobile Number:
                        </div>
                        <div className="relative leading-[120%] inline-block min-w-[104px] z-[1]">
                          State of Residence:
                        </div>
                        <div className="relative leading-[120%] inline-block min-w-[71px] z-[1]">
                          Sport choice:
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[15px]">
                        <div className="relative leading-[120%] inline-block min-w-[72px] z-[1]">
                          20 Dec, 2024
                        </div>
                        <div className="relative leading-[120%] inline-block min-w-[100px] whitespace-nowrap z-[1]">
                          +234 7066048648
                        </div>
                        <div className="relative leading-[120%] inline-block min-w-[41px] z-[1]">
                          Kaduna
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-1.5">
                          <div className="relative leading-[120%] inline-block min-w-[45px] z-[1]">
                            Football
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[209px] flex flex-row items-start justify-start py-0 px-px box-border">
                      <div className="flex-1 flex flex-row items-start justify-between gap-5">
                        <div className="relative leading-[120%] inline-block min-w-[29px] z-[1]">
                          Pitch:
                        </div>
                        <div className="relative leading-[120%] inline-block min-w-[117px] z-[1]">
                          Plutous Football pitch
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[190px] flex flex-row items-start justify-start py-0 px-px box-border">
                  <button
                    className="cursor-pointer [border:none] py-2 px-6 bg-icons flex-1 rounded-2xl flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-slategray-200"
                    onClick={onConfirmButtonClick}
                  >
                    <div className="flex-1 relative text-base leading-[175%] font-inter text-light-mode-white-5-ffffff text-center">
                      Confirm Booking
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContentArea.propTypes = {
  className: PropTypes.string,
};

export default ContentArea;
