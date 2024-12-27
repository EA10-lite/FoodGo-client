import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const FoodCardSkeleton = () => {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[155px] w-full rounded-xl bg-secondary" />
            <div className="space-y-2 px-[12px]">
                <Skeleton className="h-4 w-[80%] bg-secondary" />
                <Skeleton className="h-4 w-[60%] bg-secondary" />
            </div>
            <div className="flex px-[12px]">
                <Skeleton className="h-9 w-[108px] bg-secondary mt-[8px] rounded-[8px]" />
            </div>
        </div>
    )
}

export default FoodCardSkeleton;