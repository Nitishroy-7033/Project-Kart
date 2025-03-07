import { Avatar, Badge, Menu, Popover, Row } from "antd";
import "./style.css";
import { useState } from "react";
import {
  LuFlower,
  LuFrame,
  LuGraduationCap,
  LuPackageOpen,
  LuShoppingBasket,
} from "react-icons/lu";
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
  ];
  const [current, setCurrent] = useState("/");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const content = (
    <div>
      Your cart is empty
    </div>);
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
