import { useSelector, useDispatch } from "react-redux";
import {
  setHomeData,
  setName,
  setAge,
  incrementCount,
} from "../../context/reducers/homeSlice";
import { FaRupeeSign } from "react-icons/fa";
import { useState } from "react";
import { Button, Card, Col, Layout, List, Row } from "antd";
import HomeHeroBanner from "./widgets/heroBanner";
import { useTheme } from "../../context/theme/ThemeContext";
import HeroBannerExpandable from "./widgets/heroBannerExpandable";
import CircleCartButton from "../../components/cartButtons/circleCartButton";

const HomePage = () => {
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
  ];
  return (
    <Layout
      style={{
        background: theme.background,
        padding: "20px 24px 24px",
        minHeight: "100vh",
      }}
    >
      <HeroBannerExpandable />
      <br />
      <br />
      <HomeHeroBanner />
      <br />
      <br />
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col key={product.id} xl={6} lg={8} md={12} sm={12} xs={24}>
            <Card
              hoverable
              style={{
                background: theme.container,
                color: theme.text,
                border: "none",
              }}
              cover={<img alt={product.name} src={product.imageUrls[0]} />}
            >
              <Row
              align={"middle"}
              justify={"space-between"}>
                <Col>
                  <div
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {product.name}
                  </div>
                  <Row
                    align={"middle"}
                    style={{
                      fontSize: "25px",
                      fontWeight: "700",
                    }}
                  >
                    <FaRupeeSign />
                    {product.price} /-
                  </Row>
                </Col>
               <CircleCartButton borderRadius={"10px"}/>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
      <br>
      </br>
     <Row justify={"center"}>
     <Button>Load More</Button>
     </Row>
    </Layout>
  );
};

export default HomePage;
