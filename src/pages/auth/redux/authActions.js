import axios from "axios";
import { BASE_URL } from "../../../configs/config";
import { setLoding } from "./authSlice";
import { useDispatch } from "react-redux";

class AuthActions {
  async loginUser(email, password) {
    try {
      const response = await axios.post(`http://localhost:5018/Auth/login`, {
        email: email,
        password: password,
      });

      if (response.data.success) {
        const { token, refreshToken, role, expires, issuedAt } =
          response.data.data;
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("role", role);
        localStorage.setItem("expires", expires);
        localStorage.setItem("issuedAt", issuedAt);
        console.log("✅ Login ", response.data.message);
        return {
          success: true,
          data: response.data,
          message: "Login Success full",
        };
      } else {
        console.log("❌ Login ", response.data.message);
        return {
          success: false,
          message: response.data.message,
        };
      }
    } catch (error) {
      console.error("Login error:", error.response?.data?.message || error);
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  }
}

export default new AuthActions();
