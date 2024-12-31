import { useFormikContext } from "formik";
import React from "react";

const Checkbox = ({ 
    name, 
    value,
    handleChange,
    error,
    visible,
    ...otherProps
}) => {
    const { values } = useFormikContext();
    const isChecked = values["stores"] ? values["stores"].includes(value) : false;


    return (
        <div className="app-input-group relative">
            <div className="checkbox">
                <label 
                    htmlFor={name} 
                    className={`checkbox-label ${isChecked ? 'checked' : ''}`}
                />
                <input 
                    type="checkbox"
                    name={name}
                    id={name}
                    value={value}
                    onChange={handleChange}
                    className="hidden"
                    {...otherProps}
                    checked={isChecked}
                />
            </div>
        </div>
    )
}

export default Checkbox;