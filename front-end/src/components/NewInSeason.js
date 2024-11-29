import React from "react";
import "./homeStyles.css";
import { useNavigate } from "react-router-dom";
import products from "./data.json";

// const plants = [
//   {
//     image: require("../assets/Lavender.png"),
//     type: "Indoor",
//     name: "Lavender",
//   },
//   {
//     image: require("../assets/Spathiphyllum.png"),
//     type: "Indoor",
//     name: "Peace Lily",
//   },
//   {
//     image: require("../assets/bamboo_plant_bg.png"),
//     type: "Outdoor",
//     name: "Bamboo Plant",
//   },
// ];

function NewInSeason() {
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    ["Bamboo Plant", "Peace Lily", "Lavender"].includes(product.name)
  );

  const goToDetails = (id) => {
    navigate(`/ProductDetails/${id}`);
  };

  return (
    <div className="new-in-season">
      <h1 className="home-header" style={{ textAlign: "left" }}>
        New In Season
      </h1>
      <div className="cards-container">
        {filteredProducts.map((product) => (
          <div
            className="card"
            key={product.id}
            onClick={() => goToDetails(product.id)}
          >
            <img
              src={require(`../assets/${product.image}.png`)}
              alt={product.name}
              className="card-image"
            />
            <div className="card-info">
              <p className="plant-type">{product.type}</p>
              <h3 className="plant-name">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewInSeason;
