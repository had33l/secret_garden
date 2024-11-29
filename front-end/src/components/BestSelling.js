import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartFilled } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import products from "./data.json";
import "./homeStyles.css";


function BestSelling() {
  const [liked, setLiked] = useState(Array(products.length).fill(false)); // State to track each product's like status
  const navigate = useNavigate();

  const bestSellingNames = [
    "Pressed Rose Petals Frame",
    "Pressed Jasmine Frame",
    "Pressed Flowers Frame",
    "Verdant Grace",
    "Wrapped in Elegance",
    "Crimson Harvest",
    "Roses",
    "Carnation Seeds",
  ];

  const goToDetails = (id) => {
    navigate(`/ProductDetails/${id}`);
  };

  const bestSellingProducts = products.filter((product) =>
    bestSellingNames.includes(product.name)
  );

  const toggleLike = (index) => {
    setLiked((prevState) =>
      prevState.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className="best-selling">
      <h1>Best Selling Products</h1>
      <div className="products-container">
        {bestSellingProducts.map((product, index) => (
          <div className="product-card" key={product.id}>
            <div onClick={() => goToDetails(product.id)}>
              <div className="product-image-wrapper">
                <img
                  src={require(`../assets/${product.image}.png`)}
                  alt={product.name}
                  className="product-image"
                />
                {/* <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  /> */}
              </div>
              <h3 className="product-name">{product.name}</h3>
            </div>
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
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSelling;
