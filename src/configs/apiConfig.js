const BASE_URL = "http://localhost:5018";


// Auth API Endpoints
export const API_ENDPOINTS = {
    LOGIN: `${BASE_URL}/Auth/login`,
    REGISTER: `${BASE_URL}/Auth/register`,
  };
  
  // Local Storage Keys
  export const STORAGE_KEYS = {
    TOKEN: "token",
    REFRESH_TOKEN: "refreshToken",
    ROLE: "role",
    EXPIRES: "expires",
    ISSUED_AT: "issuedAt",
  };