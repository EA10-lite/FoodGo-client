import React, { useState, useRef } from "react";
import { useFormikContext } from "formik";
import { IoIosArrowDown } from "react-icons/io";

import Label from "./Label";
import { MultiSelectDropdown } from "../popovers";

const MultiSelect = ({
    name,
    label,
    options,
    placeholder,
}) => {
    const inputRef = useRef(null);
    const { errors, touched, setFieldValue } = useFormikContext();
    const [selectedOptions, setSelectedOptions] = useState([]);

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

            <div className="relative">
                <MultiSelectDropdown 
                    placeholder={placeholder}
                    options={options}
                />
            </div>

        </div>
    );
};

export default MultiSelect;
