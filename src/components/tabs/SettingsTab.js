import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import {
    AccountSettings,
    NotificationSettings,
    PasswordSettings,
    PaymentSettings,
    ShopSettings
} from "@/components/settings";

const SettingsTab = () => {
    return (
        <Tabs defaultValue="account" className="w-[400px] w-full">
            <TabsList className="grid w-[70%] grid-cols-5 mb-[32px] bg-primary_light">
                <TabsTrigger value="restaurant">Restaurant</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="notification">Notification</TabsTrigger>
                <TabsTrigger value="payment">Payment</TabsTrigger>
            </TabsList>


            <ShopSettings />
            <AccountSettings />
            <PasswordSettings />
            <PaymentSettings />
            <NotificationSettings />
        </Tabs>
    )
}

export default SettingsTab;