import React from "react";
import "./homeStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const reviews = [
  {
    name: "Bochra Khiari",
    review: "Absolutely love the quality of the products! Highly recommend.",
    rating: 5,
  },
  {
    name: "Amine Brahim",
    review: "Great selection. Will shop here again!",
    rating: 4,
  },
  {
    name: "Emma Davis",
    review: "Beautiful designs and excellent customer service.",
    rating: 5,
  },
];

function Customers() {
  return (
    <div className="customers">
      <h1 className="customers-header">Customer Reviews</h1>
      <div className="review-cards-container">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h3 className="customer-name">{review.name}</h3>
            <p className="customer-review">"{review.review}"</p>
            <div className="star-rating">
              {Array.from({ length: review.rating }).map((_, i) => (
                <FontAwesomeIcon icon={faStar} key={i} className="star-icon" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customers;
