import { message } from "antd";
import apiClient from "../../../configs/apiClient";
import { API_ENDPOINTS } from "../../../configs/apiConfig";

class ProductDetailsActions {
  async getProductDetailsById(id) {
    try {
      console.log(`[PRODUCT DETAILS] Fetching details for Product ID: ${id}`);
      const response = await apiClient.get(`${API_ENDPOINTS.PRODUCTS}?ProductId=${id}`);

      if (response.data.success) {
        console.log("[PRODUCT DETAILS] Fetch successful:", response.data.data);
        return {
          success: true,
          message: "Product details fetched successfully",
          product: response.data.data,
        };
      } else {
        console.log("[PRODUCT DETAILS] Fetch error:", response.data.message);
        return {
          success: false,
          message: response.data.message,
          product: null,
        };
      }
    } catch (ex) {
      console.log("[PRODUCT DETAILS] Fetch error:", ex);
      return {
        success: false,
        message: ex.message,
        product: null,
      };
    }
  }
}

export default new ProductDetailsActions();
