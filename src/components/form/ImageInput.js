"use client";
import React, { useRef } from "react";
import { SlCloudUpload } from "react-icons/sl";


const ImageInput = ({ name, addFiles, files, loading}) => {

    const inputRef = useRef();
    const handleClick = () => inputRef.current.click();

    const handleChange = (e) => {
        const file = e.target.files[0]
        addFiles(file);
    }

    return (
        <div 
            className="image-input border border-[#9C9BA6] border-opacity-50 w-[111px] h-[101px] rounded-[8px] flex items-center justify-center"
            style={{borderStyle: "dashed"}}
        >
            <div className="flex flex-col items-center gap-1">
                <div 
                    className="flex items-center justify-center w-[42px] h-[42px] rounded-full bg-primary_light"
                    onClick={handleClick}
                >
                    <SlCloudUpload className="text-[22px] text-primary" />    
                </div>
                <p className="text-[13px] leading-[16px] font-[500] text-[#808192]"> Add </p>
            </div>
            <div className="image-btn">
                <input 
                    type="file" 
                    name={name} 
                    id={name} 
                    className="w-[0] h-[0]" ref={inputRef} 
                    accept=".jpg, .jpeg, .png, .avif"
                    onChange={handleChange}
                    disabled={loading}
                />
            </div>
        </div>
    )
}

export default ImageInput;