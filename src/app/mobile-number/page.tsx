"use client";
import ButtonComponent from "@/components/button/button";
import { useAppContext } from "@/context/appContext";
import { Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MobileNumber() {
  const { mobileNumber, setMobileNumber, setUserId } = useAppContext();
  const [value, setValue] = useState("");
  const router = useRouter();

  async function postMobileNumber(){
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({mobile_number: mobileNumber}),
        }
      )
  
      const data = await res.json();
  
      if(res.status === 201){
        router.push("/verify-otp")
        setUserId(data._id)
      }
    }catch(error){
      console.log(error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (/^\d*$/.test(inputValue) && inputValue.length <= 10) {
      setValue(inputValue);
      setMobileNumber(inputValue);
    }
  };
  return (
    <>
      <div
        style={{
          width: "87%",
          margin: "10px auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "230px",
        }}
      >
        <Typography
          style={{ fontSize: "16px", fontWeight: 600, textAlign: "center" }}
        >
          Enter your mobile number to verify
        </Typography>
        <Input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Enter mobile number"
          maxLength={10}
          style={{ width: "100%", height: 45, marginTop: "10px" }}
        />
      </div>


    
      <ButtonComponent
      isDisabled={mobileNumber.length === 10 ? false : true}
        text={"Send OTP"}
        onClick={postMobileNumber}
      />
    </>
  );
}
