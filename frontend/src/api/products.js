import axios from "axios";

const API_URL = " https://minicom-1hvp.onrender.com/api/products";

export const getProducts = async (limit = 30, skip = 0) => {
  const res = await axios.get(API_URL, { params: { limit, skip } });
  return res.data;
};

export const getProductById = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};
