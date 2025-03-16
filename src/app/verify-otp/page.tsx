"use client";
import React, { useRef, useState } from "react";
import { Input, Typography } from "antd";
import type { InputRef } from "antd";
import ButtonComponent from "@/components/button/button";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/appContext";

const { Text } = Typography;

export default function OTPInput() {
  const { otp, setOtp, mobileNumber } = useAppContext();
  const router = useRouter();
  const [otpState, setOtpState] = useState(["", "", "", ""]);
  const inputRefs = useRef<InputRef[]>([]);
  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otpState];
    newOtp[index] = value;
    setOtpState(newOtp);
    setOtp(newOtp.join(""));

    if (value && index < 3 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const verifyOtp = async () => {
    const otpData = {
      mobile_number: mobileNumber, 
      otp: otp, 
    };
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user/verify-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(otpData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "OTP verification failed");
      }
     router.push("/template")
      console.log("OTP verified successfully:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div
        style={{
          marginTop: "230px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h3 style={{ marginBottom: "10px" }} className="text-lg mb-1">
          Enter 4-digit OTP
        </h3>

        <div className="flex space-x-4">
          {otpState.map((digit, index) => (
            <Input
              key={index}
              ref={(el) => {
                if (el) inputRefs.current[index] = el;
              }}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              maxLength={1}
              className="w-12 h-12 text-center text-lg font-bold"
              style={{
                marginRight: "10px",
                width: "40px",
                borderRadius: "8px",
                textAlign: "center",
                fontSize: "20px",
              }}
            />
          ))}
        </div>

        {/* <div style={{ marginTop: "5px" }} className="mt-1">
          <Text className="text-gray-400">
            Didn't receive it?{" "}
            <span className="text-red-500 cursor-pointer">Resend OTP</span>
          </Text>
        </div> */}
      </div>

      <ButtonComponent
      isDisabled={otp.length === 4 ? false : true}
        text={"Verify OTP"}
        onClick={verifyOtp}
      />
    </div>
  );
}
