import { Breadcrumb, Col, Image, Layout, Row } from "antd";
import { useTheme } from "../../context/theme/ThemeContext";
import { useState } from "react";
import { BiStar } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
import useResponsiveStyles from "../../context/useResponsiveStyles";
import ProductDetailsWidget from "./widgets/leftSideProductDetails";
import ProductDescriptionWidget from "./widgets/productDescriptionWidget";
import RelatedProductWidget from "./widgets/relatedProductWidget";

const ProductDetails = () => {
  const screenSize = useResponsiveStyles();
  const { theme } = useTheme();

  const padding = theme.layout.padding[screenSize];
  const width = theme.layout.width[screenSize];
  const techColors = [
    "#f34f29",
    "#3572A5",
    "#563d7c",
    "#E34C26",
    "#2b7489",
    "#555555",
    "#4F5D95",
    "#ffcc00",
    "#00ADD8",
    "#7F52FF",
  ];
  const product = {
    id: 1,
    name: "Smart Car Parking System - ( Flutter + Getx + Firebase )",
    price: 100,
    imageUrls: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://www.eatthis.com/wp-content/uploads/sites/4/2023/06/cushioned-running-shoes.jpg?quality=82&strip=all&w=640",
      "https://d2v5dzhdg4zhx3.cloudfront.net/adminTemplate/404c6038b0f745f3aab928bb7ab52173.jpg",
    ],
    isTrending: true,
    ratings: 4.5,
    reviews: 100,
    shortDescription: "This is a product",
    isLiked: false,
    technologyStack: [
      "Flutter",
      "Getx",
      "Firebase",
      "Google Map",
      "Razor Pay",
      "Getx",
      "Firebase",
      "Google Map",
      "Razor Pay",
      "Getx",
      "Firebase",
      "Google Map",
      "Razor Pay",
      "Notification",
    ],
    features: [
      "User Authenticaton ",
      "User Profile",
      "CCTV Camera Footage",
      "Payment Gateway",
      "Booking",
      "Notification",
      "Admin Panel",
      "User Panel",
      "User Dashboard",
    ],
  };

  const [selectedImageUrl, setSelectedImageUrl] = useState(
    product.imageUrls[0]
  );

  return (
    <Layout
      style={{
        padding: "20px 150px",
        background: theme.background,
      }}
    >
      <Breadcrumb
        items={[
          { href: "", title: "Home" },
          { href: "", title: <span>Application List</span> },
          { title: "Application" },
        ]}
      />
      <Row justify="space-between" style={{
        marginTop: "20px",
      }} >
        <Col
          align="middle"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
          style={{
            border:`1px solid ${theme.borderColor}`,
            paddingTop: "15px",
            borderRadius: "10px",
          }}
        >
          <Image
            style={{
              borderRadius: "10px",
              objectFit: "cover",
            }}
            width={"95%"}
            height={"750px"}
            src={selectedImageUrl}
          />
          <Row
            justify="center"
            style={{ width: "90%", gap: "10px", padding: "20px 0px" }}
          >
            {product.imageUrls.map((e, index) => (
              <Image
                key={index}
                onClick={() => setSelectedImageUrl(e)}
                preview={false}
                style={{
                  border: selectedImageUrl === e ? "2px solid blue" : null,
                  objectFit: "cover",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                width={100}
                height={100}
                src={e}
              />
            ))}
          </Row>
        </Col>

        {/* Right Section - Product Details */}
        <ProductDetailsWidget />
        
      </Row>
      <br></br>
      {/* <hr></hr> */}
        
        <ProductDescriptionWidget/>
      <br></br>
      <div style={{ fontSize: "20px", fontWeight: "600", color: theme.text }}>
        Related Product
      </div>
      <div style={{ fontSize: "15px", fontWeight: "400", color: theme.lableColor }}>
        These all are the related products of the above product
      </div>
      <br></br>
      <RelatedProductWidget/>
    </Layout>
  );
};

export default ProductDetails;
