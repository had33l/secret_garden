import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Badge, CardText } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartFilled } from "@fortawesome/free-solid-svg-icons";
import {
  faStar as faStarFilled,
  faStar as faStarOutline,
} from "@fortawesome/free-regular-svg-icons";

import "./CardStyles.css";

export default function CardItem({
  elt,
  handleIncrement,
  handleSumIncrement,
  handleDecrement,
  handleSumDecrement,
}) {
  const [liked, setLiked] = useState(false); // State to track like status

  const [rating, setRating] = useState(0);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const increment = () => {
    handleIncrement(elt.id);
    handleSumIncrement(elt.price);
  };
  const decrement = () => {
    handleDecrement(elt.id);
    handleSumDecrement(elt);
  };

  // WE MAY NOT NEED THIS FUNCTION IT IS further implementation
  // const showDetails=()=>{
  //   navigate(`/products/${product.id}`)
  // }

  return (
    <Card className="card-item">
      <Card.Img variant="top" src={elt.image} className="card-images" />
      <Card.Body className="card-body">
        <div style={{ display: "flex", gap: "10px" }}>
          <Card.Title className="card-title">{elt.name}</Card.Title>
          <p className="card-price">{elt.price}$</p>
        </div>

        <>
          <div className="card-buttons">
            <Button className="card-button" onClick={increment}>
              +
            </Button>
            <span className="quantity">{elt.qte}</span>

            <Button className="card-button" onClick={decrement}>
              -
            </Button>
          </div>
          <div style={{ marginTop: "20px" }}>
            <button
              className={`heart-button ${liked ? "liked" : ""}`}
              onClick={toggleLike}
            >
              <FontAwesomeIcon
                icon={liked ? faHeartFilled : faHeartOutline}
                size="lg"
              />
            </button>
          </div>
          <div className="star-rating">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={index < rating ? faStarFilled : faStarOutline}
                size="lg"
                className={`star ${index < rating ? "active" : ""}`}
                onClick={() => handleStarClick(index)}
              />
            ))}
          </div>
        </>
      </Card.Body>
    </Card>
  );
}
