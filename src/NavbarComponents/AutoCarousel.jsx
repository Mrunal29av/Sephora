import React, { useEffect, useState } from "react";
import "./AutoCarousel.css";

const AutoCarousel = ({ images, interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="auto-carousel">
      <img
        className="carousel-image"
        src={images[index]}
        alt={`carousel-${index}`}
      />
    </div>
  );
};

export default AutoCarousel;
