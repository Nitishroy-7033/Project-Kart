import { Avatar, Col, Row, Space, Tooltip } from "antd";
import { GoVerified } from "react-icons/go";
import { RiAdminFill } from "react-icons/ri";

const SellerInformationSection = () => {
  return (
    <Col>
      <Row>
        <Space
          style={{
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Seller Information
        </Space>
      </Row>
      <br></br>
      <Row
        align={"middle"}
        justify={"space-between"}
        style={{
          gap: "10px",
          backgroundColor: "var(--light-color)",
          padding: "15px",
        }}
      >
        <Row
          style={{
            gap: "10px",
          }}
        >
          <Avatar shape="square" size={35} icon={<RiAdminFill />} />
          <Space
            style={{
              fontSize: "18px",
            }}
          >
            Devhq.in
          </Space>
        </Row>

        <div>
          <Tooltip title={"Verfied seller"}>
            <GoVerified color="var(--primary-color)" size={25} />
          </Tooltip>
        </div>
      </Row>
    </Col>
  );
};

export default SellerInformationSection;
