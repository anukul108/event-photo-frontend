'use client'

import ButtonComponent from "@/components/button/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/mobile-number')
  },[])
  return (
    <>
    <ButtonComponent text={"Send Otp"} onClick={() => router.push('/mobile-number')}/>
    </>
  );
}
