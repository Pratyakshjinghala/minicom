import express from "express";
import cors from "cors";
import productsRoute from "./routes/products.js";
import categoriesRoute from "./routes/categories.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productsRoute);
app.use("/api/categories", categoriesRoute);

app.listen(PORT, () => {
  console.log(`✅ Backend server running at http://localhost:${PORT}`);
});
