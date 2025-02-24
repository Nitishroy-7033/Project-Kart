import { FaCartArrowDown } from "react-icons/fa6";
import { useTheme } from "../../context/theme/ThemeContext";
const CircleCartButton = ({ onClick,backgroundColor,color,borderRadius,iconSize,size} ) => {
    const { theme, toggleTheme } = useTheme();
   
    return (
        <div
        onClick={onClick}
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            padding: "10px",
            width: size || "50px",
            height: size || "50px",
            borderRadius:borderRadius|| "50%",
            background: backgroundColor || theme.primary,
            color: color || theme.background,
        }}
        >
        <FaCartArrowDown size={iconSize||"20px"} /> 
        </div>
    );
}


export default CircleCartButton;