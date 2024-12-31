import React from "react";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import AppLayout from "@/containers/AppLayout";
import GlobalProvider from "@/context/GlobalContext";

export const metadata = {
  title: "FoodGo",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-[100vh] w-full">
          <GlobalProvider>
          <Toaster className="fixed top-0 left-0" />
            <AppLayout>
              {children}
            </AppLayout>
          </GlobalProvider>
      </body>
    </html>
  );
}