import React, { useState, useEffect } from "react";
import "./customSlider.scss";

const CustomSlider = () => {
  const images = [
    "/green-left.png",
    "/Group 34379.png",
    "/purple-left.png",
    "/second-right-ser.png",
    "/orange-left.png",
    "/third-right-ser.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevClicked, setPrevClicked] = useState(false); // State to track click on previous arrow
  const [nextClicked, setNextClicked] = useState(false); // State to track click on next arrow

  // Preload images when the component mounts
  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = images.map((imageUrl) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = imageUrl;
          image.onload = resolve;
          image.onerror = reject;
        });
      });
      Promise.all(imagePromises)
        .then(() => {
          console.log("All images loaded successfully!");
        })
        .catch((error) => {
          console.error("Failed to load images:", error);
        });
    };

    preloadImages();
  }, [images]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 2 ? 0 : prevIndex + 2
    );
    setNextClicked(true); // Set next arrow clicked
    setPrevClicked(false); // Reset previous arrow clicked
    setTimeout(() => {
      setNextClicked(false); // Reset next arrow clicked after a short delay
    }, 500);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 2 : prevIndex - 2
    );
    setPrevClicked(true); // Set previous arrow clicked
    setNextClicked(false); // Reset next arrow clicked
    setTimeout(() => {
      setPrevClicked(false); // Reset previous arrow clicked after a short delay
    }, 500);
  };

  return (
    <div className="mobile-home-page">
      <div className="custom-slider">
        <div className="slides">
          <div className="slide" style={{ opacity: 1 }}>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          </div>
          <div className="slide" style={{ opacity: 1 }}>
            <img
              src={images[currentIndex + 1]}
              alt={`Slide ${currentIndex + 2}`}
            />
          </div>
        </div>
        <div className="arrow-icons">
          <div className="arrow-left" onClick={prevSlide}>
            <div className={`circle ${prevClicked ? 'clicked' : ''}`}>
              <img src="/arrow-right.png" alt="Previous" className="arrow-image" />
            </div>
          </div>
          <div className="arrow-right" onClick={nextSlide}>
            <div className={`circle ${nextClicked ? 'clicked' : ''}`}>
              <img src="/arrow-right.png" alt="Next" className="arrow-image arrow-left-mobile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
