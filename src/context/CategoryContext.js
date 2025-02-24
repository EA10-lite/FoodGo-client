"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllCategories } from "@/services/general";

const CategoryContext = createContext();
export const useCategoryContext = () => {
    return useContext(CategoryContext);
};

const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(true);
    const getCategories = async () => {
        try {
            const response = await getAllCategories();
            console.log("response: ", response);
            setCategories(response?.data?.result);
        } catch (error) {
            console.log("error: ", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=> {
        getCategories();
    }, [])
 
    return (
        <CategoryContext.Provider 
            value={{
                categories,
                setCategories,
            }}
        >
            { children }
        </CategoryContext.Provider>
    )
}

export default CategoryProvider;