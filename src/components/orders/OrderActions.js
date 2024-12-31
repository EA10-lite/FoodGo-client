import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BsThreeDotsVertical } from "react-icons/bs";


const OrderActions = () => {
  return (
    <Popover>
      <PopoverTrigger asChild className="">
        <div className="bg-secondary bg-opacity-25 w-[32px] h-[32px] rounded-[4px] flex items-center justify-center">
            <BsThreeDotsVertical className="text-lg text-black" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[fit-content]">
        <div className="">
            <p className="text-xs text-secondary"> Mark as Accepted </p>
            <p className="text-xs text-secondary"> Mark as Cancelled </p>
            <p className="text-xs text-secondary"> Mark as Completed </p>
            <p className="text-xs text-secondary"> Cancel order </p>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default OrderActions;