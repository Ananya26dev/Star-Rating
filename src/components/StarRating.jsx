import React from "react";
import { useState } from "react";

const StarRating = ({ starCount }) => {
  const [starValue, setStarValue] = useState();
  const [hoverValue, setHoverValue] = useState(0);
  return (
    <div className="container">
      {new Array(starCount).fill(0).map((value, index) => {
        return (
          <span
            key={index}
            onClick={() => setStarValue(index + 1)}
            onMouseEnter={() => setHoverValue(index + 1)}
            onMouseLeave={() => setHoverValue(0)}
            className={` ${index < (hoverValue || starValue) ? "gold" : ""}`}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
