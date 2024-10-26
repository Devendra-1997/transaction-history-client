import axios from "axios";

// Server URL
const API_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/api/user`;

// Signup | User Registration | Create | POST
export const createUser = (userObj) => {
  const response = axios
    .post(`${API_URL}/signup`, userObj)
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
};

// Login | Post
export const loginUser = (userObj) => {
  const response = axios
    .post(`${API_URL}/login`, userObj)
    .then((res) => res.data)
    .catch((error) => console.log(error));

  return response;
};
