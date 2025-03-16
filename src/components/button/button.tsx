import { Button } from "antd";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
  isDisabled?: boolean;
  heightFlag?: string
}

export default function ButtonComponent({ text, onClick, isDisabled}: ButtonProps) {
  return (
    <>
      <div style={{  }}>
        <div
          style={{
            position: "fixed",
            bottom: "10px",
            display: "flex",
            justifyContent: "center",
            width: "100%",
            zIndex:5
          }}
        >
          <button
            onClick={onClick}
            disabled = {isDisabled}
            style={{
              fontSize: "16px",
              backgroundColor: `${isDisabled ? "#a3aed1"  : "#1C256C"}`,
              color: "white",
              minWidth: "343px",
              height: "56px",
              borderRadius: "8px",
              border: "none",
            }}
          >
            {text}
          </button>
        </div>
      </div>
    </>
  );
}
