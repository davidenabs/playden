import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded",
};

const variants = {
    fill: {
        light_mode_white_5_ffffff: "bg-light_mode-white-5_ffffff",
        f2: "bg-f2",
    },
};

const sizes = {
    md: "h-[44px] px-5",
    sm: "h-[42px] pl-[18px] pr-[34px] text-[13px]",
    xs: "h-[32px] px-5",
};

const Input = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            children,
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "xs",
            color = "light_mode_white_5_ffffff",
            ...restProps
        },
        ref,
    ) => {
        return (
            <label
            className={`${className} flex items-center justify-center cursor-text border border-solid ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color] || variant}`}
            >
                {!!label && label}
                {!!prefix && prefix}
                <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
                {!!suffix && suffix}
            </label>
        );
    },
);
Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["md", "sm", "xs"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["light_mode_white_5_ffffff", "f2"]),
};

export { Input };