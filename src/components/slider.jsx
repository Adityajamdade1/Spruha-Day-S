import React from "react";
import { Carousel } from "react-bootstrap";

function Slider() {
  // Common style for all carousel items
  const carouselItemStyle = {
    height: "35vh", // Smaller height for mobile (reduced from 50vh)
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5" // Fallback color
  };

  // Style for images
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center"
  };

  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <div style={{
          ...carouselItemStyle,
          ...window.innerWidth >= 768 && { height: "60vh" }, // Slightly reduced from 70vh
          ...window.innerWidth >= 1200 && { height: "80vh", maxHeight: "700px" } // Reduced from 90vh/800px
        }}>
          <img
            style={imageStyle}
            src="https://www.julacare.com/wp-content/uploads/elementor/thumbs/Home-Slide-2-1-q5yobfnm6vr4289yeas37i6ospxne16s23d0j3uhig.jpg"
            alt="Healthcare services"
          />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div style={{
          ...carouselItemStyle,
          ...window.innerWidth >= 768 && { height: "60vh" },
          ...window.innerWidth >= 1200 && { height: "80vh", maxHeight: "700px" }
        }}>
          <img
            style={imageStyle}
            src="https://www.julacare.com/wp-content/uploads/elementor/thumbs/Home-Slide-5-1-q5yobdrxt7ojf0cop9yu2inrly6wymzbdu21kjx9uw.jpg"
            alt="Professional care team"
          />
        </div>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <div style={{
          ...carouselItemStyle,
          ...window.innerWidth >= 768 && { height: "60vh" },
          ...window.innerWidth >= 1200 && { height: "80vh", maxHeight: "700px" }
        }}>
          <img
            style={imageStyle}
            src="https://images.onlymyhealth.com/imported/images/2023/January/18_Jan_2023/main-sanitary-pads-cancer-risk.jpg"
            alt="Health awareness"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;