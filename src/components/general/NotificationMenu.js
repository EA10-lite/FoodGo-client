"use client";
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { PopoverClose } from "@radix-ui/react-popover";

import { GoBell } from "react-icons/go";
import { MdClose } from "react-icons/md";

const NotificationMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-[40px] h-[40px] p-0 rounded-full bg-[none] border border-[#D9D9D9] shadow-[none] hover:bg-[none] active:bg-[none]">
            <GoBell className="text-[24px] text-dark" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[100vw] md:w-[360px] h-[99.5vh] md:h-[600px] mdbelow:top-[-56px] right-[-94px] md:right-[-24px] absolute mdbelow:rounded-[0] mdbelow:border-0 overflow-auto">
        <div className="flex items-center w-full justify-between px-[24px] py-[16px]">
          <h4 className="text-base leading-[24px] font-[700] text-center"> Notification </h4>
          <PopoverClose>
            <MdClose className="text-[24px] text-[#242533] cursor-pointer" />
          </PopoverClose>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            <GoBell className="text-4xl" />
            <h4 className="text-base leading-[24px] font-[700]"> No notifications yet </h4>
            <p className="text-center text-sm text-secondary font-[500]"> You've got a blank slate (for now). We'll let you know when updates arrive!</p>
        </div>
      </PopoverContent>
    </Popover>
  )
}


export default NotificationMenu;