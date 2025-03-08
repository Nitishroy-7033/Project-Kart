import { Avatar, Badge, Dropdown, Menu, Popover, Row, Space } from "antd";
import "./style.css";
import { useState } from "react";
import {
  LuFlower,
  LuFrame,
  LuGraduationCap,
  LuInfo,
  LuPackageOpen,
  LuShoppingBasket,
} from "react-icons/lu";
import { FiBook, FiInfo, FiUser, FiVoicemail } from "react-icons/fi";
const NavBar = () => {
  const items = [
    {
      label: "Home",
      key: "/",
      icon: <LuFrame />,
    },
    {
      label: "Projects",
      key: "projects",
      icon: <LuPackageOpen />,
      children: [
        {
          label: "College Projects",
          key: "college-projects",
          icon: <LuGraduationCap />,
        },
        {
          label: "Social Media",
          key: "social-media",
          icon: <LuFlower />,
        },
      ],
    },
    {
      label: "Info",
      key: "#",
      icon: <FiInfo />,
      children: [
        {
          label: "About us",
          key: "/about-us",
          icon: <FiUser />,
        },
        {
          label: "Contact us",
          key: "/contact-us",
          icon: <FiVoicemail />,
        },
        {
          label: "Privacy & Policy",
          key: "/privacy-policy",
          icon: <FiBook />,
        },
      ],
    },
  
  ];
  const itemss = [
    {
      key: "1",
      label: "My Account",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "Profile",
      extra: "⌘P",
    },
    {
      key: "3",
      label: "Billing",
      extra: "⌘B",
    },
    {
      key: "4",
      label: "Settings",
      extra: "⌘S",
    },
  ];
  const [current, setCurrent] = useState("/");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const content = <div>Your cart is empty</div>;
  return (
    <Row justify={"center"} align={"middle"} className="nav-bar-top">
      <Row className="nav-bar" align={"middle"} justify={"space-between"}>
        <div className="logo">PROJECTS KART</div>
        <Row
          align={"middle"}
          justify={"end"}
          style={{
            width: "50%",
          }}
        >
          <Menu
            className="nav-menus"
            align
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
          <div style={{
            marginRight:"10px"
          }}>
          <Avatar
                shape="square"
                style={{
                  cursor: "pointer",
                  backgroundColor: "var(--secondary-color)",
                }}
                size="medium"
                icon={<FiUser />}
              />
          </div>
          <Badge count={5} style={{}}>
            <Popover content={content} title="Cart items">
              <Avatar
                shape="square"
                style={{
                  cursor: "pointer",
                  backgroundColor: "var(--primary-color)",
                }}
                size="medium"
                icon={<LuShoppingBasket />}
              />
            </Popover>
          </Badge>
        </Row>
      </Row>
    </Row>
  );
};

export default NavBar;
