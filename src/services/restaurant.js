import api from "./api";

export const get_restaurant_foods = async () => {
    return api.get("/restaurant/foods");
}