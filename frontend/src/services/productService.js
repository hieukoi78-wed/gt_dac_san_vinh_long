const API_URL = "http://localhost:5001/api/products";

export const getAllProducts = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};
