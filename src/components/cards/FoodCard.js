import React from "react";
import { EditFood } from "../modals";
import { FoodImageSlider } from "../carousels";

const FoodCard = ({ food, handleClick }) => {
    return (
        <div className="food-card bg-white p-[10px] shadow-md rounded-[15px] border border-primary_light">
            <div className="flex flex-col gap-4">
                <div className="card-img w-full h-[175px] bg-secondary bg-opacity-65 rounded-[15px] overflow-hidden">
                    <FoodImageSlider 
                        images={food.pictures}
                    />
                </div>
                <div className="card-details px-[12px] flex justify-between">
                    <h4 className="text-sm font-[500] text-dark"> { food.name } </h4>
                    <h4 className="text-sm font-[500] text-dark"> ${ food.price } </h4>
                </div>
                <div className="card-btn px-[12px] hidden">
                    <EditFood 
                        food={food}
                        handleClick={handleClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default FoodCard;