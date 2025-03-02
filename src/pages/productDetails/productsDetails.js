import { Breadcrumb, Col, Image, Layout, Row } from "antd";
import { useParams } from "react-router-dom";
import { useTheme } from "../../context/theme/ThemeContext";
import { useState } from "react";
import { BiStar } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";

const ProductDetails = () => {
  var product = {
    id: 1,
    name: "Product 1",
    price: 100,
    imageUrls: [
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://www.eatthis.com/wp-content/uploads/sites/4/2023/06/cushioned-running-shoes.jpg?quality=82&strip=all&w=640",
      "https://d2v5dzhdg4zhx3.cloudfront.net/adminTemplate/404c6038b0f745f3aab928bb7ab52173.jpg",
      "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
      "https://www.eatthis.com/wp-content/uploads/sites/4/2023/06/cushioned-running-shoes.jpg?quality=82&strip=all&w=640",
      "https://d2v5dzhdg4zhx3.cloudfront.net/adminTemplate/404c6038b0f745f3aab928bb7ab52173.jpg",
    ],
    isTranding: true,
    ratings: 4.5,
    reviews: 100,
    sortDescription: "This is a product",
    isLiked: false,
  };
  const [selectedImageUrl, setSelectedImageUrl] = useState(
    product.imageUrls[0]
  );
  const { productId } = useParams();
  const { theme, toggleTheme } = useTheme();
  return (
    <Layout
      style={{
        padding: "20px",
        height: "100vh",
        background: theme.background,
      }}
    >
      <Breadcrumb
        items={[
          {
            href: "",
            title: "Home",
          },
          {
            href: "",
            title: (
              <>
                {/* <UserOutlined /> */}
                <span>Application List</span>
              </>
            ),
          },
          {
            title: "Application",
          },
        ]}
      />
      <br></br>
      <Row justify={"end"}>
        <Col
          align="center"
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
          style={{
            padding: "20px",
          }}
        >
          <Image
            style={{
              borderRadius: "20px",
              objectFit: "cover",
            }}
            width={"95%"}
            height={"800px"}
            src={selectedImageUrl}
          />
          <Row
            justify={"center"}
            style={{
              width: "80%",
              gap: "10px",
              padding: "20px 0px",
            }}
          >
            {product.imageUrls.map((e, index) => (
              <Image
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
        <Col
          align={"start"}
          justify={"start"}
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          xxl={12}
          style={{
            padding: "20px",
          }}
        >
          <h1>{product.name}</h1>
          <Row
            style={{
              gap: "10px",
            }}
          >
            <BiStar size={20} color="orange" />
            <BiStar size={20} color="orange" />
            <BiStar size={20} color="orange" />
            <BiStar size={20} color="orange" />
            <BiStar size={20} color="orange" />
            <div
              style={{
                fontSize: "18px",
              }}
            >
              {product.ratings}({product.reviews}+ Reviews)
            </div>
          </Row>

          <Row
            align={"middle"}
            style={{
              marginTop:"10px",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            <FaRupeeSign /> {product.price}/-
          </Row>
        </Col>
      </Row>
    </Layout>
  );
};

export default ProductDetails;
