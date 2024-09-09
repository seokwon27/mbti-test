import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("register error : ", error);
  }
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, {
    id: userData.id,
    password: userData.password,
  });
  console.log(response);

  return response.data;
};

// export const getUserProfile = async (token) => {
//   const response = await axios.get(`${API_URL}/user`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });
//   console.log("user : ", response);
//   return response.data;
// };

export const updateProfile = async (userData) => {
  const response = await axios.patch(`${API_URL}/profile`, userData, {
    headers: {
      Authorization: `Bearer ${userData.accessToken}`,
    },
  });
  console.log(response);
  return response.data;
};
