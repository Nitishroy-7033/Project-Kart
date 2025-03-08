import { Col, Layout, Row, Space } from "antd";
import "../../App.css";
import "./style.css";
import { useParams } from "react-router-dom";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import ProductDetailsWidget from "./widgets/productDetailsSide"
import ProductDetailsImageCrousel from "./widgets/productDetailsImageCrousel";
const ProductDetails = () => {
  const { productId, productTitle } = useParams();
  const product = {
    id: 5,
    name: "Product 5",
    price: 0,
    imageUrls: [
      "https://th.bing.com/th/id/OIP.qFLJlBnH2xkl508yedA9pQHaFS?w=1600&h=1141&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.qFLJlBnH2xkl508yedA9pQHaFS?w=1600&h=1141&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.qFLJlBnH2xkl508yedA9pQHaFS?w=1600&h=1141&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.qFLJlBnH2xkl508yedA9pQHaFS?w=1600&h=1141&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.qFLJlBnH2xkl508yedA9pQHaFS?w=1600&h=1141&rs=1&pid=ImgDetMain",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f8db9894200401.5e78f0e37d1e4.png",
    ],
    isTranding: true,
    ratings: 4.5,
    reviews: 100,
    sortDescription: "This is a product",
    isLiked: false,
  };
  return (
    <Layout className="body-container">
      <br></br>
      <br></br>
      <br></br>

      <Row justify="space-between">
        <Col className="product-image-box" md={7} lg={7} xl={7} xxl={12}>
          <img className="product-image" src={product.imageUrls[0]} />
          <ProductDetailsImageCrousel images={product.imageUrls} />
        </Col>

    <ProductDetailsWidget/>
      </Row>
    </Layout>
  );
};

export default ProductDetails;
