import React from "react";

const sizes = {
    mobile_heading_5_bold: "text-[16px] font-bold",
    mobile_xxsmall_bold_capitalized: "uppercase text-[12px] font-bold",
    mobile_heading_1_bold: "tracking-[-0.64px] text-[32px] font-bold md:text-[30px] sm:text-[28px]",
    mobile_base_bold: "text-[14px] font-bold",
    textxs: "text-[12px] font-medium",
    textxl: "text-[32px] font-medium md:text-[30px] sm:text-[28px]",
    text2xl: "text-[33px] font-medium md:text-[31px] sm:text-[29px]",
    headingxs: "text-[12px] font-bold",
    headings: "text-[13px] font-bold",
    headingmd: "text-[14px] font-bold",
    headinglg: "text-[16px] font-semibold",
    headingxl: "text-[17px] font-semibold",
    heading2xl: "text-[33px] font-semibold md:text-[31px] sm:text-[29px]",
};

const Heading = ({ children, className = "", size = "textxs", as, ...restProps}) => {
    const Component = as || "h6";

    return (
        <Component className={`text-black-900 font-dmsans ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Heading };