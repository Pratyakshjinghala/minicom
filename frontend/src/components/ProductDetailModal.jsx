import { motion } from "framer-motion";

export default function ProductDetailModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white rounded-xl shadow-2xl p-6 max-w-2xl w-full relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 hover:rotate-90 transition-transform"
        >
          ✖
        </button>

        {/* Product image */}
        <div className="relative h-64 overflow-hidden rounded-lg">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
          />
          <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-md shadow">
            {product.category}
          </span>
        </div>

        {/* Content */}
        <div className="mt-5 space-y-3">
          <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>

          {/* Price + Rating */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-extrabold text-indigo-600">
              ${product.price}
            </span>
            <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md font-medium">
              ⭐ {product.rating}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 mt-5">
            <button className="flex-1 bg-indigo-600 text-white py-2 rounded-lg shadow hover:bg-indigo-700 transition">
              Add to Cart
            </button>
            <button className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition">
              Wishlist
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
