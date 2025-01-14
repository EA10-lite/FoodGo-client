import api from "./api";

export const add_new_dish = async (data) => {
    return api.post("/food/", {...data});
}