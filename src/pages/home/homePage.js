import { Button, Col, Dropdown, Layout, Row, Select, Space } from "antd";
import "./style.css";
import "./../../App.css";
import { useState } from "react";
import ProductCard from "../../components/productCard";
import FooterWidget from "../../components/footerWidget";
import ProductShowCaseTile from "../../components/productShowCaseTile";
import BlogPostCard from "../../components/blogPostCard";
import { useNavigate } from "react-router-dom";
// import { FooterWidget } from "../../components/footerWidget";
const HomePage = () => {
  const [selectedFilter, setSelectedFilter] = useState("assignment");
  const navigate = useNavigate();

  const handleLoadMoreProduct = () => {
    navigate("/products");
  };
  var filterMenu = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Project",
      value: "project",
    },
    {
      label: "Assignment",
      value: "assignment",
    },
    {
      label: "Thesis",
      value: "thesis",
    },
    {
      label: "Research",
      value: "research",
    },
  ];
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

  const blogs = [
    {
      id: "1",
      title:
        "How can you find best blog for me and how you can How can you find best blog for me and how",
      tags: ["Tech", "Android"],
      coverImage:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    },
    {
      id: "2",
      title: "Latest Trends in AI and Machine Learning",
      tags: ["Tech", "AI", "Machine Learning"],
      coverImage:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    },
    {
      id: "3",
      title: "Top 10 Android Apps You Need to Try",
      tags: ["Tech", "Android", "Apps"],
      coverImage:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    },
    {
      id: "4",
      title: "The Future of Cloud Computing",
      tags: ["Tech", "Cloud", "Innovation"],
      coverImage:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    },
    {
      id: "5",
      title: "Blockchain: How It's Changing the World",
      tags: ["Tech", "Blockchain", "Crypto"],
      coverImage:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    },
    {
      id: "6",
      title: "Web Development Trends in 2025",
      tags: ["Tech", "Web Development"],
      coverImage:
        "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
    },
  ];


  const handleProductClick=(product)=>{
    navigate(`/products/${product.id}/${product.name}`);
    // console.log(product.id)
  }
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Row
        style={{
          height: "80vh", // 80% of the viewport height
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          display: "flex",
          justifyContent: "center", // Center the content horizontally
          alignItems: "center", // Center the content vertically
        }}
      >
        <Col
          style={{
            textAlign: "center",
            color: "#fff",
          }}
          xs={24}
          md={24}
          lg={24}
          xl={24}
        >
          <Row justify="center">
            <div className="live-button">
              <div className="circle"></div>
              Contact With Us
            </div>
          </Row>
          <Row justify="center">
            <div className="brand-tagline">
              One stop solution for all Students who{" "}
              <span
                style={{
                  color: "var(--secondary-color)",
                  fontWeight: "bold",
                }}
              >
                need project
              </span>
            </div>
          </Row>
        </Col>
        {/* <Col
          style={{
            textAlign: "center",
            color: "#fff",
            gap: "20px",
          }}
          xs={24}
          md={24}
          lg={24}
          xl={24}
        >
          <Row justify="center">
            <div className="live-button">
              <div className="circle"></div>
              Contact With Us
            </div>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row
            align={"middle"}
            style={{
              gap: "10px",
              fontSize: "40px",
              fontWeight: "700",
              color: "black",
            }}
            justify={"center"}
          >
            BUY PROJECTS <span className="round-home"></span>{" "}
          </Row>
          <Row
            align={"middle"}
            style={{
              color: "black",
              gap: "10px",
              fontSize: "40px",
              fontWeight: "700",
            }}
            justify={"center"}
          >
            <span className="round-home"> </span>That will give{" "}
          </Row>
          <Row
            align={"middle"}
            style={{
              gap: "10px",
              color: "black",
              fontSize: "40px",
              fontWeight: "700",
            }}
            justify={"center"}
          >
            Complete marks in your exam{" "}
          </Row>
        </Col> */}
      </Row>
      <Row className="body-container" justify={"center"}>
        <Space
          style={{
            fontSize: "25px",
            fontWeight: "600",
          }}
        >
          💹 Tranding Products
        </Space>
      </Row>
      <ProductShowCaseTile
        image={
          "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg"
        }
        buttonText={"Read More"}
        description={
          "All in one solution for school college. this is complete solution with Frontend and backend. Backend in dot net and front end in react."
        }
        title={"School Management System"}
        tags={"Tranding+Sell"}
      />
      <ProductShowCaseTile
        isPrimary={false}
        image={
          "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg"
        }
        buttonText={"Read More"}
        description={
          "All in one solution for school college. this is complete solution with Frontend and backend. Backend in dot net and front end in react."
        }
        title={"School Management System"}
        tags={"Tranding+Sell"}
      />

      <Row className="body-container" justify={"center"}>
        <Space
          style={{
            fontSize: "25px",
            fontWeight: "600",
          }}
        >
          All Products 🛒
        </Space>
      </Row>
      <Row className="body-container" style={{ width: "100%" }}>
        <Col style={{ width: "100%" }}>
          <Row justify={"space-between"}>
            <Row
              style={{
                fontSize: "18px",
                fontWeight: "500",
                color: "var( --lable-color)",
              }}
            >
              1-20 of 1000+ results for "project"
            </Row>
            <Row>
              <Select
                showSearch
                placeholder="Select filter"
                optionFilterProp="label"
                value={selectedFilter}
                onChange={(value) => {
                  setSelectedFilter(value);
                }}
                options={filterMenu}
              />
            </Row>
          </Row>
        </Col>
      </Row>

        <Row gutter={[16, 16]} className="product-main-box">
          {products.map((product) => (
            <ProductCard key={product.id} onClick={()=>{
              handleProductClick(product)
            }} product={product} />
          ))}
        </Row>
      <Row className="body-container" justify={"center"}>
        <Space>
          <Button
            onClick={() => {
              handleLoadMoreProduct();
            }}
          >
            See more
          </Button>
        </Space>
      </Row>

      <br></br>
      <Row className="body-container" justify={"center"}>
        <Space
          style={{
            fontSize: "25px",
            fontWeight: "600",
          }}
        >
          BLOG POSTS 📝
        </Space>
      </Row>
      <Row gutter={[16, 16]} className="body-container">
        {blogs.map((blog) => (
          <BlogPostCard blogs={blog} />
        ))}
      </Row>
      <Row className="body-container" justify={"center"}>
        <Space>
          <Button>See more</Button>
        </Space>
      </Row>
      <br></br>
      <br></br>
    
    </Layout>
  );
};

export default HomePage;
