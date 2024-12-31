"use client"
import React, { useState } from "react";
import { Formik } from "formik";
import { Field, Submit } from "@/components/form";
import { Logo } from "@/components/general";
import {  reset_password } from "@/schema/auth";
import { resetPassword } from "@/services/auth";
import { useToast } from "@/hooks/use-toast";

const Page = () => {
    const { toast } = useToast();

    const [loading, setLoading] = useState(false);
    const handleResetPassword = async (values) => {
        try {
            setLoading(true);
            const { code, password } = values;
            const email  = localStorage.getItem("reset-password-email")
            const response = await resetPassword({
                email,
                code,
                password
            });
            if(response?.data?.success) {
                toast({ 
                    title: "Success", 
                    description: `Password successfully updated`,
                    top: "0", 
                })

                window.location.href = "/login";
            }
        } catch (error) {
            toast({ 
                title: "Failed", 
                description: error?.response?.data?.message || error?.message || "Failed to update password please try again!", 
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
                        initialValues={{ code: "", password: "", confirm_password: "" }}
                        onSubmit={(values)=> handleResetPassword(values)}
                        validationSchema={reset_password}
                    >
                        {()=> (
                            <>
                                <Field 
                                    name="code"
                                    label='Code'
                                    type="text"
                                />

                                <Field 
                                    name="password"
                                    label='Password'
                                    type="password"
                                />

                                <Field 
                                    name="confirm_password"
                                    label='Re-type Password'
                                    type="password"
                                />

                                <Submit 
                                    title="Signin"
                                    loading={loading}
                                />
                            </>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Page;