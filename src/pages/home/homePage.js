import { useSelector, useDispatch } from "react-redux";
import {
  setHomeData,
  setName,
  setAge,
  incrementCount,
} from "../../context/reducers/homeSlice";
import { FaRupeeSign } from "react-icons/fa";
import { useState } from "react";
import { Button, Card, Col, FloatButton, Layout, List, Row } from "antd";
import HomeHeroBanner from "./widgets/heroBanner";
import { useTheme } from "../../context/theme/ThemeContext";
import HeroBannerExpandable from "./widgets/heroBannerExpandable";
import CircleCartButton from "../../components/cartButtons/circleCartButton";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/products/productCard";

const HomePage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [isGridView, setIsGridView] = useState(false);
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      imageUrls: [
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      ],
      isTranding: true,
      ratings: 4.5,
      reviews: 100,
      sortDescription: "This is a product",
      isLiked: false,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      imageUrls: [
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      ],
      isTranding: true,
      ratings: 4.5,
      reviews: 100,
      sortDescription: "This is a product",
      isLiked: false,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      imageUrls: [
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      ],
      isTranding: true,
      ratings: 4.5,
      reviews: 100,
      sortDescription: "This is a product",
      isLiked: false,
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      imageUrls: [
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      ],
      isTranding: true,
      ratings: 4.5,
      reviews: 100,
      sortDescription: "This is a product",
      isLiked: false,
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      imageUrls: [
        "https://th.bing.com/th/id/OIP.qFLJlBnH2xkl508yedA9pQHaFS?w=1600&h=1141&rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.qFLJlBnH2xkl508yedA9pQHaFS?w=1600&h=1141&rs=1&pid=ImgDetMain",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f8db9894200401.5e78f0e37d1e4.png",
      ],
      isTranding: true,
      ratings: 4.5,
      reviews: 100,
      sortDescription: "This is a product",
      isLiked: false,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      imageUrls: [
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      ],
      isTranding: true,
      ratings: 4.5,
      reviews: 100,
      sortDescription: "This is a product",
      isLiked: false,
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      imageUrls: [
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      ],
      isTranding: true,
      ratings: 4.5,
      reviews: 100,
      sortDescription: "This is a product",
      isLiked: false,
    },
    {
      id: 5,
      name: "Product 5",
      price: 500,
      imageUrls: [
        "https://th.bing.com/th/id/OIP.qFLJlBnH2xkl508yedA9pQHaFS?w=1600&h=1141&rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.qFLJlBnH2xkl508yedA9pQHaFS?w=1600&h=1141&rs=1&pid=ImgDetMain",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f8db9894200401.5e78f0e37d1e4.png",
      ],
      isTranding: true,
      ratings: 4.5,
      reviews: 100,
      sortDescription: "This is a product",
      isLiked: false,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      imageUrls: [
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      ],
      isTranding: true,
      ratings: 4.5,
      reviews: 100,
      sortDescription: "This is a product",
      isLiked: false,
    },
    {
      id: 4,
      name: "Product 4",
      price: 400,
      imageUrls: [
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      ],
      isTranding: true,
      ratings: 4.5,
      reviews: 100,
      sortDescription: "This is a product",
      isLiked: false,
    },
    {
      id: 5,
      name: "Product 5",
      price: 0,
      imageUrls: [
        "https://th.bing.com/th/id/OIP.qFLJlBnH2xkl508yedA9pQHaFS?w=1600&h=1141&rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/OIP.qFLJlBnH2xkl508yedA9pQHaFS?w=1600&h=1141&rs=1&pid=ImgDetMain",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f8db9894200401.5e78f0e37d1e4.png",
      ],
      isTranding: true,
      ratings: 4.5,
      reviews: 100,
      sortDescription: "This is a product",
      isLiked: false,
    },
  ];
  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <Layout
      style={{
        background: theme.background,
        padding: "20px 150px",
        minHeight: "100vh",
      }}
    >
      {/* <HeroBannerExpandable /> */}
      <br />
      {/* <br /> */}
      <HomeHeroBanner />
      <br />
      <br />
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <ProductCard onClick={() => handleProductClick(product.id)} product={product} />
        ))}
      </Row>
      <br>
      </br>
     <Row justify={"center"}>
     <Button>Load More</Button>
     </Row>
     <FloatButton.BackTop />
    </Layout>
  );
};

export default HomePage;
