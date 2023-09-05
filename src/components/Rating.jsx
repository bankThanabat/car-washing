import React, { useState } from "react";

const Star = ({ selected, onClick }) => (
  <span className={selected ? "text-red-500" : "star"} onClick={onClick}>
    ★
  </span>
);

const StarRating = ({ totalStars }) => {
  const [rating, setRating] = useState(5);

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          selected={index < rating}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

export default function Rating() {
  return (
      <StarRating totalStars={5} />
  );
}
