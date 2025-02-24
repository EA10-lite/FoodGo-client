import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import NotificationMenu from "./NotificationMenu";
import MobileMenu from "./MobileMenu";

const Navbar  = () => {
    const pathname = usePathname();
    return (
        <nav className="navbar mb-[40px] border-b border-dark border-opacity-25 px-[16px]">
            <div className="container flex items-center justify-between mx-auto py-[12px]">
                <div className="left">
                    <Logo />
                </div>

                <div className="center grow">
                    <ul className="hidden md:flex items-center justify-center gap-8">
                        <li className={`text-sm font-[500] hover:text-black ${
                            pathname === "/" ? "text-dark border-b border-dark" : "text-secondary"
                        }`}>
                            <Link href="/"> Dashboard </Link>
                        </li>
                        <li className={`text-sm font-[500] hover:text-black ${
                            pathname.includes("/foods") ? "text-dark border-b border-dark" : "text-secondary"
                        }`}>
                            <Link href="/foods"> Foods </Link>
                        </li>
                        <li className={`text-sm font-[500] hover:text-black ${
                            pathname.includes("/order") ? "text-dark border-b border-dark" : "text-secondary"
                        }`}>
                            <Link href="/orders"> Orders </Link>
                        </li>
                    </ul>
                </div>

                <div className="right">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <NotificationMenu />
                        </div>
                        <div className="hidden md:inline-flex relative">
                            <UserMenu initials={"EA"} />
                        </div>
                        <div className="relative md:hidden">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;