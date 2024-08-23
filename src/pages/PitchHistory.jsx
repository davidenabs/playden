import FrameComponent from "../components/FrameComponent";
import Menu from "../components/Menu";

const PitchHistory = () => {
  return (
    <div className="w-full relative bg-light-mode-gray-10-f5f5f5 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[38.1px] box-border leading-[normal] tracking-[normal]">
      <FrameComponent aare="/aare@2x.png" />
      <main className="self-stretch flex flex-col items-end justify-start gap-[24.1px] max-w-full">
        <Menu />
        <section className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5 box-border max-w-full text-center text-base text-text font-poppins">
          <div className="w-[1145px] rounded-lg bg-light-mode-white-5-ffffff flex flex-col items-start justify-start py-5 px-[34px] box-border gap-[35px] max-w-full mq725:gap-[17px]">
            <div className="w-[652px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start gap-8 max-w-full mq725:gap-4 mq725:flex-wrap">
                <img
                  className="h-[236px] w-[299px] relative rounded-xl object-cover mq725:flex-1"
                  loading="lazy"
                  alt=""
                  src="/image-8@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[206px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-4">
                    <div className="flex flex-col items-start justify-start gap-2">
                      <div className="relative tracking-[-0.5px] leading-[14px]">{`PITCH NAME: Plutous cluchouse field `}</div>
                      <div className="relative tracking-[-0.5px] leading-[14px] inline-block min-w-[114px]">{`SPORT: Football `}</div>
                      <div className="relative tracking-[-0.5px] leading-[14px] inline-block min-w-[110px]">{`PITCH SIZE: 5X5 `}</div>
                      <div className="relative tracking-[-0.5px] leading-[14px]">{`PITCH MANAGER: Ahmed Salisu `}</div>
                      <div className="relative tracking-[-0.5px] leading-[14px] inline-block min-w-[123px]">{`PRIZE: N10,000/hr `}</div>
                    </div>
                    <b className="relative text-xl tracking-[-0.5px] leading-[14px] whitespace-pre-wrap mq450:text-base mq450:leading-[11px]">{`TOTAL REVENUE:  ₦10,000,000.00 `}</b>
                  </div>
                </div>
              </div>
            </div>
            <footer className="self-stretch shadow-[0px_1.8px_3.69px_rgba(243,_246,_249,_0.8)] rounded-2xl bg-light-mode-white-5-ffffff flex flex-col items-start justify-start pt-3.5 px-0 pb-[17.5px] box-border gap-[7.7px] max-w-full z-[2] text-left text-xl text-darkslategray-500 font-work-sans">
              <div className="self-stretch h-[63px] relative rounded-12xs-7 bg-whitesmoke-100 hidden" />
              <div className="self-stretch h-[63px] relative rounded-12xs-7 bg-whitesmoke-100 hidden" />
              <div className="self-stretch h-[63px] relative rounded-12xs-7 bg-light-mode-white-5-ffffff hidden" />
              <div className="self-stretch h-[63px] relative rounded-12xs-7 bg-light-mode-white-5-ffffff hidden" />
              <div className="relative tracking-[0.1px] leading-[24px] font-medium font-poppins hidden mq450:text-base mq450:leading-[19px]">
                Transaction History
              </div>
              <div className="w-[1064.9px] h-[0.7px] relative rounded-12xs-7 bg-light-mode-gray-10-f5f5f5 hidden max-w-full" />
              <div className="w-[1064.9px] h-[0.7px] relative rounded-12xs-7 bg-light-mode-gray-10-f5f5f5 hidden max-w-full" />
              <div className="w-[1064.9px] h-[0.7px] relative rounded-12xs-7 bg-light-mode-gray-10-f5f5f5 hidden max-w-full" />
              <div className="w-[1064.9px] h-[0.7px] relative rounded-12xs-7 bg-light-mode-gray-10-f5f5f5 hidden max-w-full" />
              <div className="self-stretch h-[65px] relative hidden">
                <div className="absolute top-[0px] left-[calc(50%_-_538.5px)] rounded-12xs-7 w-full h-full" />
              </div>
              <div className="self-stretch h-[414.8px] relative shadow-[0px_1.8px_3.69px_rgba(243,_246,_249,_0.8)] rounded-2xl bg-light-mode-white-5-ffffff hidden" />
              <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[47px] pb-[5.3px] box-border max-w-full text-icons mq1050:pl-[23px] mq1050:pr-[23px] mq1050:box-border">
                <div className="w-[969px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
                  <h3 className="m-0 relative text-inherit tracking-[0.1px] leading-[24px] font-medium font-[inherit] z-[3] mq450:text-base mq450:leading-[19px]">
                    Pitch Booking History
                  </h3>
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 text-xs text-black font-poppins">
                    <div className="relative tracking-[0.2px] leading-[16px] inline-block min-w-[41px] z-[3]">
                      See All
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[8.2px] flex flex-row items-start justify-start pt-0 px-0 pb-[7.5px] box-border max-w-full">
                <div className="self-stretch flex-1 relative rounded-12xs-7 bg-gainsboro-100 max-w-full z-[3]" />
              </div>
              <div className="w-[971px] flex flex-row items-start justify-start pt-0 px-[60px] pb-[8.3px] box-border max-w-full text-base text-slategray-100 mq1000:pl-[30px] mq1000:pr-[30px] mq1000:box-border">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1000:flex-wrap">
                  <div className="w-[103.8px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border">
                    <div className="w-[50px] relative tracking-[0.2px] leading-[16px] capitalize inline-block z-[3]">
                      Name
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[9px]">
                    <div className="relative tracking-[0.2px] leading-[16px] capitalize inline-block min-w-[84px] z-[3]">
                      Date/Time
                    </div>
                  </div>
                  <div className="w-36 relative tracking-[0.2px] leading-[16px] capitalize inline-block shrink-0 z-[3]">
                    Amount
                  </div>
                  <div className="w-[202.4px] flex flex-col items-start justify-start py-0 pl-0 pr-5 box-border font-poppins">
                    <div className="relative tracking-[0.2px] leading-[16px] capitalize inline-block min-w-[94px] z-[3]">
                      pitch Name
                    </div>
                  </div>
                  <div className="relative tracking-[0.2px] leading-[16px] capitalize inline-block min-w-[52px] z-[3]">
                    Action
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[0.7px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
                <div className="self-stretch flex-1 relative rounded-12xs-7 bg-gainsboro-100 max-w-full z-[3]" />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[57px] pr-[55px] box-border max-w-full text-sm text-f2 font-inter mq1050:pl-7 mq1050:pr-[27px] mq1050:box-border">
                <div className="flex-1 flex flex-col items-end justify-start gap-[21.6px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-between gap-5 mq1000:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-[6.6px]">
                      <div className="relative inline-block min-w-[92px] z-[3]">
                        Hassan Abdul
                      </div>
                      <div className="relative text-xs text-gray-200 inline-block min-w-[104px] z-[3]">
                        Ref# 1203948384
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[1.4px] pb-0 pl-0 pr-1">
                      <div className="flex flex-col items-start justify-start gap-[7px]">
                        <div className="relative inline-block min-w-[88px] z-[3]">
                          June 4, 2020
                        </div>
                        <div className="relative text-xs text-gray-200 inline-block min-w-[75px] whitespace-nowrap z-[3]">
                          05:34:45 AM
                        </div>
                      </div>
                    </div>
                    <div className="w-36 flex flex-col items-start justify-start pt-[1.7px] pb-0 pl-0 pr-5 box-border">
                      <div className="relative inline-block min-w-[80px] whitespace-nowrap z-[3]">
                        <b>₦</b>
                        <span>10,000.00</span>
                      </div>
                    </div>
                    <div className="w-[202.2px] flex flex-col items-start justify-start pt-[1.6px] pb-0 pl-0 pr-5 box-border text-base font-poppins">
                      <div className="relative tracking-[-0.5px] leading-[14px] z-[3]">
                        Plutous cluchouse field
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[1.6px] px-0 pb-0">
                      <div className="relative [text-decoration:underline] z-[3]">
                        View Transaction Details
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-5 mq1000:flex-wrap">
                    <div className="flex flex-col items-start justify-start gap-[6.2px]">
                      <div className="relative inline-block min-w-[92px] z-[3]">
                        Hassan Abdul
                      </div>
                      <div className="relative text-xs text-gray-200 inline-block min-w-[104px] z-[3]">
                        Ref# 1203948384
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[3.3px] pb-0 pl-0 pr-[3px]">
                      <div className="flex flex-col items-start justify-start gap-[7px]">
                        <div className="relative inline-block min-w-[88px] z-[3]">
                          June 5, 2020
                        </div>
                        <div className="relative text-xs text-gray-200 inline-block min-w-[75px] whitespace-nowrap z-[3]">
                          05:34:45 AM
                        </div>
                      </div>
                    </div>
                    <div className="w-[143.6px] flex flex-col items-start justify-start pt-[2.7px] pb-0 pl-0 pr-5 box-border">
                      <div className="relative inline-block min-w-[80px] whitespace-nowrap z-[3]">
                        <b>₦</b>
                        <span>10,000.00</span>
                      </div>
                    </div>
                    <div className="w-[201.8px] flex flex-col items-start justify-start pt-[2.6px] pb-0 pl-0 pr-5 box-border text-base font-poppins">
                      <div className="relative tracking-[-0.5px] leading-[14px] z-[3]">
                        Plutous cluchouse field
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[2.6px] px-0 pb-0">
                      <div className="relative [text-decoration:underline] z-[3]">
                        View Transaction Details
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-4">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[18.9px]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq1000:flex-wrap">
                        <div className="flex flex-col items-start justify-start gap-[6.1px]">
                          <div className="relative inline-block min-w-[92px] z-[3]">
                            Hassan Abdul
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0 text-xs text-gray-200">
                            <div className="relative inline-block min-w-[104px] z-[3]">
                              Ref# 1203948384
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[2.1px] pb-0 pl-0 pr-[3px]">
                          <div className="flex flex-col items-start justify-start gap-[7px]">
                            <div className="relative inline-block min-w-[88px] z-[3]">
                              June 5, 2020
                            </div>
                            <div className="relative text-xs text-gray-200 inline-block min-w-[75px] whitespace-nowrap z-[3]">
                              05:34:45 AM
                            </div>
                          </div>
                        </div>
                        <div className="w-[143.6px] flex flex-col items-start justify-start pt-[1.7px] pb-0 pl-0 pr-5 box-border">
                          <div className="relative inline-block min-w-[80px] whitespace-nowrap z-[3]">
                            <b>₦</b>
                            <span>10,000.00</span>
                          </div>
                        </div>
                        <div className="w-[201.8px] flex flex-col items-start justify-start pt-[1.6px] pb-0 pl-0 pr-5 box-border text-base font-poppins">
                          <div className="relative tracking-[-0.5px] leading-[14px] z-[3]">
                            Plutous cluchouse field
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[1.6px] px-0 pb-0">
                          <div className="relative [text-decoration:underline] z-[3]">
                            View Transaction Details
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq1000:flex-wrap">
                        <div className="flex flex-col items-start justify-start gap-[7px]">
                          <div className="relative inline-block min-w-[92px] z-[3]">
                            Hassan Abdul
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0 text-xs text-gray-200">
                            <div className="relative inline-block min-w-[104px] z-[3]">
                              Ref# 1203948384
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[5.2px] pb-0 pl-0 pr-[3px]">
                          <div className="flex flex-col items-start justify-start gap-[6.8px]">
                            <div className="relative inline-block min-w-[88px] z-[3]">
                              June 5, 2020
                            </div>
                            <div className="relative text-xs text-gray-200 inline-block min-w-[75px] whitespace-nowrap z-[3]">
                              05:34:45 AM
                            </div>
                          </div>
                        </div>
                        <div className="w-[143.6px] flex flex-col items-start justify-start pt-[4.7px] pb-0 pl-0 pr-5 box-border">
                          <div className="relative inline-block min-w-[80px] whitespace-nowrap z-[3]">
                            <b>₦</b>
                            <span>10,000.00</span>
                          </div>
                        </div>
                        <div className="w-[201.8px] flex flex-col items-start justify-start pt-[4.6px] pb-0 pl-0 pr-5 box-border text-base font-poppins">
                          <div className="relative tracking-[-0.5px] leading-[14px] z-[3]">
                            Plutous cluchouse field
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[4.6px] px-0 pb-0">
                          <div className="relative [text-decoration:underline] z-[3]">
                            View Transaction Details
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between gap-5 mq1000:flex-wrap">
                      <div className="flex flex-col items-start justify-start gap-[6.9px]">
                        <div className="relative inline-block min-w-[92px] z-[3]">
                          Hassan Abdul
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pl-[3px] pr-0 text-xs text-gray-200">
                          <div className="relative inline-block min-w-[104px] z-[3]">
                            Ref# 1203948384
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[4.9px] pb-0 pl-0 pr-[3px]">
                        <div className="flex flex-col items-start justify-start gap-[7px]">
                          <div className="relative inline-block min-w-[88px] z-[3]">
                            June 5, 2020
                          </div>
                          <div className="relative text-xs text-gray-200 inline-block min-w-[75px] whitespace-nowrap z-[3]">
                            05:34:45 AM
                          </div>
                        </div>
                      </div>
                      <div className="w-[143.6px] flex flex-col items-start justify-start pt-[5.7px] pb-0 pl-0 pr-5 box-border">
                        <div className="relative inline-block min-w-[80px] whitespace-nowrap z-[3]">
                          <b>₦</b>
                          <span>10,000.00</span>
                        </div>
                      </div>
                      <div className="w-[201.8px] flex flex-col items-start justify-start pt-[5.6px] pb-0 pl-0 pr-5 box-border text-base font-poppins">
                        <div className="relative tracking-[-0.5px] leading-[14px] z-[3]">
                          Plutous cluchouse field
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-[5.6px] px-0 pb-0">
                        <div className="relative [text-decoration:underline] z-[3]">
                          View Transaction Details
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PitchHistory;
