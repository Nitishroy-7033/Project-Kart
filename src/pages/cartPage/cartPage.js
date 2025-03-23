import { IoClose } from "react-icons/io5";
import "./style.css";
import { CgAdd, CgRemove } from "react-icons/cg";
import { MdDone } from "react-icons/md";
import { BiMinus, BiPlus, BiRupee } from "react-icons/bi";
import { useSelector } from "react-redux";
const { Layout, message, Row, Col, Divider, Button, Space } = require("antd");
const CartPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { cartItems } = useSelector((state) => state.cart);
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

  return (
    <Layout
      className="body-container"
      style={{
        minHeight: "100vh",
      }}
    >
      {contextHolder}
      <br></br>
      <br></br>
      <br></br>
      <Row
        justify={"space-between"}
        style={{
          gap: "10px",
        }}
      >
        <Col sm={15} className="cart-item-box">
          <Row className="body-heading">Cart Items</Row>
          <Divider />
          <Col>
            {cartItems.map((e) => (
              <Row
                align={"middle"}
                justify={"space-between"}
                style={{
                  paddinge: "10px",
                  marginBottom: "10px",
                  backgroundColor: "var(--light-color)",
                }}
              >
                <Row>
                  <img
                    style={{
                      width: "70px",
                      height:"70px"
                    }}
                    src={""}
                  />
                  <Col
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    <Row
                      style={{
                        fontSize: "18px",
                      }}
                    >
                      {e.title}
                    </Row>
                    <Row
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                      }}
                    >
                      ${e.finalPrice}
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <div className="icon-button-my">
                    <CgRemove />
                  </div>
                </Row>
              </Row>
            ))}
            <Row>
              <Button
                className="primary-button"
                icon={<MdDone />}
                type="primary"
              >
                CONTINUE
              </Button>
            </Row>
          </Col>
        </Col>
        <Col sm={8} className="cart-calculation-box">
          <Row className="body-heading ">Price details</Row>
          <Divider />
          <Row justify={"space-between"} className="vertical-margin-5">
            <div className="lable-heading">MRP Price</div>
            <Row align={"middle"  } className="lable-heading">
              <BiRupee />
              300.00
            </Row>
          </Row>
          <Row justify={"space-between"} className="vertical-margin-5">
            <div className="lable-body">Discounts</div>
            <Row align={"middle"  } className="lable-heading">
              <BiMinus />
              300.00
            </Row>
          </Row>
          <Row justify={"space-between"} className="vertical-margin-5">
            <div className="lable-body">Delivery price</div>
            <div>
              <BiPlus />
              100.00
            </div>
          </Row>
          <Row justify={"space-between"} className="vertical-margin-5">
            <div className="lable-body">Platform fee</div>
            <Row align={"middle"  } className="lable-heading">
              <BiPlus />
              00.00
            </Row>
          </Row>
          <Divider />
          <Row justify={"space-between"} className="vertical-margin-5">
            <div className="lable-heading">Total Amount</div>
            <Row align={"middle"  } className="lable-heading">
              <BiRupee />
              300.00
            </Row>
          </Row>
          <Divider />
          <Row justify={"center"}>You will save ₹149 on this order</Row>
          <br></br>
          <Row>
            <Button className="primary-button" icon={<MdDone />} type="primary">
              CONTINUE
            </Button>
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default CartPage;
