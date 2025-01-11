import React, { useState, useRef } from "react";
import { useFormikContext } from "formik";

import Label from "./Label";

const MultiSelect = ({
    name,
    label,
    options,
}) => {
    const inputRef = useRef(null);
    const { errors, touched, setFieldValue } = useFormikContext();
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleFocus = () => {
        if (!inputRef.current.classList.contains('active')) {
            inputRef.current.classList.add('active');
        }
    };

    const handleBlur = () => {
        inputRef.current.classList.remove("active");
    };

    const handleOptionToggle = (value) => {
        const newSelectedOptions = selectedOptions.includes(value)
            ? selectedOptions.filter(option => option !== value)
            : [...selectedOptions, value];

        setSelectedOptions(newSelectedOptions);
        setFieldValue(name, newSelectedOptions);
    };

    return (
        <div className="form-group mb-5">
            {label && (
                <Label
                    name={label}
                    error={errors[name]}
                    label={label}
                    visible={touched[name]}
                />
            )}

            <div 
                className={`
                    bg-[#F3F3F8] w-full rounded-[12px] text-secondary text-sm leading-base font-[500] px-[18px] py-[12px] cursor-pointer
                    ${errors[name] && touched[name] && "border border-error text-error bg-error bg-opacity-10 text-black error-input"}
                `}
                ref={inputRef}
                tabIndex={0} // Allows the div to be focusable
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                {selectedOptions.length > 0
                    ? selectedOptions.map(option => (
                        <span key={option} className="mr-2 inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            {options.find(opt => opt.value === option)?.title}
                        </span>
                      ))
                    : "Choose..."}
            </div>

            <ul className="mt-2 bg-white border border-gray-300 rounded-md shadow-md max-h-[200px] overflow-auto">
                {options.map((option, index) => (
                    <li
                        key={index}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${selectedOptions.includes(option.value) ? "bg-blue-100" : ""}`}
                        onClick={() => handleOptionToggle(option.value)}
                    >
                        <input
                            type="checkbox"
                            checked={selectedOptions.includes(option.value)}
                            onChange={() => handleOptionToggle(option.value)}
                            className="mr-2"
                        />
                        {option.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MultiSelect;
