import React, { useState } from "react";
import "./homeStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartFilled } from "@fortawesome/free-solid-svg-icons";

const products = [
  {
    image: require("../assets/frame_1.png"),
    name: "Pressed Rose Petals Frame",
    price: "$19.99",
  },
  {
    image: require("../assets/frame_2.png"),
    name: "Pressed Jasmine Frame",
    price: "$15.99",
  },
  {
    image: require("../assets/frame_3.png"),
    name: "Pressed Flowers Frame",
    price: "$12.99",
  },
  {
    image: require("../assets/vase_1.png"),
    name: "Verdant Grace",
    price: "$10.99",
  },
  {
    image: require("../assets/vase_2.png"),
    name: "Wrapped in Elegance",
    price: "$18.99",
  },
  {
    image: require("../assets/vase_4.png"),
    name: "Crimson Harvest",
    price: "$29.99",
  },
  {
    image: require("../assets/roses_bg.png"),
    name: "Roses",
    price: "$22.99",
  },
  {
    image: require("../assets/carnation.png"),
    name: "Carnation Seeds",
    price: "$14.99",
  },
];

function BestSelling() {
  const [liked, setLiked] = useState(Array(products.length).fill(false)); // State to track each product's like status

  const toggleLike = (index) => {
    setLiked((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className="best-selling">
      <h1>Best Selling Products</h1>
      <div className="products-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>
            <h3 className="product-name">{product.name}</h3>
            <div className="product-info">
              <p className="product-price">{product.price}</p>
              <button
                className={`heart-button ${liked[index] ? "liked" : ""}`}
                onClick={() => toggleLike(index)}
              >
                <FontAwesomeIcon
                  icon={liked[index] ? faHeartFilled : faHeartOutline}
                />
              </button>
            </div>
            <button className="add-to-cart">Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSelling;
