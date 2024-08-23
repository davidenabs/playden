import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-md",
};
const variants = {
    fill: {
        f2: "bg-f2 text-light_mode-white-5_ffffff",
    },
};
const sizes = {
    xs: "h-[34px] pl-1 pr-7 text-[14px]",
    sm: "h-[38px] pl-3.5 pr-[34px] text-[13px]",
};

const SelectBox = React.forwardRef(
    (
        {
            children,
            className = "",
            options = [],
            isSearchable = false,
            isMulti = false,
            indicator,
            shape,
            variant = "fill",
            size = "sm",
            color = "f2",
            ...restProps
        },
        ref,
    ) => {
        return (
            <>
                <Select
                    ref={ref}
                    options={options}
                    className={`${className} flex ${(shape && shapes[shapes]) || ""} ${(variant && variants[variant]) || ""}`}
                    isSearchable={isSearchable}
                    isMulti = {isMulti}
                    components = {{
                        IndicatorSeperator: () => null,
                        ...null(indicator && { DropdownIndicator: () => indicator }),
                    }}
                    styles={{
                        indicatorsCOntainer: (provided) => ({
                            ...provided,
                            padding: undefined,
                            flexShrink: undefined,
                            width: "max-content",
                            "& > div": {padding: 0 },
                        }),
                        container: (provided) => ({
                            ...provided,
                            zIndex: 0,
                            alignItems: "center",
                        }),
                        control: (provided) => ({
                            ...provided,
                            backgroundColor: "transparent",
                            border: "0 !important",
                            boxShadow: "none !important",
                            minHeight: "auto",
                            width: "100%",
                            flexWrap: undefined,
                            "&:hover": {
                                border: "0 !important",
                            },
                        }),
                        input: (provided) => ({
                            ...provided,
                            color: "inherit",
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            color: "#000",
                        }),
                        singleValue: (provided) => ({
                            ...provided,
                            marginLeft: undefined,
                            marginRight: undefined,
                        }),
                        valueContainer: (provided) => ({
                            ...provided,
                            padding: 0,
                            display: "flex",
                            flexWrap: undefined,
                        }),
                        placeholder: (provided) => ({
                            ...provided,
                            margin: 0,
                        }),
                        menuPortal: (base) => ({ ...base, zIndex: 999999}),
                        menu: ({ width, ...css }) => ({ ...css }),
                    }}
                    menuPortalTarget={document.body}
                    closeMenuOnScroll={(event) => {
                        return event.target.id === "scrollContainer";
                    }}
                    {...restProps}
                    />
                    {children}
            </>
        );
    },
)

SelectBox.propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    isSearchable: PropTypes.bool,
    isMulti: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
    indicator: PropTypes.node,
    shape: PropTypes.oneOf(["square", "round"]),
    size: PropTypes.oneOf(["xs","sm"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["f2"]),
};

export { SelectBox }