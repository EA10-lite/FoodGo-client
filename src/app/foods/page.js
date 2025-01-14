"use client";
import React, { useEffect, useState } from "react";
import { CreateNewFood } from "@/components/modals";
import { FoodCard } from "@/components/cards";
import { FoodCardSkeleton } from "@/components/skeletons";
import food from "@/data/food";

const Page = () => {
    const [loading, setLoading] = useState(true);
    const getRestaurantFoods = async () => {
        try {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        } catch (error) {
            
        } finally {
        }
    }


    const [submitting, setSubmitting] = useState(false);
    const addNewFood =  async (values) => {
        try {
            setSubmitting(true);
            console.log("values: ", values);
        } catch (error) {
            
        } finally {
            setSubmitting(false);
        }
    }

    useEffect(()=> {
        getRestaurantFoods();
    },[])

    return (
        <div className="container mx-auto">
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
                        {food.map((food, index)=> (
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