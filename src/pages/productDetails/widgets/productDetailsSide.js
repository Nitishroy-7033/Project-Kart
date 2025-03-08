import { Button, Col, Row, Space } from "antd";
import { BiStar } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
import { FiHeart, FiPhoneCall, FiShoppingCart, FiSmile, FiStar } from "react-icons/fi";

const ProductDetailsWidget = ({ productDetails }) => {
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

  return (
    <Col
      align="start"
      className="product-list"
      md={14}
      lg={14}
      xl={14}
      xxl={12}
    >
      <Space
      style={{
        fontSize:"30px",
        fontWeight:"500"
      }}
      >{product.name}</Space>

      <Row justify={"space-between"} align={"middle"}>
      <Row style={{ gap: "5px" }}>
        <FiStar size={"25"} />
        <FiStar size={"25"} />
        <FiStar size={"25"} />
        <FiStar size={"25"} />
        <FiStar size={"25"} />
        <div
          style={{
            fontSize: "15px",
            fontWeight: "500",
          }}
        >
          {product.ratings} ({product.reviews}+ Reviews)
        </div>
      </Row>
      <div  className="squre-button">
          <FiHeart/>

      </div>
        </Row>

      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Row align={"middle"} style={{ gap: "10px" }}>
            <FaRupeeSign size={50} />{" "}
            <span
              style={{
                fontSize: "45px",
                fontWeight: "bold",
              }}
            >
              {product.price}/-
            </span>
          </Row>
          <Row
            style={{
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            M.R.P. : <del> Rs. 2000</del>
          </Row>
        </Col>
      </Row>
      <p>
        This is a most importaint product that will provide you parking space
        where you want you can book your parking space and pay online. and from
        anywhere you can book your parking space. This is a most importaint
        product that will provide you parking space where you want you can book
        your parking space and pay online. and from anywhere you can book your
        parking space.
      </p>

      <br></br>

      <div>Features</div>
      <Row>
        {/* Left Column */}
        <Col span={12}>
          {product.features
            .slice(0, Math.ceil(product.features.length / 2))
            .map((feature, index) => (
              <Row
                align="middle"
                key={index}
                style={{
                  gap: "10px",
                  padding: "10px 0px",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    backgroundColor:"var(--primary-color)"
                  }}
                ></div>
                {feature}
              </Row>
            ))}
        </Col>

        {/* Right Column */}
        <Col span={12}>
          {product.features
            .slice(Math.ceil(product.features.length / 2))
            .map((feature, index) => (
              <Row
                align="middle"
                key={index}
                style={{
                  gap: "10px",
                  padding: "10px 0px",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    backgroundColor:"var(--primary-color)"
                  }}
                ></div>
                {feature}
              </Row>
            ))}
        </Col>
      </Row>

      <br></br>

      <div>Technology Stack</div>
      <Row style={{ display: "flex", flexWrap: "wrap" }}>
        {product.technologyStack.map((tech, index) => (
          <Row
            align="middle"
            key={index}
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "calc(20% - 10px)",
              gap: "10px",
              padding: "10px 0px",
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            <div
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                background: techColors[index % techColors.length],
              }}
            ></div>
            {tech}
          </Row>
        ))}
      </Row>
      <br></br>
      <Row align={"middle"} style={{ gap: "20px" }}>
       <Button className="buy-button"> <FiSmile size={25} color="yellow" /> Buy Now</Button>
       <Button className="add-to-cart-button"><FiShoppingCart size={20} />  Add To Cart</Button>
       <div className="icon-button"> <FiPhoneCall /></div>
      </Row>
    </Col>
  );
};

export default ProductDetailsWidget;
