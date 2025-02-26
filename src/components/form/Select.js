import React, { useRef } from "react";
import { useFormikContext } from "formik";

import Label from "./Label";

const Select = ({
    name,
    label,
    options,
}) => {
    const inputRef = useRef(null);
    const { errors, touched, setFieldValue } = useFormikContext();

    const handleFocus = () => {
        if (inputRef.current.classList.contains('active')) {
            return
        } else {
            inputRef.current.classList.add('active');
        }
    }

    const handleBlur = () => {
        inputRef.current.classList.remove("active");
    }


    const handleChange = (e) => {
        setFieldValue(name, [e.target.value]);
    }


    return (
        <div className="form-group mb-5">
            { label && (
                <Label
                    name={label} 
                    error={errors[name]} 
                    label={label}
                    visible={touched[name]}
                />
            )}

            <select 
                name={name} 
                id={name}
                className={`
                    bg-[#F3F3F8] w-full rounded-[12px] text-black text-sm leading-base font-[500] px-[18px] py-[12px]
                    ${ errors[name] && touched[name] && "border border-error text-error bg-error bg-opacity-10 text-black error-input" }
                `} 
                ref={inputRef} onFocus={handleFocus} onBlur={handleBlur}
                onChange={(e)=> handleChange(e)}
            >
                <option value={""}> Choose </option>
                {options.map((option, index) => (
                    <option value={option?.value} key={index}> { option?.title } </option>
                ))}
            </select>
        </div>
    )
}


export default Select;