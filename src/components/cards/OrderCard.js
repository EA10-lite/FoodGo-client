import React from "react";
import { MdCheck, MdClose } from "react-icons/md";
import { User } from "../general";
import { OrderDetails, OrderDetailsV2 } from "../modals";

const OrderCard = ({ order }) => {
    return (
        <div className="order-card border border-secondary border-opacity-25 shadow p-[16px] rounded-[8px]">
            <div className="card-header">
                <div className="flex items-center justify-between">
                    <div className="">
                        <h4 className="text-sm font-[500]"> Order #{ order._id } </h4>
                        <p className="text-xs font-[500] text-secondary"> 22nd Feburary 2024</p>
                    </div>
                    <User initials={order.user.name.split(" ")[0][0] + order.user.name.split(" ")[1][0]} />
                </div>
            </div>
            <div className="card-body mb-[12px] py-[12px] border-b border-secondary border-opacity-25">
                <div className="flex items-center gap-4">
                    <div className="w-[64px] h-[64px] rounded-full overflow-hidden">
                        <img src={order.food.picture} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <div className="grow">
                        <h4 className="text-sm font-[500]"> { order.food.name } </h4>
                        <div className="flex items-center justify-between">
                            <h4 className="text-sm font-[500]"> ${ order.food.price } </h4>
                            <h4 className="text-sm font-[500]"> Qty: { order.quantity } </h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="flex items-center justify-between">
                    <div className="">
                        <p className="text-xs font-[500] text-secondary"> x{ order.quantity } Items </p>
                        <h4 className="text-sm font-[600]"> ${ order.amountPaid } </h4>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="border border-error text-error flex items-center justify-center w-[32px] h-[32px] rounded-[4px] hover:bg-error hover:text-white cursor-pointer">
                            <MdClose className="text-[18px]" />
                        </button>

                        <button className="border border-success text-success flex items-center justify-center w-[32px] h-[32px] rounded-[4px] hover:bg-success hover:text-white cursor-pointer">
                            <MdCheck className="text-[18px]" />
                        </button>
                        <button className="border border-primary text-primary flex items-center justify-center w-[32px] h-[32px] rounded-[4px] hover:bg-primary hover:text-white cursor-pointer">
                            <OrderDetailsV2 
                                order={order}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCard;