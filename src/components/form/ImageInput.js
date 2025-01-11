import React, { useRef } from "react";
import { convertBase64 } from "@/utils/converter";
import { SlCloudUpload } from "react-icons/sl";

const ImageInput = ({ name, setImage }) => {
    const inputRef = useRef(null);

    const handleChange = async (e) => {
        try {
            const file = e.target.files[0];
    
            const img = await convertBase64(file);
            setImage(img)
        } catch (error) {
            console.log("error uploading image", error);
        }
    }
    

    return (
        <div 
            className="image-input border border-[#9C9BA6] border-opacity-50 w-[111px] h-[101px] rounded-[8px] flex items-center justify-center"
            style={{borderStyle: "dashed"}}
        >
            <div className="flex flex-col items-center gap-1">
                <div 
                    className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-primary_light"
                    onClick={()=> inputRef.current.click()}
                >
                    <SlCloudUpload className="text-[22px] text-primary" />    
                </div>
                <p className="text-[13px] leading-[16px] font-[500] text-[#808192]"> Add </p>
            </div>
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