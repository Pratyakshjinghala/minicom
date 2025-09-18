import express from "express";
import axios from "axios";

const router = express.Router();
const cache = new Map();

// 🔹 Get all categories
router.get("/", async (req, res) => {
  const key = "categories";
  if (cache.has(key)) return res.json(cache.get(key));

  try {
    const { data } = await axios.get("https://dummyjson.com/products/categories");
    cache.set(key, data);
    res.json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
});

// 🔹 Get products by category
router.get("/:category", async (req, res) => {
  const key = `category-${req.params.category}`;
  if (cache.has(key)) return res.json(cache.get(key));

  try {
    const { data } = await axios.get(
      `https://dummyjson.com/products/category/${req.params.category}`
    );
    cache.set(key, data);
    res.json(data);
  } catch {
    res.status(500).json({ error: "Failed to fetch category products" });
  }
});

export default router;
