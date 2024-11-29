import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "./data.json";
import "./details.css";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");

  if (!product) {
    return <p>Product not found.</p>;
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleColorChange = (e) => setSelectedColor(e.target.value);

  return (
    <div className="product-details-container">
      <div className="product-image-section">
        <img
          src={require(`../assets/${product.image}.png`)}
          alt={product.name}
          className="product-details-image"
        />
      </div>
      <div className="product-info-section">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: {product.price}</p>

        <div className="quantity-controls">
          <button onClick={decreaseQuantity} className="quantity-button">
            -
          </button>
          <span className="quantity-count">{quantity}</span>
          <button onClick={increaseQuantity} className="quantity-button">
            +
          </button>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
       

        <p className="shipping-info">
          Free worldwide shipping on all orders over $100
          <br />
          Delivers in 3-7 working days. Shipping & Return
        </p>

        <div className="product-details">
          <h2>Details</h2>
          <p>Type: {product.type}</p>
          <p>Tag: {product.tag}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
