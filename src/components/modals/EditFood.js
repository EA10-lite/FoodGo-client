import { useState } from "react";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { add_food } from "@/schema/food";
import { Field, ImageInputs, Select, Submit, Textbox } from "../form";
import { Formik } from "formik";
import { MdClose } from "react-icons/md";
import { useToast } from "@/hooks/use-toast";

const EditFood = ({ loading, submit, food }) => {
    const { toast } = useToast();
    const [files, setFiles] = useState([]);
    
    const handleSubmit = (values) => {
        if(files.length < 1) {
            toast({ 
                title: "No Picture Added", 
                description: "You need to add at least one picture to continue!",
                top: "0", 
                variant: "destructive" 
            })
        }
        else if (files.length > 5) {
            toast({ 
                title: "Too many pictures", 
                description: "Maximum of 5 pictures",
                top: "0", 
                variant: "destructive" 
            })
        }

        else {
            submit({...values, pictures: files})
        }
    }


    return (
        <AlertDialog>
            <AlertDialogTrigger 
                className="border border-confi text-sm font-[500] text-dark py-[6px] hover:bg-primary hover:text-white min-w-[88px] hover:border-none rounded-[132px]"
            > View </AlertDialogTrigger>

            <AlertDialogContent className="p-0">
                <AlertDialogHeader className="h-[100vh] md:h-[580px] overflow-auto px-[24px] py-[24px]">
                <AlertDialogTitle className="relative mb-[24px] text-base font-[700] leading-[22.4px]">
                    {food?.name}
                    {!loading && <AlertDialogCancel className="border-none shadow-none absolute top-[-8px] right-0 h-[36px] hover:bg-[none]">
                        <MdClose className="text-xl" />
                    </AlertDialogCancel>}
                </AlertDialogTitle>
                <AlertDialogDescription className="px-24px">
                    <Formik
                        initialValues={{ 
                            name: food?.name || "", 
                            about: food?.about ||  "", 
                            pictures: food?.pictures || "", 
                            price: food?.price || "", 
                            preparation_time: food?.preparation_time ||  "",
                            category: food?.category || [],
                        }}
                        onSubmit={(values)=> handleSubmit(values)}
                        validationSchema={add_food}
                    >
                        {()=> (
                            <>
                                <Field 
                                    name="name"
                                    label="Name of food"
                                    placeholder="example: chicken, shawarma, etc."
                                    disabled={loading}
                                />

                                <div className="flex flex-col md:flex-row md:items-start gap-4">
                                    <div className="w-full md:w-[50%]">
                                        <Field 
                                            name="price"
                                            type="number"
                                            label="Price"
                                            min={1}
                                            disabled={loading}
                                        />
                                    </div>
                                    <div className="w-full md:w-[50%]">
                                        <Field 
                                            name="preparation_time"
                                            type="text"
                                            label="Preparation time"
                                            min={1}
                                            disabled={loading}
                                        />
                                    </div>

                                </div>
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
                                    disabled={loading}
                                />

                                <ImageInputs 
                                    name="pictures"
                                    label="Food Images"
                                    loading={loading}
                                    handleSubmit={setFiles}
                                    disabled={loading}
                                />

                                <Textbox 
                                    label="Description (optional)"
                                    name="about"
                                    placeholder="Tell customers about how the food was made"
                                    disabled={loading}
                                />

                                <Submit title="Submit" loading={loading} />
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

export default EditFood;
  