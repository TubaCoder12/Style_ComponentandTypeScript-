import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";

const Stars: React.FC<{ rating: number }> = ({ rating }) => {
  if (rating == null) return null;

  const fullStars = Math.floor(rating); // ⭐ count
  const halfStar = rating % 1 >= 0.5;   // half ⭐
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <span style={{ color: "orange", fontSize: "1.2rem", display: "inline-flex", gap: "2px" }}>
      {/* Full Stars */}
      {Array.from({ length: fullStars }).map((_, i) => (
        <IoStar key={`full-${i}`} />
      ))}

      {/* Half Star */}
      {halfStar && <FaStarHalfAlt key="half" />}

      {/* Empty Stars */}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </span>
  );
};

export default Stars;
