import React from "react";
import "keen-slider/keen-slider.min.css";
import Carousel from "./Carousel";
import NewInSeason from "./NewInSeason";
import BestSelling from "./BestSelling";
import Customers from "./Customers";
import Inspirational from "./Inspirational";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./homeStyles.css";

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-header">
          <h1>Unlock the Beauty of Nature at Home</h1>
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

      <div
        style={{
          backgroundColor: "#f7e7e2",
          padding: "20px",
          paddingBottom: "50px",
        }}
      >
        <Customers />
      </div>
      <div style={{ backgroundColor: "#fefaf6", padding: "20px" }}>
        <Inspirational />
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; 2024 The Secret Garden. All Rights Reserved.</p>
            <p>Contact us: info@secretGarden.com</p>

            <div className="social-media-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
          <div className="footer-quote">
            <p>"Leave room in your garden for the faeries to dance"</p>
          </div>

          <div className="footer-right">
            <div className="payment-methods">
              <img
                src={require("../assets/visa.png")}
                alt="Visa"
                className="payment-image"
              />
              <img
                src={require("../assets/paypal.png")}
                alt="PayPal"
                className="payment-image"
              />
              <img
                src={require("../assets/mastercard.png")}
                alt="MasterCard"
                className="payment-image"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
