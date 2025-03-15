import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Tabs,
  Typography,
  Space,
  Row,
  message,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  GoogleOutlined,
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  LeftSquareFilled,
} from "@ant-design/icons";
import PrimaryButton from "../../components/primaryButtons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoding, setRole } from "./redux/authSlice";
import { MdEmail } from "react-icons/md";
import AuthActions from "./redux/authActions";
import "./style.css";
import { BiArrowToLeft, BiLeftArrow } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
const AuthPage = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const { userName, userId, loading } = useSelector((state) => state.auth);

  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Loaded!",
        duration: 2,
      });
    }, 1000);
  };

  const [error, setError] = useState(null);
  const [signupError, setSignupError] = useState(null);

  const changeRoleToAdmin = () => {
    dispatch(setRole("admin"));
  };
  const navigation = useNavigate();
  const { Title, Text } = Typography;
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  const loginHandle = async (values) => {
    dispatch(setLoding(true));
    messageApi.open({
      key,
      type: "loading",
      content: "Checking Credential...",
    });
    const result = await AuthActions.loginUser(values.email, values.password);
    if (result.success) {
      setError(null);
      if (result.role === "Seller" || result.role === "Admin") {
        navigation("/admin");
      } else {
        navigation("/");
      }
      messageApi.open({
        key,
        type: "success",
        content: "Login Success",
        duration: 2,
      });
    } else {
      setError(result.message);
      console.log("Login Failed:", result.message);
      messageApi.open({
        key,
        type: "error",
        content: result.message,
        duration: 2,
      });
    }
    dispatch(setLoding(false));
  };

  const registerHandle = async (values) => {
    console.log("Register Data:", values);
    dispatch(setLoding(true));
    messageApi.open({
      key,
      type: "loading",
      content: "Creating new account...",
    });
    const response = await AuthActions.registerUser(
      values.firstName,
      values.lastName,
      values.email,
      values.password
    );
    if (response.success) {
      messageApi.open({
        key,
        type: "success",
        content: "Created successfull",
        duration: 2,
      });
      setActiveTab("login");
      setSignupError(null);
    } else {
      setSignupError(response.message);
      messageApi.open({
        key,
        type: "error",
        content: response.message,
        duration: 2,
      });
    }
    dispatch(setLoding(false));
  };
  const handleHomePage = () => {
    navigation("/");
  };

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
      {contextHolder}
      <div
        style={{
          width: 400,
          background: "#fff",
          padding: 24,
          borderRadius: 8,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Row
          onClick={() => {
            handleHomePage();
          }}
          align={"middle"}
          className="back-home"
        >
          <IoIosArrowBack /> Back to Homepage
        </Row>
        <Tabs activeKey={activeTab} onChange={handleTabChange} centered>
          <Tabs.TabPane tab="Login" key="login">
            <Title level={3} style={{ textAlign: "center" }}>
              Login
            </Title>
            <Form layout="vertical" onFinish={loginHandle}>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                ]}
              >
                <Input size="large" prefix={<MdEmail />} placeholder="Email" />
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
              <div
                style={{
                  color: "red",
                  marginBottom: "10px",
                }}
              >
                {error}
              </div>
              <Form.Item>
                <Row justify={"center"}>
                  <Button loading={loading} htmlType="submit">
                    Login
                  </Button>
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
              <Button className="squre-button" icon={<GoogleOutlined />} />
              <Button className="squre-button" icon={<FacebookOutlined />} />
              <Button className="squre-button" icon={<GithubOutlined />} />
              <Button className="squre-button" icon={<LinkedinOutlined />} />
            </Space>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Register" key="register">
            <Title level={3} style={{ textAlign: "center" }}>
              Register
            </Title>
            <Form layout="vertical" onFinish={registerHandle}>
              <Form.Item
                name="firstName"
                rules={[
                  { required: true, message: "Please enter a first name!" },
                ]}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="First Name"
                />
              </Form.Item>
              <Form.Item
                name="lastName"
                rules={[
                  { required: true, message: "Please enter a last name!" },
                ]}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined />}
                  placeholder="Last Name"
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
              <div
                style={{
                  color: "red",
                  marginBottom: "10px",
                }}
              >
                {signupError}
              </div>
              <Form.Item>
                <Row justify={"center"}>
                  <Button htmlType="submit"> Register </Button>
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
              <Button className="squre-button" icon={<GoogleOutlined />} />
              <Button className="squre-button" icon={<FacebookOutlined />} />
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
