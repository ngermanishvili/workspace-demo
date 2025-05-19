// src/index.ts
import axios from "axios";
var apiClient = axios.create({
  baseURL: "https://api.example.com",
  timeout: 1e4,
  headers: {
    "Content-Type": "application/json"
  }
});
var API_KEY = "49274364-dd165c93bb99f0825fe77253d";
var BASE_URL = "https://pixabay.com/api/";
var searchImages = async (params = {}) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      ...params
    }
  });
  return response.data;
};
var getImageById = async (id) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      id
    }
  });
  return response.data;
};
export {
  apiClient,
  getImageById,
  searchImages
};
