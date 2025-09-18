import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onSelect }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 font-medium">
        No products found 😢
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
      {products.map((p, idx) => (
        <div
          key={p.id}
          className="animate-fadeIn"
          style={{ animationDelay: `${idx * 0.07}s`, animationFillMode: "forwards" }}
        >
          <ProductCard product={p} onClick={onSelect} />
        </div>
      ))}
    </div>
  );
}
