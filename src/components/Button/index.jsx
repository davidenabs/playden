import React from "react";
import PropTypes from "prop-types";

const shapes = {
    circle: "rounded-[50%]",
    square: "rounded-[0px]",
    round: "rounded-[16px]",
};

const variants = {
    fill: {
        gray_500: "bg-gray-500",
        gray_100: "bg-gray-100",
        light_mode_white_5_ffffff: "bg-light_mode-white-5_fffff",
        gray_800: "bg-gray-800 text-white",
        deep_purple_400: "bg-deep_purple-400 text-light_mode-white-5_ffffff",
        gray_50: "bg-gray-50 text-deep_purple-400",
        f2: "bg-f2 text-light_mode-white-5_ffffff",
    },
};

const sizes = {
    xl: 'h-[52px] px-2',
    lg: "h-[44px] px-[34px] text-[16px]",
    sm: "h-[34px] px-1.5",
    md: "h-[38px] px-[22px] text-[12px]",
    xs: "h-[30px] px-3.5 text-[12px]",
};

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "xs",
    color = "f2",
    ...restProps
}) => {
    return (
        <button
        className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
        {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["circle", "square", "round"]),
    size: PropTypes.oneOf(["xl", "lg", "sm", "md", "xs"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf([
        "gray_500",
        "gray_100",
        "light_mode_white_5_ffffff",
        "gray_800",
        "deep_purple_400",
        "gray_50",
        "f2",
    ]),
};

export { Button };