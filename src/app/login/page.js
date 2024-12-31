"use client"
import React, { useState } from "react";
import { Formik } from "formik";
import { Field, Submit } from "@/components/form";
import Link from "next/link";
import { Logo } from "@/components/general";
import { login_schema } from "@/schema/auth";
import { login } from "@/services/auth";
import { useToast } from "@/hooks/use-toast";
import { useGlobalContext } from "@/context/GlobalContext";

const Page = () => {
    const { toast } = useToast();
    const { login: userLogin } = useGlobalContext();

    const [loading, setLoading] = useState(false);
    const handleLogin = async (values) => {
        try {
            setLoading(true);
            const response = await login(values);
            if(response?.data?.success) {
                toast({ 
                    title: "Login success", 
                    description: "Redirecting you to dashboard!",
                    top: "0", 
                })

                console.log("user:  ", response?.data?.result);
                userLogin(response?.data?.result);
            }
        } catch (error) {
            console.log("error: ", error, error?.response?.data?.message);
            toast({ 
                title: "Login Failed", 
                description: error?.response?.data?.message || error?.message || "Failed to login, please try again!", 
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
                <div className="head mb-[20px]">
                    <Logo />
                </div>
                <div className="body">
                    <div className="form-heading mb-[24px]">
                        <h2 className="text-[22px] font-[600]"> Login </h2>
                        <p className="text-secondary text-sm"> Sign in with email and password to get access to your dashboard, and order history! </p>
                    </div>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values)=> handleLogin(values)}
                        validationSchema={login_schema}
                    >
                        {()=> (
                            <>
                                <Field 
                                    name="email"
                                    label='Email Address'
                                    placeholder="example: johndoe@gmail.com"
                                    type="email"
                                />

                                <Field 
                                    name="password"
                                    label='Password'
                                    type="password"
                                />

                                <div className="flex items-center mb-[32px] justify-between text-sm font-[500]">
                                    <p className=""> Remember me </p>
                                    <Link href="/forgot-password" className="text-primary"> Forgot password ?</Link>
                                </div>


                                <Submit 
                                    title="Signin"
                                    loading={loading}
                                />
                            </>
                        )}
                    </Formik>

                    <p className="text-center font-[500] mt-[20px] text-opacity-60"> Don't have an account ? <Link href="/signup" className="text-primary underline"> signup </Link></p>
                </div>
            </div>
        </div>
    )
}

export default Page;