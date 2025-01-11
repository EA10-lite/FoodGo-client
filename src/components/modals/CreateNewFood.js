import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Formik } from "formik";
import { MdClose } from "react-icons/md"

import { Field, ImageInputs, MultiSelect, Select, Submit, Texbox } from "../form";

const CreateNewFood = ({ loading, submit }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger className="btn-primary"> Add New Food </AlertDialogTrigger>
            <AlertDialogContent className="p-0">
                <AlertDialogHeader className="h-[580px] overflow-auto px-[24px] py-[24px]">
                <AlertDialogTitle className="relative mb-[24px] text-base font-[700] leading-[22.4px]">
                    Add New Food
                    <AlertDialogCancel className="border-none shadow-none absolute top-[-8px] right-0 h-[36px] hover:bg-[none]">
                        <MdClose className="text-xl" />
                    </AlertDialogCancel>
                </AlertDialogTitle>
                <AlertDialogDescription className="px-24px">
                    <Formik
                        initialValues={{ name: "", desc: "", pictures: "" }}
                    >
                        {()=> (
                            <>
                                <Field 
                                    name="name"
                                    label="Name of food"
                                    placeholder="example: chicken, shawarma, etc."
                                />

                                <div className="flex items-start gap-4">
                                    <div className="w-[50%]">
                                        <Field 
                                            name="price"
                                            type="number"
                                            label="Price"
                                            min={1}
                                        />
                                    </div>
                                    <div className="w-[50%]">
                                        <Select 
                                            name="category"
                                            label="Category"
                                            options={[
                                                { title: "Burger", value: "burger" },
                                                { title: "Chicken", value: "chicken" },
                                                { title: "Pizza", value: "pizza" },
                                                { title: "Shawarma", value: "shawarma" },
                                                { title: "Sushi", value: "sushi" },
                                                { title: "Rice", value: "rice" },
                                            ]}
                                        />
                                    </div>

                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-[50%]">
                                        <Field 
                                            name="preparation_time"
                                            type="text"
                                            label="Preparation time"
                                            min={1}
                                        />
                                    </div>
                                    <div className="w-[50%]">
                                    </div>

                                </div>

                                <ImageInputs 
                                    name="pictures"
                                    label="Food Images"
                                />

                                <Texbox 
                                    label="Description (optional)"
                                    name="desc"
                                    placeholder="Tell customers about how the food was made"
                                />

                                <Submit title="Submit" />
                            </>
                        )}
                    </Formik>
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default CreateNewFood;
  