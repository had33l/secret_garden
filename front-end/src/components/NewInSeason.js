import React from "react";
import "./homeStyles.css";

const plants = [
  {
    image: require("../assets/Lavender.png"),
    type: "Indoor",
    name: "Lavender",
  },
  {
    image: require("../assets/Spathiphyllum.png"),
    type: "Indoor",
    name: "Peace Lily",
  },
  {
    image: require("../assets/bamboo_plant_bg.png"),
    type: "Outdoor",
    name: "Bamboo Plant",
  },
];

function NewInSeason() {
  return (
    <div className="new-in-season">
      <h1 className="home-header" style={{ textAlign: "left" }}>
        New In Season
      </h1>
      <div className="cards-container">
        {plants.map((plant, index) => (
          <div className="card" key={index}>
            <img src={plant.image} alt={plant.name} className="card-image" />
            <div className="card-info">
              <p className="plant-type">{plant.type}</p>
              <h3 className="plant-name">{plant.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewInSeason;
