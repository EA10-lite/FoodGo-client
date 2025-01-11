import React, { useRef } from "react";
import Label from "./Label";
import { useFormikContext } from "formik";

const Textbox = ({ 
    label,
    name, 
    type, 
    placeholder, 
    value,
    error,
    visible,
    ...otherProps
}) => {
    const { errors, handleChange, touched, values } = useFormikContext();
    const inputRef = useRef(null);

    const handleFocus = () => {
        if (inputRef.current.classList.contains('active-input')) {
            return
        } else {
            inputRef.current.classList.add('active-input');
        }
    }

    const handleBlur = () => {
        inputRef.current.classList.remove("active-input");
    }

    return (
        <div className="app-input-group relative mb-5">
            { label && (
                <Label
                    name={label} 
                    label={label}
                />
            )}

            <div className="textarea">
                <textarea 
                    type={type}
                    placeholder={placeholder} 
                    name={name}
                    id={name}
                    value={value}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`bg-[#F3F3F8] w-full rounded-[12px] text-dark text-sm leading-base font-[500] px-[18px] py-[12px] h-[137px] resize-none ${
                        error && visible && "border border-error text-error bg-error bg-opacity-10 text-black error-input"
                    }`}
                    ref={inputRef}
                    {...otherProps}
                />
            </div>
        </div>
    )
}

export default Textbox