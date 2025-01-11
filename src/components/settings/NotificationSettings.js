import React from "react";
import { TabsContent } from "../ui/tabs";

const NotificationSettings = () => {
    return (
        <TabsContent value="notification" className="w-full">
            <div className="field">
                <h4 className="text-base font-[600] leading-[19px] underline"> Notifications  </h4>

                <div className="mt-[32px]">
                </div>
            </div>
        </TabsContent>
    )
}

export default NotificationSettings;