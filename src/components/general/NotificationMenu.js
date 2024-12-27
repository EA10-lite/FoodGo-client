import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import User from "./User";

import { GoBell } from "react-icons/go";



const NotificationMenu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-[40px] h-[40px] p-0 rounded-full bg-[none] border border-[#D9D9D9] shadow-[none] hover:bg-[none] active:bg-[none]">
            <GoBell className="text-xl text-dark" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[360px] h-[600px] p-0 right-[-24px] absolute">
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