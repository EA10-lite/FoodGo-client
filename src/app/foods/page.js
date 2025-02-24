"use client";
import React, { useContext, useEffect, useState } from "react";
import { CreateNewFood } from "@/components/modals";
import { FoodCard } from "@/components/cards";
import { FoodCardSkeleton } from "@/components/skeletons";
import { add_new_dish } from "@/services/food";
import { useToast } from "@/hooks/use-toast";
import { get_restaurant_foods } from "@/services/restaurant";

const Page = () => {
    const { toast } = useToast();

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const getRestaurantFoods = async () => {
        try {
            setLoading(true);
            const response = await get_restaurant_foods();
            if(response?.data?.success) {
                setData(response?.data?.result);
                console.log("data: ", data);
            }
        } catch (error) {
            
        } finally {
            setLoading(false);
        }
    }


    const [submitting, setSubmitting] = useState(false);
    const addNewFood =  async (values) => {
        try {
            setSubmitting(true);
            const response = await add_new_dish(values);
            if(response?.data?.success) {
                toast({ 
                    title: "Login success", 
                    description: "Redirecting you to dashboard!",
                    top: "0", 
                });

                window.location.reload();
            }
        } catch (error) {
            toast({ 
                title: "Failed", 
                description: error?.response?.data?.message ||  "Failed to add new dish",
                top: "0", 
            })
        } finally {
            setSubmitting(false);
        }
    }

    useEffect(()=> {
        getRestaurantFoods();
    },[])

    return (
        <div className="container mx-auto px-[16px]">
            <div className="header mb-[40px]">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl text-dark font-[600]"> Food lists </h2>
                    <CreateNewFood 
                        loading={submitting} 
                        submit={addNewFood} 
                    />
                </div>
            </div>

            <div className="body">
                { loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {[1,2,3,4,5,6,7,8].map(skeleton => (
                            <FoodCardSkeleton 
                                key={skeleton}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {data?.map((food, index)=> (
                            <FoodCard 
                                food={food}
                                key={index}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Page;