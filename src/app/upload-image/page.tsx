"use client";
import React, { useState } from "react";
import { Upload, message, Spin, Image } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ButtonComponent from "@/components/button/button";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/appContext";

const ImageUpload: React.FC = () => {
  const router = useRouter();
  const { imageUrl, setImageUrl } = useAppContext();
  const [displayImage, setDisplayImage] = useState("")

  const [loading, setLoading] = useState(false);

  const uploadImage = async (file: File) => {
    const reader = new FileReader();
    const formData = new FormData();
    formData.append("file", file); 

      
  
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/upload-image", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      setImageUrl(`http://localhost:5000${data.imagePath}`)
      reader.onloadend = () => {
        setDisplayImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setLoading(false);
      
      console.log("Uploaded Image Path:", data.imagePath);
      return data.imagePath;
    } catch (error) {
      setLoading(false);
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <div style={{ textAlign: "center", padding: 20 }}>
        <Upload
          showUploadList={false}
          beforeUpload={uploadImage}
          accept="image/*"
        >
          <button
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "1px solid #1890ff",
              background: "#1890ff",
              color: "white",
              cursor: "pointer",
            }}
          >
            <UploadOutlined /> Click to Upload
          </button>
        </Upload>

        {loading && <Spin style={{ marginTop: 20 }} />}

        {displayImage?.length > 0 && (
          <div style={{ marginTop: 20 }}>
            <Image width={250} src={displayImage} alt="Uploaded Preview" />
          </div>
        )}
      </div>
      <ButtonComponent
      isDisabled={imageUrl ? false : true}
        text={"Continue"}
        onClick={() => router.push("/tribute")}
      />
    </>
  );
};

export default ImageUpload;
