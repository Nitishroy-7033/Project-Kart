import { message } from "antd";
import apiClient from "../../../configs/apiClient";
import { API_ENDPOINTS, STORAGE_KEYS } from "../../../configs/apiConfig";

class HomeAction {
  async fetchProductsAsync() {
    try {
      console.log("[PRODUCT] Product fetch start ");
      var response = await apiClient.get(API_ENDPOINTS.PRODUCTS);
      if (response.data.success) {
        console.log("[PRODUCT] Product success:", response.data.data);
        return {
          success: true,
          message: "Product Fetch successful",
          products: response.data.data,
        };
      } else {
        console.log("[PRODUCT] Product Error:", response.data.message);
        return {
          success: false,
          message: response.data.message,
          products: [],
        };
      }
    } catch (ex) {
      console.log("[PRODUCT] Product error:", ex);
      return {
        success: false,
        message: ex.message,
      };
    }
  }
}

export default new HomeAction();
