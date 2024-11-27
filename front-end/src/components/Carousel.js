import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./carousel.css";

const carousel = (slider) => {
  const z = 300;

  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }

  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });

  slider.on("detailsChanged", rotate);

  slider.on("created", () => {
    const interval = setInterval(() => {
      slider.next();
    }, 4000);

    slider.on("destroy", () => {
      clearInterval(interval);
    });
  });
};

function Carousel() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.next();
    }
  }, [sliderRef]);

  return (
    <div className="scene">
      <div className="carousel keen-slider" ref={sliderRef}>
        <div className="carousel__cell">
          <img
            src={require("../assets/home_decor1.jpg")}
            alt="Slide 1"
            className="carousel__image"
          />
        </div>
        <div className="carousel__cell">
          <img
            src={require("../assets/home_decor2.jpg")}
            alt="Slide 2"
            className="carousel__image"
          />
        </div>
        <div className="carousel__cell">
          <img
            src={require("../assets/home_decor3.jpg")}
            alt="Slide 3"
            className="carousel__image"
          />
        </div>
        <div className="carousel__cell">
          <img
            src={require("../assets/home_decor4.jpg")}
            alt="Slide 4"
            className="carousel__image"
          />
        </div>
        <div className="carousel__cell">
          <img
            src={require("../assets/home_decor5.jpg")}
            alt="Slide 5"
            className="carousel__image"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
