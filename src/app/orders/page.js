"use client";
import { useState, useEffect } from "react";
import { OrderCard } from "@/components/cards";
import { DatePicker } from "@/components/date";
import { OrderCardSkeleton } from "@/components/skeletons";
import order from "@/data/order";

const Orders = ()=> {
    const [status, setStatus] = useState("all");

     const [loading, setLoading] = useState(true);
    const getRestaurantOrders = async () => {
        try {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        } catch (error) {
            
        } finally {
        }
    }

     useEffect(()=> {
        getRestaurantOrders();
    },[])

    return (
        <div className="orders">
            <div className="container mx-auto">
                <div className="head mb-[60px]">
                    <h2 className="text-xl text-dark font-[600]"> Order History </h2>

                    <div className="flex items-center justify-between mt-[40px]">
                        <ul className="flex items-center gap-4">
                            <li
                                onClick={()=> setStatus("all")} 
                                className={`text-sm font-[600] cursor-pointer ${ status === "all" ? "text-black border-b border-black" : "text-secondary"}`}
                            > All Orders </li>
                            <li
                                onClick={()=> setStatus("ongoing")} 
                                className={`text-sm font-[600] cursor-pointer ${ status === "ongoing" ? "text-black border-b border-black" : "text-secondary"}`}
                            > Ongoing </li>
                            <li
                                onClick={()=> setStatus("completed")} 
                                className={`text-sm font-[600] cursor-pointer ${status === "completed" ? "text-black border-b border-black" : "text-secondary"}`}
                            > Completed </li>
                            <li
                                onClick={()=> setStatus("cancelled")} 
                                className={`text-sm font-[600] cursor-pointer ${status === "cancelled" ? "text-black border-b border-black" : "text-secondary"}`}
                            > Cancelled </li>
                        </ul>

                        <DatePicker />
                    </div>
                </div>

                <div className="body">
                    { loading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-10">
                            {[1,2,3,4,5,6,7,8].map(skeleton => (
                                <OrderCardSkeleton 
                                    key={skeleton}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-10">
                            {order.map((order, index)=> (
                                <OrderCard 
                                    key={index}
                                    order={order}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Orders;