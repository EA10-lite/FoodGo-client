"use client"
import React, { useState } from "react";
import { Formik } from "formik";
import { Field, Submit } from "@/components/form";
import { Logo } from "@/components/general";
import {  verify_email } from "@/schema/auth";
import { sendVerificationCode, verifyAccount } from "@/services/auth";
import { useToast } from "@/hooks/use-toast";
import { LucideLoader2 } from "lucide-react";

const Page = () => {
    const { toast } = useToast();

    const [loading, setLoading] = useState(false);
    const handleVerifyAccount = async (values) => {
        try {
            setLoading(true);
            const { code } = values;
            const email  = localStorage.getItem("signup-email")
            const response = await verifyAccount({
                email,
                code
            });
            if(response?.data?.success) {
                toast({ 
                    title: "Email Verified", 
                    description: `Account Registration successfully completed!`,
                    top: "0", 
                })

                localStorage.removeItem("signup-email");
                window.location.href = "/login";
            }
        } catch (error) {
            toast({ 
                title: "Verification Failed", 
                description: error?.response?.data?.message || error?.message || "Failed to verify your email, please try agai", 
                top: "0", 
                variant: "destructive" 
            })
        } finally {
            setLoading(false)
        }
    }


    const [resending, setResending] = useState(false);
    const resendVerificationCode = async () => {
        try {
            setResending(true);
            const email = localStorage.getItem("signup-email");
            const response = await sendVerificationCode({ email });
            if(response?.data?.success) {
                toast({ 
                    title: "Success", 
                    description: `Verification code sent to `+email,
                    top: "0", 
                })
            }
        } catch (error) {
            toast({ 
                title: "Failed", 
                description: error?.response?.data?.message || error?.message || "Failed to send verification code!", 
                top: "0", 
                variant: "destructive" 
            })
        } finally {
            setResending(false);
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
                        initialValues={{ code: "" }}
                        onSubmit={(values)=> handleVerifyAccount(values)}
                        validationSchema={verify_email}
                    >
                        {()=> (
                            <>
                                <Field 
                                    name="code"
                                    label='Code'
                                    type="text"
                                />

                                <Submit 
                                    title="Verify Email"
                                    loading={loading}
                                />
                            </>
                        )}
                    </Formik>


                    <button className="btn-primary w-full mt-[12px]" onClick={resendVerificationCode}>
                        { resending ? (
                            <LucideLoader2 className="animate-spin delay-150ms text-[22px] text-white" />
                        ) : (
                            <span> Resend Code </span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Page;