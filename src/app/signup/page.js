"use client"
import React, { useState } from "react";
import { Formik } from "formik";
import { Field, Submit } from "@/components/form";
import Link from "next/link";
import { Logo } from "@/components/general";
import { signup_schema } from "@/schema/auth";
import { useToast } from "@/hooks/use-toast";
import { signup } from "@/services/auth";

const Page = () => {
    const { toast } = useToast();

    const [loading, setLoading] = useState(false);
    const handleSignup = async (values) => {
        try {
            setLoading(true);
            const { name, email, phone, password} = values;
            const response = await signup({
                name,
                email,
                phone,
                password,
            });

            if(response?.data?.success) {
                toast({ 
                    title: "Signup success", 
                    description: "Verification code sent to" + email,
                    top: "0", 
                })
            }
        } catch (error) {
            toast({ 
                title: "Signup Failed", 
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
            <div className="w-[400px] mx-auto border border-secondary border-opacity-40 shadow-md rounded-[10px] p-[24px] overflow-hidden">
                <div className="bg-primary bg-opacity-70 py-[12px] px-[24px] mb-[24px] hidden">
                    <h4 className="text-white text-base font-[600]"> Signup as Restaurant </h4>
                </div>
                <div className="head mb-[40px] px-[24px]">
                    <Logo />
                </div>
                <div className="body">
                    <Formik
                        initialValues={{ 
                            email: "", 
                            name: "", 
                            password: "", 
                            phone: "", 
                        }}
                        onSubmit={(values)=> handleSignup(values)}
                        validationSchema={signup_schema}
                    >
                        {()=> (
                            <>
                                <Field 
                                    name="name"
                                    label='Fullname'
                                    placeholder="example: John Doe"
                                    disabled={loading}
                                />
                                <Field 
                                    name="email"
                                    label='Email Address'
                                    placeholder="example: johndoe@gmail.com"
                                    type="email"
                                    disabled={loading}
                                />

                                <Field 
                                    name="phone"
                                    label='Phone Number'
                                    type="text"
                                    disabled={loading}
                                />
                                
                                <Field 
                                    name="password"
                                    label='Password'
                                    type="password"
                                    disabled={loading}
                                />

                                <div className="mt-[32px]">
                                    <Submit 
                                        title="Signup"
                                        loading={loading}
                                    />
                                </div>

                            </>
                        )}
                    </Formik>

                    <p className="text-center mt-[20px] font-[500] opacity-60"> Already have have an account ? <Link href="/login" className="text-primary underline"> login </Link></p>
                </div>
            </div>
        </div>
    )
}

export default Page;