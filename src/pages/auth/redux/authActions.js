import axios from "axios";
import { API_ENDPOINTS, STORAGE_KEYS } from "../../../configs/apiConfig";

class AuthActions {
  async loginUser(email, password) {
    try {
      const response = await axios.post(API_ENDPOINTS.LOGIN, {
        email: email,
        password: password,
      });

      if (response.data.success) {
        const { token, refreshToken, role, expires, issuedAt } =
          response.data.data;

        localStorage.setItem(STORAGE_KEYS.TOKEN, token);
        localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
        localStorage.setItem(STORAGE_KEYS.ROLE, role);
        localStorage.setItem(STORAGE_KEYS.EXPIRES, expires);
        localStorage.setItem(STORAGE_KEYS.ISSUED_AT, issuedAt);

        console.log("✅ Login ", response.data.message);
        return {
          success: true,
          data: response.data,
          message: "Login Successful",
          role: role,
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

  async registerUser(firstName, lastName, email, password) {
    try {
      const response = await axios.post(API_ENDPOINTS.REGISTER, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });

      if (response.data.success) {
        console.log("✅ Account Creation ", response.data.message);
        return {
          success: true,
          data: response.data,
          message: "Account created",
        };
      } else {
        console.log("❌ Account Creation  ", response.data.message);
        return {
          success: false,
          message: response.data.message,
        };
      }
    } catch (error) {
      console.error("Account creation error:", error.response?.data?.message || error);
      return {
        success: false,
        message: error.response?.data?.message || "Account creation failed",
      };
    }
  }
}

export default new AuthActions();
