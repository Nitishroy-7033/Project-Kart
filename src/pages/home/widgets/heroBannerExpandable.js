import { useState } from "react";
import { Row } from "antd";
import "../../../styles/homeStyle.css";
import { useTheme } from "../../../context/theme/ThemeContext";

const HeroBannerExpandable = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // First box expanded by default
  const { theme } = useTheme();
  const imageData = [
    {
      title: "Image 1",
      price: "1234",
      description: "Description 1",
      image: "https://img.freepik.com/premium-psd/furniture-sale-social-media-instagram-post-template-banner-flyer_569266-51.jpg",
    },
    {
      title: "Image 2",
      price: "1234",
      description: "Description 2",
      image: "https://i.ytimg.com/vi/yyImq-gmDWQ/maxresdefault.jpg",
    },
    {
      title: "Image 3",
      price: "1234",
      description: "Description 3",
      image: "https://img.freepik.com/premium-psd/furniture-sale-social-media-instagram-post-template-banner-flyer_569266-51.jpg",
    },
    {
      title: "Image 5",
      price: "1234",
      description: "Description 5",
      image: "https://img.freepik.com/premium-psd/fashion-instagram-post-banner-template_65983-1143.jpg",
    },
    {
      title: "Image 5",
      price: "1234",
      description: "Description 5",
      image: "https://static.vecteezy.com/system/resources/previews/001/921/891/non_2x/square-banner-templates-for-interior-design-free-vector.jpg",
    },
    {
      title: "Image 5",
      price: "1234",
      description: "Description 5",
      image: "https://static.vecteezy.com/system/resources/previews/001/921/891/non_2x/square-banner-templates-for-interior-design-free-vector.jpg",
    },
    {
      title: "Image 5",
      price: "1234",
      description: "Description 5",
      image: "https://img.freepik.com/premium-psd/furniture-sale-social-media-instagram-post-template-banner-flyer_569266-51.jpg?w=360",
    },
  ];

  return (
    <Row
      justify={"center"}
      style={{
        height: "400px",
      }}
      className="homeBannerContainer"
    >
      {imageData.map((item, index) => (
        <div
          onClick={() => setExpandedIndex(index)} 
          style={{
           backgroundImage: `url(${item.image})`,
            background: theme.container,
          }}
          key={index}
          className={`homeBannerExpandable ${
            expandedIndex === index ? "expanded" : ""
          }`}
          onMouseEnter={() => setExpandedIndex(index)}
          
        >
       
        </div>
      ))}
    </Row>
  );
};

export default HeroBannerExpandable;
