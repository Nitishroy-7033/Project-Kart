import { useState } from "react";
import { Form, Input, Button, Tabs, Typography, Space, Row } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  GoogleOutlined,
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import PrimaryButton from "../../components/primaryButtons";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigation = useNavigate();
  const { Title, Text } = Typography;
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };
  const loginHandle = () => {
    console.log("login");
    localStorage.setItem("role", "user");
    navigation("/");
  }


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f0f2f5",
      }}
    >
      <div
        style={{
          width: 400,
          background: "#fff",
          padding: 24,
          borderRadius: 8,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Tabs activeKey={activeTab} onChange={handleTabChange} centered>
          <Tabs.TabPane tab="Login" key="login">
            <Title level={3} style={{ textAlign: "center" }}>
              Login
            </Title>
            <Form layout="vertical">
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please enter your username!" },
                ]}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Row justify={"center"}>
                  <Button onClick={()=>{loginHandle()}}> Login </Button>
                </Row>
              </Form.Item>
              <Text type="secondary">
                <a href="#">Forgot Password?</a>
              </Text>
            </Form>
            <Text
              style={{
                display: "block",
                textAlign: "center",
                margin: "16px 0",
              }}
            >
              or login with
            </Text>
            <Space style={{ display: "flex", justifyContent: "center" }}>
              <Button className="squre-button"   icon={<GoogleOutlined />} />
              <Button className="squre-button"   icon={<FacebookOutlined />} />
              <Button className="squre-button"   icon={<GithubOutlined />} />
              <Button className="squre-button"   icon={<LinkedinOutlined />} />
            </Space>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Register" key="register">
            <Title level={3} style={{ textAlign: "center" }}>
              Register
            </Title>
            <Form layout="vertical">
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please enter a username!" },
                ]}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email!",
                  },
                ]}
              >
                <Input
                  size="large"
                  prefix={<MailOutlined />}
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please enter a password!" },
                ]}
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Row justify={"center"}>
                  <Button> Register </Button>
                </Row>
              </Form.Item>
            </Form>
            <Text
              style={{
                display: "block",
                textAlign: "center",
                margin: "16px 0",
              }}
            >
              or register with
            </Text>
            <Space style={{ display: "flex", justifyContent: "center" }}>
              <Button className="squre-button"  icon={<GoogleOutlined />} />
              <Button className="squre-button"  icon={<FacebookOutlined />} />
              <Button className="squre-button" icon={<GithubOutlined />} />
              <Button className="squre-button" icon={<LinkedinOutlined />} />
            </Space>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default AuthPage;
