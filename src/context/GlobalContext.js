"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const GlobalContext = createContext();
export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

const GlobalProvider = ({ children }) => {
    const pathname = usePathname();
    const [user, setUser] = useState(false);

    const login = async (data) => {
        try {
            let temp_data = {
                ...data,
                access_token: "",
            }
            localStorage.setItem("foodgo-user", JSON.stringify(temp_data));
            localStorage.setItem("foodgo-token", JSON.stringify(data?.access_token));
            setUser(temp_data);
            window.location.href = "/";
        } catch (error) {
            console.error('Error storing data', error);
        }
    }

    const logout = async () => {
        localStorage.removeItem("foodgo-user");
        localStorage.removeItem("foogo-token");

        setUser();
        window.location.href = "/login";
    }

    const getStoredData = async () => {
        const response = localStorage.getItem("foodgo-user");
        if(response) {
            setUser(JSON.parse(response));
        }
        else {
            if(!pathname.includes("/login") && !pathname.includes("/signup") && !pathname.includes("/forgot-password") && !pathname.includes("/reset-password")) {
                window.location.href = "/login";
            }
            console.log("no user found");
        }
    }

    useEffect(()=> {
        getStoredData();
    }, [pathname])
 
    return (
        <GlobalContext.Provider 
            value={{
                user,
                login,
                logout,
            }}
        >
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;