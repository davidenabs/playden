import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const PitchHistory = () => {
  const { pitchId } = useParams(); // Get the pitchId from the URL
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem("token"); // Retrieve the token

      if (!token) {
        setError("No token found. Please log in.");
        setLoading(false);
        return;
      }

      console.log("Pitch ID:", pitchId);
      // console.log("Fetching from URL:", `${process.env.REACT_APP_API_URL}api/v1/pitch-owner/pitches/${pitchId}`);


      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/v1/pitch-owner/pitches/${pitchId}`,
          {
            method: "GET",
            headers: {
              'Accept': "application/json",
              "Content-Type": "application/json",
              'Authorization': `Token ${token}`,
              "ngrok-skip-browser-warning": "true",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        if (data && data.data) {
          setTransactions(data.data.transactions || []); 
        } else {
          toast.info("No transactions found.");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setError(error.message);
        setLoading(false);
        toast.error("Failed to load transactions. Please try again later.");
      }
    };

    if (pitchId) {
      fetchTransactions(); // Fetch transactions only if pitchId exists
    }
  }, [pitchId]);

  if (loading) {
    return <div className="text-center fontSize-4xl">Loading pitch booking history...</div>;
  }

  if (error) {
    return <div className="text-center fontSize-xl">Error: {error}</div>;
  }

  return (
    <div className="w-full relative bg-light-mode-gray-10-f5f5f5 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[38.1px] box-border leading-[normal] tracking-[normal]">
      <FrameComponent aare="/aare@2x.png" />
      <main className="self-stretch flex flex-col items-end justify-start gap-[24.1px] max-w-full">
        <Menu />
        <section className="self-stretch flex flex-row items-start justify-center bg-gray-300 py-0 pl-[21px] mq450:pl-[0px] pr-5 box-border max-w-full text-center text-base text-text font-poppins">
          <div className="w-[1145px] rounded-lg bg-white-a700_bf flex flex-col items-start justify-start py-5 px-[34px] mt-[20px] mq450:px-[27px] box-border gap-[35px] max-w-full mq725:gap-[17px]">
            <header className="self-stretch">
              <h3>{`Pitch Name: ${name}`}</h3>
              <p>{`Size: ${size}`}</p>
              <p>{`Amount per hour: ${amount_per_hour}`}</p>
            </header>
            <footer className="self-stretch shadow-[0px_1.8px_3.69px_rgba(243,_246,_249,_0.8)] rounded-2xl bg-light-mode-white-5-ffffff flex flex-col items-start justify-start pt-3.5 px-0 pb-[17.5px] box-border gap-[7.7px] max-w-full z-[2] text-left text-xl text-darkslategray-500 font-work-sans">
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

              {transactions.length > 0 ? (
        transactions.map((transaction, index) => (
                  <div
                    key={index}
                    className="self-stretch flex flex-row items-start justify-start py-0 pl-[57px] pr-[55px] box-border max-w-full text-sm text-f2 font-inter mq1050:pl-7 mq1050:pr-[27px] mq1050:box-border"
                  >
                    <div className="flex-1 flex flex-col items-end justify-start gap-[21.6px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-between gap-5 mq1000:flex-wrap">
                        <div className="flex flex-col items-start justify-start gap-[6.6px]">
                          <div className="relative inline-block min-w-[92px] z-[3]">
                            {transaction.name || "N/A"}
                          </div>
                          <div className="relative text-xs text-gray-200 inline-block min-w-[104px] z-[3]">
                            {transaction.ref || "N/A"}
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[1.4px] pb-0 pl-0 pr-1">
                          <div className="flex flex-col items-start justify-start gap-[7px]">
                            <div className="relative inline-block min-w-[88px] z-[3]">
                              {transaction.date || "N/A"}
                            </div>
                            <div className="relative text-xs text-gray-200 inline-block min-w-[75px] whitespace-nowrap z-[3]">
                              {transaction.time || "N/A"}
                            </div>
                          </div>
                        </div>
                        <div className="w-36 flex flex-col items-start justify-start pt-[1.7px] pb-0 pl-0 pr-5 box-border">
                          <div className="relative inline-block min-w-[80px] whitespace-nowrap z-[3]">
                            <b>₦</b>
                            <span>{transaction.amount || "N/A"}</span>
                          </div>
                        </div>
                        <div className="w-[202.2px] flex flex-col items-start justify-start pt-[1.6px] pb-0 pl-0 pr-5 box-border text-base font-poppins">
                          <div className="relative tracking-[-0.5px] leading-[14px] z-[3]">
                            {transaction.pitchName || "N/A"}
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[1.6px] px-0 pb-0">
                          <div className="relative [text-decoration:underline] z-[3]">
                            View Transaction Details
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>No transactions available yet!</div>
              )}
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PitchHistory;
