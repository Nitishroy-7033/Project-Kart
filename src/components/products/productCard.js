import { FaRupeeSign } from "react-icons/fa";
import { useTheme } from "../../context/theme/ThemeContext";
import { Col, Row } from "antd";
import IconButton from "../iconButton";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ProductCard = ({ product }) => {
    const {theme} = useTheme();
    return <Col
    key={product.id}
    xs={24} 
    sm={12}
    md={8}
    lg={6} 
    xl={6}
    xxl={6}

  >
    <div
      style={{
        border: `1px solid ${theme.borderColor}`,
        background: "#fff",
        textAlign: "center",
      }}
    >
      <img
        src={product.imageUrls[0]}
        alt="product"
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
            width: "100%",
          }}
        >
          Android app with AI integrated ( Flutter + Getx ){" "}
        </Row>

        <Row
        align={"middle"}
        justify={"space-between"}
          style={{
            marginTop: "10px",
           
          }}
        >
          <Row
          align={"middle"}
          > <FaRupeeSign size={20} color={theme.lableColor} /><span
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: theme.lableColor,
            fontSize: "18px",
            fontWeight: "600",
          }}
          > $100</span></Row>
          <IconButton icon={<MdOutlineAddShoppingCart  size={23} />} color={theme.primary} />
        </Row>
      </Col>
    </div>
  </Col>

}

export default ProductCard;