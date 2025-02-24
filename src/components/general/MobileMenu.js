import React from "react";

import { MdMenu } from "react-icons/md";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "@/context/GlobalContext";

const  MobileMenu = () => {
    const { logout } = useGlobalContext();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="bg-[#EAE7F9] cursor-pointer w-[40px] h-[40px] rounded-full flex items-center justify-center">
                    <MdMenu className="text-[24px]" />
                </div>
            </SheetTrigger>
            <SheetContent className="">
                <SheetHeader className="h-full">
                    <ul className="w-full mt-[40px]">
                        <MenuLink url="/" title="Dashboard" />
                        <MenuLink url="/foods/" title="Foods" />
                        <MenuLink url="/orders/" title="Orders" />
                        <MenuLink url="/settings/" title="Settings" />
                    </ul>
                </SheetHeader>

                <SheetFooter className="py-4 absolute bottom-0 left-0 w-full px-[12px]">
                    <button 
                        className="btn-primary text-sm font-[600] rounded-[133.333px] px-[12px] py-[8px]"
                        onClick={logout}
                    > 
                        Logout 
                    </button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

const MenuLink = ({ title, url }) => {
    const pathname = usePathname();


    return (
        <li className={`w-full mb-[16px] text-base font-[600] text-left ${
            pathname === url ?  "text-black" : "text-secondary"
        }`}>
            <Link href={url}> { title } </Link>
        </li>
    )
}



export default MobileMenu;