import * as Yup from "yup";

export const add_food = Yup.object().shape({
    name: Yup.string().min(2).required(),
    about: Yup.string(),
    price: Yup.number().min(1).required(),
    category: Yup.array().min(1).required(),
    preparation_time: Yup.number().min(1).required(),
})