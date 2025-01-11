"use client";
import { SettingsTab } from "@/components/tabs";
import { useGlobalContext } from "@/context/GlobalContext";
import { AiOutlineSetting } from "react-icons/ai";

const Page = () => {
    const { user } =  useGlobalContext();

    return (
        <div className="settings">
            <div className="container mx-auto">
                <div className="w-8/12 mx-auto">
                    <div className="head mb-[40px]">
                        <div className="flex items-center gap-3">
                            <div className="w-[64px] h-[64px] bg-primary_light flex items-center justify-center rounded-[12px]">
                                <AiOutlineSetting className="text-[32px] text-primary" />
                            </div>
                            <div className="">
                                <h2 className="text-[22px] leading-[29px] font-[600]"> Settings </h2>
                            </div>
                        </div>
                    </div>

                    <div className="body w-full rounded-[6px] p-[24px]">
                        <SettingsTab />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;