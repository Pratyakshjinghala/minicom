import axios from "axios";

const API_URL = "http://localhost:5000/api/categories";

export const getCategories = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const getProductsByCategory = async (category) => {
  const res = await axios.get(`${API_URL}/${category}`);
  return res.data;
};
