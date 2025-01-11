import { Formik } from "formik";
import React from "react";
import { TabsContent } from "../ui/tabs";
import { Field, Submit } from "../form";

const PasswordSettings = () => {
    return (
       <TabsContent value="password" className="w-full">
            <div className="field">
                <h4 className="text-base font-[600] leading-[19px] underline"> Change Password  </h4>

                <div className="mt-[32px]">
                    <Formik
                        initialValues={{
                        }}
                    >
                        {()=> (
                            <>
                            </>
                        )}
                    </Formik>
                </div>
            </div>
        </TabsContent>
    )
}

export default PasswordSettings