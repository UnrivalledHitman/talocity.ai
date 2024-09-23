import React, { useState, useEffect } from "react";
import "./client-carousel.styles.scss";

const CarouselComponent = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 5;
  const [animating, setAnimating] = useState(false); // To control animation state

  useEffect(() => {
    // Dynamically import all images from the folder
    const importImages = import.meta.glob("../../../public/client-carousel/*.png");
    const loadImages = async () => {
      const imagePaths = await Promise.all(
        Object.values(importImages).map(async (image) => await image())
      );
      setImages(imagePaths.map((imgModule) => imgModule.default));
    };
    loadImages();
  }, []);

  const nextSlide = () => {
    if (!animating) {
      setAnimating(true);
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + imagesPerSlide, images.length - imagesPerSlide)
      );
    }
  };

  const prevSlide = () => {
    if (!animating) {
      setAnimating(true);
      setCurrentIndex((prevIndex) => Math.max(prevIndex - imagesPerSlide, 0));
    }
  };

  // Reset animation state after the transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 600); // Match this timing with CSS transition duration

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div
      id="imageCarousel"
      className={`carousel slide ${animating ? "animating" : ""}`}
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-flex justify-content-around">
            {images
              .slice(currentIndex, currentIndex + imagesPerSlide)
              .map((image, index) => (
                <img
                  key={currentIndex + index}
                  src={image}
                  className="carousel-image"
                  alt={`Slide ${currentIndex + index + 1}`}
                />
              ))}
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={prevSlide}
        disabled={currentIndex === 0 || animating} // Disable during animation
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={nextSlide}
        disabled={currentIndex >= images.length - imagesPerSlide || animating}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
