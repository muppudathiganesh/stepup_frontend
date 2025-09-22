import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter states
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [sortBy, setSortBy] = useState("");
  

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Later you can pass query params to backend
        const response = await axios.get(
          `http://localhost:8000/api/products/${categorySlug}/`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categorySlug]);

  if (loading) {
    return <div className="text-center py-10 text-gray-600">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Horizontal Filter Bar */}
      <div className="flex flex-wrap items-center gap-6 border-b pb-4 mb-6">
        {/* Label */}
        <div className="font-semibold text-gray-700">Filters:</div>

        {/* Size */}
        <div>
          <label className="text-sm font-medium mr-2">Size:</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="border rounded px-3 py-1 text-sm"
          >
            <option value="">All</option>
            {["S", "M", "L", "XL"].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        {/* Brand */}
        <div>
          <label className="text-sm font-medium mr-2">Brand:</label>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="border rounded px-3 py-1 text-sm"
          >
            <option value="">All</option>
            {["Nike", "Adidas", "Puma", "Reebok"].map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Color */}
        <div>
          <label className="text-sm font-medium mr-2">Color:</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="border rounded px-3 py-1 text-sm"
          >
            <option value="">All</option>
            {["Red", "Blue", "Black", "White", "Green"].map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>

        {/* Sort */}
        <div>
          <label className="text-sm font-medium mr-2">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded px-3 py-1 text-sm"
          >
            <option value="">Default</option>
            <option value="price_low_high">Price: Low to High</option>
            <option value="price_high_low">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <p className="text-gray-500">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
