import { Button } from "antd";
import { useTheme } from "../../context/theme/ThemeContext";

const PrimaryButton = ({ text, isPrimary = false, icon,width }) => {
  const { theme } = useTheme();
  return (
    <Button
      style={{
        width:width ? width : "100%",
        background: isPrimary ? theme.primary : null,
        color: isPrimary ? theme.background : theme.primary,
        borderRadius: "5px",
        padding: "20px 30px",
        border: isPrimary ? `2px solid ${theme.primary}` : `2px solid ${theme.primary}`,
        cursor: "pointer",
      }}
    >
      {icon}
      {text}
    </Button>
  );
};

export default PrimaryButton;
