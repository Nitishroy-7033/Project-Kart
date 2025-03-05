import { Col, Row } from "antd";
import { useTheme } from "../../context/theme/ThemeContext";

const FooterWidget = () => {
  const { theme } = useTheme();
  return (
    <Col>
      <Row
        gutter={[20, 30]}
        style={{
          borderTop: `2px solid ${theme.borderColor}`,
          backgroundColor: theme.container,
          color: theme.text,
          height: "300px",
          padding: "20px 150px",
        }}
      >
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          xxl={8}
          style={{
            backgroundColor: theme.background,
          }}
        ></Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          xxl={8}
          style={{
            backgroundColor: theme.background,
          }}
        ></Col>
        <Col
          xs={24}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          xxl={8}
          style={{
            backgroundColor: theme.background,
          }}
        ></Col>
      </Row>
      <Row
        justify={"center"}
        align={"middle"}
        style={{
          height: "30px",
          backgroundColor: theme.secondary,
        }}
      >
        @2025 All Right Reserved By DevHQ.in
      </Row>
    </Col>
  );
};

export default FooterWidget;
