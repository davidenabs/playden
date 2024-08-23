import { Heading, Img } from "./..";
import React from "react";

export default function UserProfile({
  userAge = "24",
  userBookingRequests = "Bookin Request",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex items-start w-[30%] md:w-full md:p-5 rounded-[12px]`}
    >
      <div className="mb-[34px] flex w-full flex-col items-start">
        <div className="flex items-center justify-between gap-5 self-stretch">
          <div className="mb-4 ml-[22px] flex flex-col self-end rounded-[26px] bg-gray-800_2b">
            <Img
              src=""
              alt="circleImage"
              className="h-[25px] w-[52px] rounded-[50%]"
            />
          </div>
          <div className="purple_200_deep_purple_400_60_border h-[98px] w-[24%] rounded-[50%] border-[40px] border-solid" />
        </div>
        <Heading
          size="headingxl"
          as="h6"
          className="relative ml-7 mt-[-2px] !font-poppins !text-light_mode-white-5_ffffff"
        >
          {userAge}
        </Heading>
        <Heading
          as="p"
          className="ml-7 !font-poppins !text-light_mode-white-5_fffff"
        >
          {userBookingRequests}
        </Heading>
      </div>
    </div>
  );
}
