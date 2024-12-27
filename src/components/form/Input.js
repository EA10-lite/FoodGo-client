import React, { useRef } from "react";

const Input = ({ 
    name, 
    type, 
    placeholder, 
    value,
    handleChange,
    error,
    visible,
    ...otherProps
}) => {
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
        <div className="app-input-group relative">
            <div className="input">
                <input 
                    type={type}
                    placeholder={placeholder} 
                    name={name}
                    id={name}
                    value={value}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`bg-[#F3F3F8] w-full rounded-[12px] text-secondary text-sm leading-base font-[500] px-[18px] py-[12px] ${
                        error && visible && "border border-error text-error bg-error bg-opacity-10 text-black error-input"
                    }`}
                    ref={inputRef}
                    {...otherProps}
                />
            </div>
        </div>
    )
}

export default Input