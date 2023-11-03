import axios from "axios";

const baseURL = "/wileyws/v4/wileyb2c/products";
let authToken = ""; // The authorization token

export const setAuthToken = (token) => {
  authToken = token;
};

export const fetchProductDetails = async (productId) => {
  try {
    const response = await axios.get(`${baseURL}/${productId}?lang=en`, {
      headers: {
        Authorization: `bearer ${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
