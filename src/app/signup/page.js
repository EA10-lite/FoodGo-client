"use client"
import React, { useState } from "react";
import { Formik } from "formik";
import { Field, Submit } from "@/components/form";
import Link from "next/link";
import { Logo } from "@/components/general";
import { signup_schema } from "@/schema/auth";
import { useToast } from "@/hooks/use-toast";
import { signup } from "@/services/auth";
import { MailOpen } from "lucide-react";

const Page = () => {
    const { toast } = useToast();

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
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
                
                setIsFormSubmitted(true);
                localStorage.setItem("signup-email", values.email);
            }
        } catch (error) {
            toast({ 
                title: "Signup Failed", 
                description: error?.response?.data?.message || error?.message || "Failed to register account, please try again!", 
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
                <div className="head mb-[20px]">
                    <Logo />
                </div>
                { !isFormSubmitted ? (
                    <div className="body">
                        <div className="form-heading mb-[24px]">
                            <h2 className="text-[22px] font-[600]"> Signup </h2>
                            <p className="text-secondary text-sm"> Fill the form with the right details to register your Restaurant with <strong className="underline text-black">FoodGo</strong>. </p>
                         </div>

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
                                        label='Restaurant Name'
                                        placeholder="example: Shoprite"
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
                ) :(
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center justify-center rounded-full mx-auto mb-[12px]">
                            <MailOpen className="text-primary text-[84px]" size={44} />
                        </div>
                        <h2 className="text-[22px] font-[600]"> Check your email </h2>
                        <p className="text-secondary text-center"> We have sent you a verification code, to complete the registration process! </p>
                        <Link className="bg-primary block mt-[24px] w-[137px] rounded-[133.333px] py-[8px] text-white text-center text-sm font-[600]" href="/verify-email">
                            <span> continue </span>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Page;