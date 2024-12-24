import React from "react";
import "./ProductGrid.css"; // Include styles for proper layout

const products = [
  {
    id: 1,
    name: "Everyuth Naturals Rejuvenating Flora",
    image: "https://via.placeholder.com/100", // Replace with real image URLs
    mrp: 500,
    price: 190,
    discount: "62%",
    rating: 4.5,
    freeDelivery: true,
    tag: "Sponsored",
  },
  {
    id: 2,
    name: "POND's Niacinamide Nourishing Lotion (400ml)",
    image: "https://via.placeholder.com/100",
    mrp: 499,
    price: 194,
    discount: "61%",
    rating: 4.6,
    freeDelivery: true,
    tag: "Sponsored",
  },
  {
    id: 3,
    name: "Bellavita CEO MAN Perfume & White Oud",
    image: "https://via.placeholder.com/100",
    mrp: 748,
    price: 198,
    discount: "73%",
    rating: 4.4,
    freeDelivery: true,
    tag: "Bestseller",
  },
  {
    id: 4,
    name: "Jonse Moisture Dryness Repair",
    image: "https://via.placeholder.com/100",
    mrp: 850,
    price: 299,
    discount: "64%",
    rating: 4.5,
    freeDelivery: true,
    tag: "Top Discount of the Sale",
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-tag">{product.tag}</div>
      <img src={product.image} alt={product.name} className="product-image" />
      <h4 className="product-name">{product.name}</h4>
      <div className="product-price">
        <span className="product-discount">{product.discount} OFF</span>
        <span className="product-mrp">
          <s>₹{product.mrp}</s>
        </span>
        <span className="product-final-price">₹{product.price}</span>
      </div>
      <div className="product-rating">⭐ {product.rating}</div>
      {product.freeDelivery && (
        <div className="product-delivery">Free delivery by 27th Dec</div>
      )}
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
