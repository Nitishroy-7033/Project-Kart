import { Button, Col, Row } from "antd";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import "./style.css"
const ProductCard = ({ product , onClick }) => {
    // const priceColor = product.price === 0 ? theme.greenColor : theme.text;
    
    return (
      <Col onClick={onClick} key={product.id} md={9} lg={8} xl={9} xxl={8} >
        <div
        className="product-card"
          style={{
            textAlign: "center",
            borderRadius: "8px",
            overflow: "hidden",
            cursor:"pointer"
          }}
        >
          <img
            src={product.imageUrls?.[0] || "/placeholder.jpg"}
            alt={product.name || "Product Image"}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
            }}
          />
          <Col style={{ padding: "15px" }}>
            <Row>
              <span
                className="categroy-box"
              >
                MOBILE APP
              </span>
            </Row>
  
            <Row
                className="product-title"
            >
              {/* {product.name || "Untitled Product"} */}
              New project launch please check smart cart parking solution
            </Row>
  
            <Row align="middle" justify="space-between" style={{ marginTop: "10px" }}>
              <Row align="middle">
                <FaRupeeSign size={20} />
                <span className="product-price"
                >
                  {product.price === 0 ? "Free" : product.price}
                </span>
              </Row>
              <Button className="squre-button"   icon={<MdOutlineAddShoppingCart />} />
             
              {/* <IconButton icon={<MdOutlineAddShoppingCart size={23} />}  /> */}
            </Row>
          </Col>
        </div>
      </Col>
    );
  };
  
  export default ProductCard;