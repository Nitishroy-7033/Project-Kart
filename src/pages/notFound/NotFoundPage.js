import { Button, Empty, Row, Typography } from "antd";
import { useTheme } from "../../context/theme/ThemeContext";

const NotFoundPage = () => {
  const { theme } = useTheme();
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        height: "100vh",

        background: theme.background,
        color: theme.text,
      }}
    >
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        styles={{
          image: {
            height: 60,
          },
        }}
        description={
          <Row justify="center" align="middle" style={{ color: theme.text }}>
            Sorry, the page you visited does not exist.
          </Row>
        }
      >
        <Button type="primary">Home</Button>
      </Empty>
    </Row>
  );
};

export default NotFoundPage;
