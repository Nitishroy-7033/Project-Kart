import { useTheme } from "../../../context/theme/ThemeContext";
const { Carousel } = require("antd");

const HomeHeroBanner = () => {
  const { theme } = useTheme();

  const bannerUrl = [
    "https://static.vecteezy.com/system/resources/previews/000/689/024/large_2x/artificial-intelligence-robot-technology-vector.jpg",
    "https://content.wepik.com/statics/111987164/preview-page0.jpg",
    "https://img.freepik.com/premium-vector/artificial-intelligence-technology-concept-data-engineering-concept-isometric_82984-670.jpg?w=826",
    "https://scnafrica.com/wp-content/uploads/2023/05/AI-vector-image.webp"
  ]

  const imageStyle = {
    width: "100%",
    height: "600px",
    borderRadius: "10px",
    objectFit: "cover", 
  };

  return (
    <Carousel autoplay arrows effect="scrollx" >
     {
        bannerUrl.map((url, index) => (
            <div >
            <img
              style={imageStyle}
              src={url}
              alt="Hero Banner"
            />
          </div>
        ))
     }
      
    </Carousel>
  );
};

export default HomeHeroBanner;
