"use client";
import ButtonComponent from "@/components/button/button";
import { useRouter } from "next/navigation";
import personImg from "../../../public/testImg.png";
import { useEffect, useState } from "react";
import { Checkbox } from "antd";
import { useAppContext } from "@/context/appContext";
import parse from "html-react-parser";

interface TemplateProps {
  backgroundImage: string;
  textColor: string;
  quoteColor: string;
}

interface Template {
  template_html: string;
  _id: string
}

export default function template() {
  const { templateId, setTemplateId } = useAppContext();
  const router = useRouter();
  const [selectTemplate, setSelectTemplate] = useState(0);
  const [templateData, setTemplateData] = useState([]);

  useEffect(() => {
    getTemplates();
  },[])

  const getTemplates = async () => {
    try {
      const response = await fetch("http://localhost:5000/templates", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const data = await response.json();
      console.log(data)
      setTemplateData(data)
  
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch templates");
      }
  
      return data; 
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "80px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Select Templates</h2>

        <div style={{ width: "92%", margin: "0 auto" }}>
         
        <Checkbox
        style={{marginBottom:'10px'}}
        checked={templateId === 1}
        onChange={() => setTemplateId(templateId === 1 ? null : 1)}
      />
      <CelebrationCard />

      <Checkbox
        style={{marginTop:'10px'}}
        checked={templateId === 2}
        onChange={() => setTemplateId(templateId === 2 ? null : 2)}
      />
      <CelebrationCard1 />

        </div>
      </div>
      <ButtonComponent
      isDisabled={templateId ? false : true}
        text={"Continue"}
        heightFlag="100%"
        onClick={() => router.push("/upload-image")}
      />
    </>
  );
}

const CelebrationCard = () => {
  return (
    <div
      style={{
        backgroundImage: `url('utilis/images/bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        width: "100%",
        maxWidth: "300px",
        margin: "auto",
        backgroundColor: "#1e334d",
        padding: "20px",
        textAlign: "center",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          display: "flex",
        }}
      >
        <img
          style={{ width: "30px", height: "30px" }}
          src="utilis/images/Vector-2.png"
          alt=""
        />
        <p
          style={{
            color: "#EE7C33",
            fontSize: "24px",
            fontWeight: "bold",
            margin: 0,
            marginLeft: "-5px",
          }}
        >
          Revfin
        </p>
      </div>

      <h2
        style={{
          display: "flex",
          fontSize: "24px",
          marginTop: "5px",
          marginBottom: "0",
        }}
      >
        Celebrating
      </h2>
      <h1 style={{ fontSize: "62px", fontWeight: "bold", margin: "0" }}>
        7 YEARS
      </h1>
      <h3
        style={{
          fontSize: "22px",
          fontWeight: 300,
          marginTop: "10px",
          lineHeight: "1.5",
          textAlign: "right",
        }}
      >
        of Revolutionising <br /> Sustainable <br />
        Mobility
      </h3>

      <div
        style={{
          marginTop: "20px",
          position: "absolute",
          bottom: "0px",
          left: "0px",
          display: "flex",
        }}
      >
        <img
          src="utilis/images/template-img1.png"
          alt="Person"
          style={{ width: "77%", height: "357px", borderRadius: "10px" }}
        />
      </div>

      <div
        style={{
          marginTop: "20px",
          color: "yellow",
          fontSize: "18px",
          width: "100%",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <div style={{ width: "150px" }}>
          <p
            style={{
              textAlign: "right",
              maxWidth: "140px",
              wordBreak: "break-word",
              margin: "5px",
              fontWeight: "bold",
            }}
          >
            "Part of something big"
          </p>
          <p style={{ margin: "0", color: "white", textAlign: "right" }}>
            - Vaibhav
          </p>
        </div>
      </div>

      <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "end" }}
      >
        <img
          src="utilis/images/Revfin QR Code 1.png"
          alt="QR Code"
          style={{ width: "70px", height: "70px" }}
        />
      </div>

      <p style={{ marginTop: "10px", fontSize: "16px", textAlign: "end" }}>
        #EVPoweringIndia
      </p>
    </div>
  );
};

export const CelebrationCard1 = () => {
  return (
    <div
      style={{
        backgroundImage: `url('utilis/images/bg-2.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        width: "100%",
        maxWidth: "300px",
        margin: "auto",
        backgroundColor: "#1e334d",
        padding: "20px",
        textAlign: "center",
        color: "white",
        fontFamily: "Arial, sans-serif",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          display: "flex",
        }}
      >
        <img
          style={{ width: "30px", height: "30px" }}
          src="utilis/images/Vector-2.png"
          alt=""
        />
        <p
          style={{
            color: "#EE7C33",
            fontSize: "24px",
            fontWeight: "bold",
            margin: 0,
            marginLeft: "-5px",
          }}
        >
          Revfin
        </p>
      </div>
      
      <h2
        style={{
          display: "flex",
          fontSize: "24px",
          marginTop: "5px",
          marginBottom: "0",
          color: "#263063",
        }}
      >
        Celebrating
      </h2>
      <h1
        style={{
          fontSize: "62px",
          fontWeight: "bold",
          margin: "0",
          color: "#263063",
        }}
      >
        7 YEARS
      </h1>
      <h3
        style={{
          fontSize: "22px",
          fontWeight: 300,
          marginTop: "10px",
          lineHeight: "1.5",
          textAlign: "right",
          color: "#263063",
        }}
      >
        of Revolutionising <br /> Sustainable <br />
        Mobility
      </h3>

      <div
        style={{
          marginTop: "20px",
          position: "absolute",
          bottom: "0px",
          left: "0px",
          display: "flex",
        }}
      >
        <img
          src="utilis/images/template-img2.png"
          alt="Person"
          style={{ width: "77%", height: "357px", borderRadius: "10px" }}
        />
      </div>

      <div
        style={{
          marginTop: "20px",
          color: "yellow",
          fontSize: "18px",
          width: "100%",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <div style={{ width: "150px" }}>
          <p
            style={{
              textAlign: "right",
              maxWidth: "140px",
              wordBreak: "break-word",
              margin: "5px",
              fontWeight: "bold",
              color: "#EE7C33",
            }}
          >
            "Part of something big"
          </p>
          <p style={{ margin: "0", textAlign: "right", color: "#263063" }}>
            - Vaibhav
          </p>
        </div>
      </div>

      <div
        style={{
          marginBottom: "20px",
          marginTop: "20px",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <img
          src="utilis/images/Revfin QR Code 1.png"
          alt="QR Code"
          style={{ width: "70px", height: "70px" }}
        />
      </div>

      <p
        style={{
          position: "absolute",
          right: "20px",
          bottom: "0px",
          zIndex: 3,
          marginTop: "10px",
          fontSize: "16px",
          textAlign: "end",
          color: "#263063",
        }}
      >
        #EVPoweringIndia
      </p>

      <img
        style={{
          width: "95%",
          position: "absolute",
          left: 0,
          bottom: 0,
          zIndex: 2,
        }}
        src="utilis/images/Vector.png"
        alt="bottom-img"
      />
    </div>
  );
};
