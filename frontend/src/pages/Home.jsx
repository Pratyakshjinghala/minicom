import { useEffect, useState } from "react";
import { getProducts, getProductById } from "../api/products";
import { getCategories, getProductsByCategory } from "../api/categories";
import ProductGrid from "../components/ProductGrid";
import ProductDetailModal from "../components/ProductDetailModal";
import FilterBar from "../components/FilterBar";
import SortDropdown from "../components/SortDropdown";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sort, setSort] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = selectedCategory
        ? await getProductsByCategory(selectedCategory)
        : await getProducts(12, 0);
      let list = data.products || data;
      if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
      if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
      if (sort === "title-asc")
        list.sort((a, b) => a.title.localeCompare(b.title));
      if (sort === "title-desc")
        list.sort((a, b) => b.title.localeCompare(a.title));
      setProducts(list);
    }
    fetchData();
  }, [selectedCategory, sort]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const handleSelectProduct = async (id) => {
    const data = await getProductById(id);
    setSelectedProduct(data);
  };

  return (
    <div className="p-6 mt-20">
      <div className="flex justify-between items-center mb-4">
        <FilterBar
          categories={categories}
          onSelect={setSelectedCategory}
          selectedCategory={selectedCategory} 
        />
      </div>
      <SortDropdown sort={sort} setSort={setSort} />

      <ProductGrid products={products} onSelect={handleSelectProduct} />

      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
