import React from "react";

const sizes = {
    texts: "text-[13px] font-normal not-italic",
    textmd: "text-[16px] font-normal not-italic",
    textlg: "text-[23px] font-normal not-italic md:text-[21px]",
};

const Text = ({ children, className = "", as, size = "textmd", ...restProps}) => {
    const Component = as || "p";

    return (
        <Component className={`text-blue_gray-300 font-inter ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Text };