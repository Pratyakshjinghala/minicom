import express from "express";
import axios from "axios";

const router = express.Router();
const cache = new Map();

// 🔹 Get products with pagination
router.get("/", async (req, res) => {
  const { limit = 30, skip = 0 } = req.query;
  const key = `products-${limit}-${skip}`;

  if (cache.has(key)) return res.json(cache.get(key));

  try {
    const { data } = await axios.get("https://dummyjson.com/products", {
      params: { limit, skip },
    });
    cache.set(key, data);
    res.json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// 🔹 Get product by ID
router.get("/:id", async (req, res) => {
  const key = `product-${req.params.id}`;
  if (cache.has(key)) return res.json(cache.get(key));

  try {
    const { data } = await axios.get(`https://dummyjson.com/products/${req.params.id}`);
    cache.set(key, data);
    res.json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

export default router;
