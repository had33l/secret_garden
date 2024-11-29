import React from "react";
import "./homeStyles.css";
import { useNavigate } from "react-router-dom";

function Inspirational() {
  const navigate = useNavigate();

  const goToBlog = () => {
    navigate("/blog");
  };

  const posts = [
    {
      title: "10 Low-Maintenance Houseplants Perfect for Beginners",
      intro:
        "A guide for beginners who want to start their indoor gardening journey without the stress of high-maintenance care",
      image: require("../assets/housePlants.jpg"),
    },
    {
      title: "The Art of Flower Arranging: DIY Bouquets for Every Occasion",
      intro:
        "create stunning floral arrangements at home for weddings, birthdays, or simple décor.",
      image: require("../assets/flowerArranging.jpg"),
    },
    {
      title: "Create a Lush Indoor Garden on a Budget",
      intro:
        "A practical guide for setting up a thriving indoor garden without spending too much money.",
      image: require("../assets/lushGarden.jpg"),
    },
  ];
  return (
    <div className="new-in-season">
      <h1>Inspirational Posts</h1>
      <div className="post-card-container">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.intro}</p>

            <button onClick={goToBlog} className="read-more-button">
              {" "}
              Read More ➡{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inspirational;
