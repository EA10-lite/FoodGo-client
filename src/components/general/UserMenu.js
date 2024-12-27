import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import User from "./User";



const UserMenu = ({ initials, img }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-[40px] h-[40px] p-0 rounded-full bg-[none] shadow-[none] hover:bg-[none] active:bg-[none]">
            <User 
                initials={initials} 
                img={img} 
            />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[242px] p-0 right-[-24px] absolute">
        <div className="">
            <ul>
                <li className="text-[#1E1E1E] text-sm leading-[24px] py-[12px] px-[24px]"> <Link href="/profile"> Profile </Link></li>
                <li className="text-[#1E1E1E] text-sm leading-[24px] py-[12px] px-[24px]"> <Link href="/settings"> Account settings </Link></li>
                <li className="text-[#1E1E1E] text-sm leading-[24px] py-[12px] px-[24px]"> <Link href="/settings"> Visit the help center </Link></li>
                <li className="text-[#1E1E1E] text-sm leading-[24px] py-[12px] px-[24px] border-t border-[#D9D9D9]"> <Link href="/settings"> $ USD </Link></li>
                <li className="text-[#1E1E1E] text-sm leading-[24px] py-[12px] px-[24px] border-b border-[#D9D9D9]"> <Link href="/settings"> Language </Link></li>
                <li className="text-[#1E1E1E] text-sm leading-[24px] py-[12px] px-[24px]"> <Link href="/settings"> Refer a friend </Link></li>
                <li className="text-[#1E1E1E] text-sm leading-[24px] py-[12px] px-[24px]"> Logout </li>
            </ul>
        </div>
      </PopoverContent>
    </Popover>
  )
}


export default UserMenu;