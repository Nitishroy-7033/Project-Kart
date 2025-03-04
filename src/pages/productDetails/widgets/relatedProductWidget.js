import { Col, Row } from "antd";
import { useTheme } from "../../../context/theme/ThemeContext";
import IconButton from "../../../components/iconButton";
import { CgAdd } from "react-icons/cg";
import { MdOutlineAddShoppingCart } from "react-icons/md";
const RelatedProductWidget = () => {
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
    }
   
  ];

  const { theme } = useTheme();
  return (
    <Row gutter={[20, 30]}>
      {products.map((product) => (
        <Col
          key={product.id}
          xs={24} /* Full width on extra small screens */
          sm={12} /* 2 items per row on small screens */
          md={8} /* 3 items per row on medium screens */
          lg={6} /* 4 items per row on large screens */
          xl={6}
          xxl={6}
        >
          <div
            style={{
              border: "1px solid #e0e0e0",
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
                  fontSize: "18px",
                  fontWeight: "600",
                  color: theme.lableColor,
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                <span> $100</span>
                <IconButton icon={<MdOutlineAddShoppingCart  size={23} />} color={theme.primary} />
              </Row>
            </Col>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default RelatedProductWidget;
