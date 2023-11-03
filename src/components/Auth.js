import axios from "axios";

const tokenURL = "/wileyws/oauth/token";

export const getAuthorizationToken = async () => {
  const requestData = new URLSearchParams();
  requestData.append("client_id", "ags");
  requestData.append("client_secret", "qeZt7UmeZ8RhwTQkZ8pKMfz8");
  requestData.append("grant_type", "client_credentials");
  requestData.append("scope", "extended");

  try {
    const response = await axios.post(tokenURL, requestData);
    console.log(response);
    return response.data.access_token;
  } catch (error) {
    throw error;
  }
};
