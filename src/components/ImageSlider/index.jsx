import React, { useState } from "react";
import "./index.css";

const imagesList = [
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  "https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg",
  "https://sb.kaleidousercontent.com/67418/960x550/d1e78c2a25/individuals-a.png",
];

export default function ImageSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToPreviousSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? imagesList.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === imagesList.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="image-slider-container">
      <a href={"url"} target="_blank" rel="noopener noreferrer">
        <h1 className="header">Image Slider</h1>
      </a>
      <div className="slider-container">
        <button className="slide-left-button" onClick={goToPreviousSlide}>
          {"<"}
        </button>
        <img
          src={imagesList[activeSlide]}
          alt={`Slide ${activeSlide + 1}`}
          className="slide"
        />
        <button className="slide-right-button" onClick={goToNextSlide}>
          {">"}
        </button>
      </div>
    </div>
  );
}
