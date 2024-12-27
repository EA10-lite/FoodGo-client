import React from "react";
import { useFormikContext } from "formik";

const Submit = ({
    title,
    styles = "",
    loading,
}) => {
    const { handleSubmit } = useFormikContext();

    return (
        <button type="button" className={`bg-primary text-white w-full px-[16px] py-[12px] rounded-[8px] ${ styles }`} onClick={handleSubmit}>
            { title }
        </button>
    )
}

export default Submit;