
import "../style.css";
import React, { useRef } from "react";
import { Row } from "antd";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi"; // Importing arrows from react-icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const ProductDetailsImageCrousel = ({ images }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -120, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 120, behavior: "smooth" });
    }
  };

  return (
    <Row align="middle" justify="center" gutter={[16, 16]}>
      <div className="arrow-button" onClick={scrollLeft}>
      <FiChevronLeft />
      </div>
      <div className="image-container" ref={scrollContainerRef}>
        {images.map((imageUrl, index) => (
          <div key={index} className="image-item">
            {/* You can replace this with an <img> tag to show actual images */}
            <img src={imageUrl} alt={`product-image-${index}`} style={{ width: "100%", height: "100%" }} />
          </div>
        ))}
      </div>
      <div className="arrow-button" onClick={scrollRight}>
      <FiChevronRight />
      </div>
    </Row>
  );
};

export default ProductDetailsImageCrousel;
