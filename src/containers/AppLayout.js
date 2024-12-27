"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/general";

const AppLayout = ({ children }) => {
    const pathname = usePathname();

    const pagesWithoutNavbar = 
        pathname.includes("/signup") || 
        pathname.includes("/login");

    return (
        <div className="h-full w-full overflow-auto relative">
            { !pagesWithoutNavbar && <Navbar /> }
            <main className="w-full h-full">
                { children }
            </main>
        </div>
    )
}

export default AppLayout;