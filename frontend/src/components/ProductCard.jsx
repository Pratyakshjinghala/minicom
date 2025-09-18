import { motion } from "framer-motion";

export default function ProductCard({ product, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="group relative bg-white rounded-xl shadow-md cursor-pointer overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
      onClick={() => onClick(product.id)}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
        {/* Quick view badge */}
        <span className="absolute bottom-2 left-2 text-xs bg-indigo-600 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
          Quick View
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition">
          {product.title}
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">
            ${product.price}
          </span>
          <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-medium rounded-md">
            {product.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
