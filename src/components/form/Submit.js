import React from "react";
import { useFormikContext } from "formik";
import { LucideLoader2 } from "lucide-react";

const Submit = ({
    title,
    styles = "",
    loading,
}) => {
    const { handleSubmit } = useFormikContext();

    return (
        <button type="button" className={`bg-primary text-white w-full px-[16px] py-[12px] rounded-[133.33px] flex items-center justify-center text-white ${ styles }`} onClick={handleSubmit}>
            { !loading ? (
                <span> { title } </span>
            ): (
                <LucideLoader2 className="animate-spin delay-150ms text-[22px]"/>
            )}
        </button>
    )
}

export default Submit;