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
} from "@/components/ui/alert-dialog";
import { Formik } from "formik";
import { MdClose } from "react-icons/md"

import { Field, Submit } from "../form";

const CreateNewFood = ({ loading, submit }) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger className="btn-primary"> Add New Food </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader className="h-[480px]">
                <AlertDialogTitle className="relative mb-[24px] text-base text-center font-[700] leading-[22.4px]">
                    Add New Food
                    <AlertDialogCancel className="border-none shadow-none absolute top-[-8px] right-0 h-[36px] hover:bg-[none]">
                        <MdClose className="text-xl" />
                    </AlertDialogCancel>
                </AlertDialogTitle>
                <AlertDialogDescription>
                    <Formik
                        initialValues={{ name: "", desc: "" }}
                    >
                        {()=> (
                            <>
                                <Field 
                                    name="name"
                                    label="Name of food"
                                    placeholder="example: chicken, shawarma, etc."
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
  