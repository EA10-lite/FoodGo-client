"use client"
import React, { useState } from "react";
import { Formik } from "formik";
import { Field, Submit } from "@/components/form";
import Link from "next/link";
import { Logo } from "@/components/general";
import { forgot_password } from "@/schema/auth";
import { forgotPassword } from "@/services/auth";
import { useToast } from "@/hooks/use-toast";

const Page = () => {
    const { toast } = useToast();

    const [loading, setLoading] = useState(false);
    const handleForgotPassword = async (values) => {
        try {
            setLoading(true);
            const response = await forgotPassword(values);
            if(response?.data?.success) {
                toast({ 
                    title: "Success", 
                    description: `Verification code sent to ${values.email}`,
                    top: "0", 
                })
            }
        } catch (error) {
            console.log("error: ", error, error?.response?.data?.message);
            toast({ 
                title: "Failed", 
                description: error?.response?.data?.message || error?.message || "Failed to send verification code!", 
                top: "0", 
                variant: "destructive" 
            })
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="h-full w-full flex items-center justify-center">
            <div className="w-[400px] mx-auto border border-secondary border-opacity-40 shadow-md p-[24px] rounded-[10px]">
                <div className="head mb-[40px]">
                    <Logo />
                </div>
                <div className="body">
                    <Formik
                        initialValues={{ email: "" }}
                        onSubmit={(values)=> handleForgotPassword(values)}
                        validationSchema={forgot_password}
                    >
                        {()=> (
                            <>
                                <Field 
                                    name="email"
                                    label='Email Address'
                                    placeholder="example: johndoe@gmail.com"
                                    type="email"
                                />

                                <Submit 
                                    title="Signin"
                                    loading={loading}
                                />
                            </>
                        )}
                    </Formik>

                    <p className="text-center font-[500] mt-[20px] text-opacity-60"> Back to <Link href="/login" className="text-primary underline"> Login </Link></p>
                </div>
            </div>
        </div>
    )
}

export default Page;