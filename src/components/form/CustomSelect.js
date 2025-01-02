import { useState } from "react"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { IoIosArrowDown } from "react-icons/io";


const CustomSelect = ({ label, options }) => {
    const [] = useState("")
    return (
        <Popover>
            <p> { label } </p>
            <PopoverTrigger asChild>
                <div className="w-[210px] flex items-center justify-between gap-8 bg-[#F3F3F8] rounded-[8px] py-[10px] px-[12px] cursor-pointer">
                    <p className="text-sm font-[400]"> { label } </p>
                    <IoIosArrowDown />
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-[210px] p-0">
                <ul className="w-full">
                    {options?.map((option, index)=> (
                        <li 
                            key={index} 
                            className="hover:bg-primary_light hover:text-primary cursor-pointer px-[16px] py-[8px] text-sm"
                        > { option } </li>
                    ))}
                </ul>
            </PopoverContent>
        </Popover>
    )
}

export default CustomSelect;