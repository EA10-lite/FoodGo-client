import React from "react";

const Label = ({ error, label, name, visible }) => {
    return (
        <label className={`text-[13px] leading-[16px] font-[500] text-[#808192] mb-[4px] block text-left ${
            error && visible && "text-error"
        }`} id={name}> { label } </label>
    )
}

export default Label;