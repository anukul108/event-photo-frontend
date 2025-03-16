"use client";
import React, { useEffect, useState } from "react";
import { Select, Input, Space } from "antd";
import ButtonComponent from "@/components/button/button";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/appContext";

const { Option } = Select;

const hashtags = [
  "I feel empowered",
  "Proud to be here",
  "Growing every day",
  "Driven by passion",
  "Part of something big",
  "#BestTeam",
  "#Warriors",
  "#Maverick",
  "#RevfinRocks",
  "#WorkHardPlayHarder",
  "#DreamTeam",
  "#Besties",
  "#CoolTeam",
  "#PoweringTheFuture",
  "#RevfinSquad",
  "#RevfinVibes",
  "#LevelUp",
  "I feel valued",
  "Inspired every day",
  "I love my team",
  "Great Place to Work",
];

const CustomDropdown = () => {
  const { tributeData, setTributeData, userId, imageUrl, templateId } = useAppContext();
  const router = useRouter();
  const [success, setSuccess] = useState(false)

  function handleDropDownChange(value: string) {
    setTributeData({ name: tributeData.name, dropdownValue: value });
  }

  const BASE_URL = "http://localhost:5000"; 

const createEventPhoto = async () => {
  const eventPhotoData:any = {
    user_id: userId,
    image_url: imageUrl,
    template_id: ''+templateId,
    name: tributeData.name,
    feel_about_revfin: tributeData.dropdownValue,
  };

  try {
    const response = await fetch(`${BASE_URL}/event-photo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventPhotoData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Event Photo Created:", data);
    setSuccess(true)
    router.push('/generate-image')
    return data;
  } catch (error) {
    console.error("Error creating event photo:", error);
  }
};


  return (
    <>
      <Space
        direction="vertical"
        style={{
          width: "90",
          margin: "0 auto",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <h3 style={{ margin: 0 }}>How do you feel about revfin?</h3>
        <Select
          placeholder="Select an option"
          style={{ width: "100%" }}
          onChange={handleDropDownChange}
          value={tributeData.dropdownValue}
          showSearch
        >
          {hashtags.map((tag) => (
            <Option key={tag} value={tag}>
              {tag}
            </Option>
          ))}
        </Select>

        <h3 style={{ margin: 0, marginTop: "10px" }}>Enter your name</h3>
        <Input
          placeholder="Enter your name"
          value={tributeData.name}
          onChange={(e) =>
            setTributeData({
              name: e.target.value,
              dropdownValue: tributeData.dropdownValue,
            })
          }
        />
      </Space>
      <ButtonComponent
      isDisabled={tributeData.name && tributeData.dropdownValue ? false : true}
        text={"Generate"}
        onClick={createEventPhoto}
      />
    </>
  );
};

export default CustomDropdown;
