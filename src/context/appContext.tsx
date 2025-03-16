"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type AppContextType = {
  userId: string;
  setUserId: (userId: string) => void;
  mobileNumber: string;
  setMobileNumber: (mobile: string) => void;
  otp: string;
  setOtp: (otp: string) => void;
  templateId: number | null;
  setTemplateId: (id: number| null) => void;
  imageUrl: string | null;
  setImageUrl: (url: string) => void;
  tributeData: { name: string; dropdownValue: string };
  setTributeData: (data: { name: string; dropdownValue: string }) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [templateId, setTemplateId] = useState<number | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [tributeData, setTributeData] = useState<{
    name: string;
    dropdownValue: string;
  }>({
    name: "",
    dropdownValue: "",
  });

  return (
    <AppContext.Provider
      value={{
        userId,
        setUserId,
        mobileNumber,
        setMobileNumber,
        otp,
        setOtp,
        templateId,
        setTemplateId,
        imageUrl,
        setImageUrl,
        tributeData,
        setTributeData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext);
  // console.log(context)
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
