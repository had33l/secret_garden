import React from "react";
import "keen-slider/keen-slider.min.css";
import Carousel from "./Carousel";
import NewInSeason from "./NewInSeason";
import BestSelling from "./BestSelling";
import Customers from "./Customers";

import "./homeStyles.css";

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-header">
          <h1>the Beauty of Nature at Home</h1>
        </div>

        <div className="home-content">
          <div className="text-section">
            <div className="content-box">
              <p>
                Welcome to our site! Whether you're a seasoned gardener or a
                beginner, we have everything you need to bring nature into your
                home. From vibrant plants and seeds to beautiful pots and
                accessories, explore our collection to create your own secret
                garden that reflects your unique style.
              </p>
            </div>
          </div>

          <div className="carousel-wrapper">
            <Carousel />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#fefaf6", padding: "20px" }}>
        <NewInSeason />

        <hr
          style={{
            borderTop: "1px solid black",
            marginBottom: "40px",
          }}
        />

        <BestSelling />
      </div>

      
      <div style={{backgroundColor:"#f7e7e2", padding:"20px", paddingBottom:"50px"}}>
        <Customers/>
      </div>
    </div>
  );
}

export default Home;
