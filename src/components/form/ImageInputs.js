import React, { useState } from "react";
import Label from "./Label";
import ImageInput from "./ImageInput";
import Error from "./Error";
import { useFormikContext } from "formik";

const ImageInputs = ({ name, label }) => {
    const { errors, setFieldValue} = useFormikContext();
    const [images, setImages] = useState([]);

    const addImage = () => {

    }

    return (
        <div className="mb-[32px]">
            <Label
                name={label} 
                label={label}
            />

            <div className="flex items-center gap-4 overflow-auto">
                <ImageInput 
                    name={"picture"}
                    setImage={()=> null}
                />

                <ImageInput 
                    name={"picture"}
                    setImage={()=> null}
                />

                <ImageInput 
                    name={"picture"}
                    setImage={()=> null}
                />
            </div>
            <Error 
                error={errors[name]}
            />

        </div>
    )
}

export default ImageInputs;