import { message } from "antd";
import apiClient from "../../../configs/apiClient";
import { API_ENDPOINTS } from "../../../configs/apiConfig";

class ProductDetailsActions {
  async getProductDetailsById(id) {
    try {
      console.log(`[PRODUCT DETAILS] Fetching details for Product ID: ${id}`);
      const response = await apiClient.get(
        `${API_ENDPOINTS.PRODUCTS}?ProductId=${id}`
      );

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

  async giveProductReviewAsync({ id, description, rating, images }) {
    try {
      console.log(`[PRODUCT REVIEW] Giving review for Product ID: ${id}`);

      // Validate inputs
      if (!id) {
        return {
          success: false,
          message: "Product ID is required",
          product: null,
        };
      }
      if (!description || description.trim() === "") {
        return {
          success: false,
          message: "Review description cannot be empty",
          product: null,
        };
      }
      if (rating == null || rating < 1 || rating > 5) {
        return {
          success: false,
          message: "Rating must be between 1 and 5",
          product: null,
        };
      }

      const bodyRequest = {
        productId: id,
        description: description.trim(),
        rating,
        images,
      };

      const response = await apiClient.post(
        `${API_ENDPOINTS.REVIEWS}`,
        bodyRequest
      );

      if (response.data.success) {
        console.log(
          "[PRODUCT REVIEW] Review added successfully:",
          response.data.data
        );
        return {
          success: true,
          message: "Review submitted successfully",
          product: response.data.data,
        };
      } else {
        console.log(
          "[PRODUCT REVIEW] Review submission failed:",
          response.data.message
        );
        return {
          success: false,
          message: response.data.message,
          product: null,
        };
      }
    } catch (ex) {
      console.log("[PRODUCT REVIEW] Error:", ex);
      return {
        success: false,
        message: ex.message,
        product: null,
      };
    }
  }
}

export default new ProductDetailsActions();
