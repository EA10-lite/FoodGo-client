import React, { useEffect, useState } from "react";
import Label from "./Label";
import ImageInput from "./ImageInput";
import Error from "./Error";
import { useFormikContext } from "formik";
import {  MdClose } from "react-icons/md";
import { convertBase64 } from "@/utils/converter";

const ImagePreview = ({ file, removeFiles, index,}) => {
    return (
        <>
            <div 
                key={index} 
                className="profile-img-slider relative overflow-hidden" 
            >
                <div className="absolute top-[8px] right-[8px] w-[28px] h-[28px] flex items-center justify-center bg-primary_light rounded-full">
                    <MdClose 
                        className="text-[18px] text-primary cursor-pointer" 
                        onClick={()=> removeFiles(index)} 
                    />
                </div>
                <img src={file?.url || URL.createObjectURL(file)} alt={`File ${index}`} className="min-w-[111px] h-[101px] rounded-[8px] object-cover" />
            </div>
        </>
    )
}

const ImageInputs = ({ name, label, photos=[], loading, handleSubmit }) => {
    const [files, setFiles] = useState(photos);

    const addFiles = (file) => {
        let temp_files = [file, ...files];
        setFiles(temp_files);
    }

    const removeFiles = (index) => {
        let temp_files = [...files]
        temp_files.splice(index, 1);
        setFiles(temp_files);
    }

    const submitFiles = async () => {
        try {
            const upload = [];

            for (let i = 0; i < files.length; i++) {
                if(files[i].url && files[i]._id) {
                    continue;
                }
                const base64 = await convertBase64(files[i]);
                upload.push(base64);
            }
            handleSubmit(upload);
        } catch (error) {
            console.log("error: ",error);
        }
    }

    useEffect(()=> {
        submitFiles();
    }, [files])

    return (
        <div className="mb-[32px]">
            <Label
                name={label} 
                label={label}
            />

            <div className="flex items-center gap-4 overflow-auto flex-wrap">
                <ImageInput 
                    note="Not Allowed: Water mark, logo, Phone number, Anytext" 
                    addFiles={addFiles}
                    files={files}
                    loading={loading} 
                />

                {files?.map((file, index)=> (
                    <ImagePreview 
                        key={index}
                        index={index}
                        removeFiles={removeFiles}
                        file={file}
                    />
                ))}
            </div>
        </div>
    )
}

export default ImageInputs;