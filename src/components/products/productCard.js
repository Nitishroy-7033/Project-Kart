import { FaRupeeSign } from "react-icons/fa";
import { useTheme } from "../../context/theme/ThemeContext";
import { Col, Row } from "antd";
import IconButton from "../iconButton";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ProductCard = ({ product , onClick }) => {
  const { theme } = useTheme();
  const priceColor = product.price === 0 ? theme.greenColor : theme.text;
  
  return (
    <Col onClick={onClick} key={product.id} xs={24} sm={12} md={8} lg={6} xl={6} xxl={6}>
      <div
        style={{
          border: `1px solid ${theme.borderColor}`,
          background: "#fff",
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
              style={{
                backgroundColor: theme.primary,
                fontSize: "12px",
                fontWeight: "500",
                padding: "2px 10px",
                color: theme.background,
                borderRadius: "4px",
              }}
            >
              MOBILE APP
            </span>
          </Row>

          <Row
            style={{
              marginTop: "10px",
              fontSize: "18px",
              fontWeight: "600",
              textAlign: "left",
              color: theme.text,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "100%",
            }}
          >
            {product.name || "Untitled Product"}
          </Row>

          <Row align="middle" justify="space-between" style={{ marginTop: "10px" }}>
            <Row align="middle">
              <FaRupeeSign size={20} color={product.price===0 ? theme.greenColor : theme.text} />
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: priceColor,
                  marginLeft: "5px",
                }}
              >
                {product.price === 0 ? "Free" : product.price}
              </span>
            </Row>
            <IconButton icon={<MdOutlineAddShoppingCart size={23} />} color={theme.primary} />
          </Row>
        </Col>
      </div>
    </Col>
  );
};

export default ProductCard;
