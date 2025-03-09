import { Row, Spin } from "antd";

const Preloader = () => {
  return (
    <Row
      align={"middle"}
      justify={"center"}
      style={{
        height: "100vh",
      }}
    >
      <Spin size="large" />
    </Row>
  );
};

export default Preloader;
