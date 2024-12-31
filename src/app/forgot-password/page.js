"use client"
import React, { useState } from "react";
import { Formik } from "formik";
import { Field, Submit } from "@/components/form";
import Link from "next/link";
import { Logo } from "@/components/general";
import { forgot_password } from "@/schema/auth";
import { forgotPassword } from "@/services/auth";
import { useToast } from "@/hooks/use-toast";
import { MailOpen } from "lucide-react";

const Page = () => {
    const { toast } = useToast();

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
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

                setIsFormSubmitted(true);
                localStorage.setItem("reset-password-email", values.email);
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
                <div className="head mb-[20px]">
                    <Logo />
                </div>
                { !isFormSubmitted ? (
                    <div className="body">
                        <div className="form-heading mb-[24px]">
                            <h2 className="text-[22px] font-[600]"> Reset Password </h2>
                            <p className="text-secondary text-sm"> Enter the email associated with your account, and we'll send you the verification code to continue this process! </p>
                         </div>

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
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center rounded-full mx-auto mb-[12px]">
                            <MailOpen className="text-primary text-[84px]" size={44} />
                        </div>
                        <h2 className="text-[22px] font-[600]"> Check your email </h2>
                        <p className="text-secondary text-center"> We have sent you a verification code, to continue the reset password process! </p>
                        <Link className="bg-primary block mt-[24px] w-[137px] rounded-[133.333px] py-[8px] text-white text-center text-sm font-[600]" href="/reset-password">
                            <span> continue </span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Page;