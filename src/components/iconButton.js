import { useState } from "react";
import { useTheme } from "../context/theme/ThemeContext";

const IconButton = ({ icon, onClick, background, color, radius }) => {
  const [isHovered, setIsHovered] = useState(false);
    const {theme} = useTheme()
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: "0.1s ease",
        width: "40px",
        height: "40px",
        border: isHovered ? `1px solid ${theme.primary} ` : `1px solid ${theme.borderColor} `,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        padding: "5px",
        borderRadius: radius || "20%",
        background: isHovered ? theme.primary : theme.background, // Change background on hover
        color: isHovered ?  theme.background : color, // Change text/icon color on hover
        transition: "all 0.3s ease", // Smooth transition effect
      }}
    >
      {icon}
    </div>
  );
};

export default IconButton;
