import { Button, Row } from "antd";
import { useTheme } from "../context/theme/ThemeContext";
import { IoNotifications } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { setIsNotificationShow } from "../context/reducers/appSettings";
import IconButton from "./iconButton";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const TopNotificationBanner = () => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setIsNotificationShow(false));
  };
  return (
    <Row
      justify={"space-between"}
      align={"middle"}
      style={{
        gap: "10px",
        padding: "5px 20px",
        backgroundColor: theme.secondary,
        color: theme.background,
        fontSize: "13px",
      }}
    >
      <Row
        align={"middle"}
        style={{
          gap: "10px",
        }}
      >
        <FaPhone /> +91 7033161175 | 7323927277
      </Row>

      <Row
        align={"middle"}
        style={{
          gap: "10px",
        }}
      >
        <IoNotifications size={15} />
        Get 50% off on Selected items | Show Now
      </Row>
      <div onClick={onClose}
      style={{
        padding:"2px",
        // backgroundColor: theme.primary,
        cursor:"pointer",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
      }}
      >
        <IoMdClose color={theme.background} />
      </div>
    </Row>
  );
};

export default TopNotificationBanner;
