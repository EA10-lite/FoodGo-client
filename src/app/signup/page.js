"use client"
import React, { useState } from "react";
import { Formik } from "formik";
import { Field, Submit } from "@/components/form";
import Link from "next/link";
import { Logo } from "@/components/general";

const Page = () => {
    const [loading, setLoading] = useState(false);
    const handleSignup = async (values) => {
        try {
            setLoading(true)
        } catch (error) {
            
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
                        initialValues={{ email: "", name: "", password: "" }}
                        onSubmit={(values)=> handleSignup(values)}
                    >
                        {()=> (
                            <>
                                <Field 
                                    name="name"
                                    label='Fullname'
                                    placeholder="example: John Doe"
                                />
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