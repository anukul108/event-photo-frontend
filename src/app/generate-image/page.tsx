"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/appContext";

function GeneratedImage() {
  const router = useRouter();
  const allDetails = useAppContext();
  const { templateId, tributeData, imageUrl } = useAppContext();

  const templateRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    const html2canvas = (await import("html2canvas")).default;

    if (templateRef.current) {
      const canvas = await html2canvas(templateRef.current, {
        scale: 3, 
        useCORS: true,
      });

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "template.png";
      link.click();
    }
  };

  const handleFullScreen = () => {
    const element = templateRef.current;

    if (!element) return;

    if (document.fullscreenEnabled) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if ((element as any).webkitRequestFullscreen) {
        (element as any).webkitRequestFullscreen(); // Safari
      } else if ((element as any).msRequestFullscreen) {
        (element as any).msRequestFullscreen(); // IE
      }
    } else {
      const newWindow = window.open("", "_blank");
      if (newWindow) {
        newWindow.document.write(`
          <html>
            <head>
              <title>Full Screen Template</title>
              <style>
                body { margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: black; }
              </style>
            </head>
            <body>
              ${element.outerHTML}
            </body>
          </html>
        `);
        newWindow.document.close();
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <button
          onClick={handleFullScreen}
          style={{
            fontSize: "16px",
            backgroundColor: "#1C256C",
            color: "white",
            minWidth: "343px",
            height: "56px",
            borderRadius: "8px",
            border: "none",
          }}
        >
          View Full Screen
        </button>
      </div>

      { templateId === 1 &&
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
              src={imageUrl ?? "utilis/images/template-img2.png"}
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
                "{tributeData.dropdownValue}
              </p>
              <p style={{ margin: "0", textAlign: "right", color: "#263063" }}>
                - {tributeData.name}
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
      }

      { templateId === 2 &&
        <div
          ref={templateRef}
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
              src={imageUrl ?? "utilis/images/template-img2.png"}
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
                {tributeData.dropdownValue}
              </p>
              <p style={{ margin: "0", textAlign: "right", color: "#263063" }}>
                - {tributeData.name}
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
      }

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <button
          onClick={() => router.push("/template")}
          style={{
            fontSize: "16px",
            color: "#1C256C",
            minWidth: "343px",
            height: "56px",
            borderRadius: "8px",
            border: "2px solid #1C256C",
          }}
        >
          Create new one
        </button>
      </div>

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <button
          onClick={handleDownload}
          style={{
            fontSize: "16px",
            backgroundColor: "#1C256C",
            color: "white",
            minWidth: "343px",
            height: "56px",
            borderRadius: "8px",
            border: "none",
            marginBottom:'20px'
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
}

export default GeneratedImage;
