
import React from "react";
import { TabsContent } from "../ui/tabs";
import { Formik } from "formik";
import { Field, Textbox} from "../form";
import { FiUploadCloud } from "react-icons/fi";
import { useGlobalContext } from "@/context/GlobalContext";

const AccountSettings = () => {
    const { user } =  useGlobalContext();

    return (
        <TabsContent value="restaurant" className="w-full">
            <div className="field">
                <h4 className="text-base font-[600] leading-[19px] underline"> Restaurant Info </h4>

                <div className="mt-[32px]">
                    {user && (
                        <Formik
                            initialValues={{
                                name: user?.name || "",
                                email: user?.email || "",
                                phone: user?.phone || "",
                                about: user?.about || "",
                            }}
                        >
                            {()=> (
                                <>
                                    <div className="w-full flex gap-8 justify-between">
                                        <div className="left w-[53%]">
                                            <Field
                                                label="Restaurant Name"
                                                name="name"
                                                placeholder="Name of your Restaurant"
                                                type="text"
                                            />
                                            <Field
                                                label="Contact Email"
                                                name="email"
                                                placeholder="contact email for your Restaurant"
                                                type="email"
                                            />
                                            <Field
                                                label="Phone Number"
                                                name="phone"
                                                placeholder="eg: +2347061326122"
                                                type="text"
                                            />

                                            <Textbox 
                                                name="about"
                                                placeholder="Tell us brief details about your restaurants"
                                                label="About Restaurant"
                                            />
                                        </div>
                                        <div className="right w-[45%]">
                                            <h4 className="text-[13px] leading-[16px] font-[500] text-[#808192] mb-[4px]"> Restaurant Pictures </h4>
                                            <div 
                                                className="w-full border border-[#9C9BA6] border-opacity-50  rounded-[12px] flex items-center justify-center h-[140px]"
                                                style={{borderStyle: "dashed"}}
                                            >
                                                <div className="flex flex-col items-center">
                                                    <div className="w-[44px] h-[44px] rounded-full bg-[#F3F3F8] flex items-center justify-center">
                                                        <FiUploadCloud className="text-[22px] text-primary" />
                                                    </div>
                                                    <p className="text-[12px] text-center leading-[16px] font-[500] text-[#808192]"> click to upload pictures </p>
                                                </div>
                                            </div>
                                            <h4 className="text-[11px] text-center leading-[16px] font-[500] text-[#808192] mt-[4px]"> Maximum of 5 picture </h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end gap-2 w-full">
                                        <button> clear </button>
                                        <button> Submit </button>
                                    </div>
                                </>
                            )}
                        </Formik>
                    )}
                </div>
            </div>
        </TabsContent>
    )
}

export default AccountSettings;
