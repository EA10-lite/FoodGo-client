import React from "react";
import { useFormikContext } from "formik";

import { convertBase64 } from "@/utils/converter";

const ImageInput = ({ name, setImage, inputRef, title  }) => {
    const { setFieldValue } = useFormikContext();

    const handleChange = async (e) => {
        try {
            const file = e.target.files[0];
            setFieldValue(name, file.name);
    
            const img = await convertBase64(file);
            setImage(img)
        } catch (error) {
            console.log("error uploading image", error);
        }
    }
    

    return (
        <div className="">
            <button 
                className="btn-secondary bg-white rounded-[8px!important]"
                onClick={()=> inputRef.current.click()}
            > 
                { title }
            </button>

            <input
                type="file" 
                accept=".jpg,.png,.webp,.jpeg"
                className="w-0 h-0" 
                ref={inputRef} 
                onChange={handleChange}
            />
        </div>
    )
}

export default ImageInput;