import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./index.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (currentIndex) => {
    const newRating = currentIndex === rating ? 0 : currentIndex;
    setRating(newRating);
  };

  const handleMouseEnter = (currentIndex) => {
    setHover(currentIndex);
  };

  const handleMouseLeave = () => {
    setHover(0); // Reset hover state
  };

  return (
    <div className="star-rating-container">
      <a href={"url"} target="_blank" rel="noopener noreferrer">
        <h1 className="header star-title">Star Rating</h1>
      </a>
      <ul className="stars-list">
        {[...Array(noOfStars)].map((_, index) => {
          const currentIndex = index + 1;
          return (
            <FaStar
              size={72}
              style={{ margin: "5px" }}
              key={currentIndex}
              className={
                currentIndex <= (hover || rating) ? "active" : "inactive"
              }
              onClick={() => handleClick(currentIndex)}
              onMouseEnter={() => handleMouseEnter(currentIndex)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </ul>
    </div>
  );
}
