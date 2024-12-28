import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const OrderCardSkeleton = () => {
    return (
        <div className="flex flex-col space-y-3 shadow p-[16px] rounded-[8px]">
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <Skeleton className="h-2 w-[88px] bg-secondary" />
                    <Skeleton className="h-2 w-[55px] bg-secondary" />
                </div>
                <Skeleton className="h-[42px] w-[42px] bg-secondary rounded-full" />
            </div>

            <div className="flex items-center gap-4 mb-[12px] py-[12px] border-b border-secondary border-opacity-25">
                <Skeleton className="h-[64px] w-[64px] bg-secondary rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-2 w-[88px] bg-secondary" />
                    <Skeleton className="h-2 w-[55px] bg-secondary" />
                </div>
            </div>


            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <Skeleton className="h-2 w-[88px] bg-secondary" />
                    <Skeleton className="h-2 w-[55px] bg-secondary" />
                </div>
                <div className="flex items-center justify-end gap-3">
                    <Skeleton className="h-[32px] w-[32px] bg-secondary" />
                    <Skeleton className="h-[32px] w-[32px] bg-secondary" />
                    <Skeleton className="h-[32px] w-[32px] bg-secondary" />
                </div>
            </div>
        </div>
    )
}

export default OrderCardSkeleton;