"use client"
import React, { useState } from "react";
import { Formik } from "formik";
import { Field, Submit } from "@/components/form";
import Link from "next/link";
import { Logo } from "@/components/general";

const Page = () => {
    const [loading, setLoading] = useState(false);
    const handleLogin = async (values) => {
        try {
            setLoading(true)
        } catch (error) {
            
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
                        initialValues={{ name: "", password: "" }}
                        onSubmit={(values)=> handleLogin(values)}
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