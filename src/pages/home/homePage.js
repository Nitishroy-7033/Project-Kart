import {
  Button,
  Col,
  Dropdown,
  Layout,
  message,
  Row,
  Select,
  Space,
  Spin,
} from "antd";
import "./style.css";
import "./../../App.css";
import { useEffect, useState } from "react";
import ProductCard from "../../components/productCard";
import FooterWidget from "../../components/footerWidget";
import ProductShowCaseTile from "../../components/productShowCaseTile";
import BlogPostCard from "../../components/blogPostCard";
import { useNavigate } from "react-router-dom";
import homeActions from "./redux/homeActions";
import { useDispatch, useSelector } from "react-redux";
import {
  productFetchFailure,
  productFetchStart,
  productFetchSuccess,
  trendingFetchStart,
  trendingFetchSuccess,
  trendingFetchFailure,
} from "./redux/homeSlice";
import ProductCartSkeleton from "../../skeleton/productCartSkeleton";
import ProductShowCaseTileSkeleton from "../../skeleton/productShowCaseTileSkeleton";
// import { FooterWidget } from "../../components/footerWidget";
const HomePage = () => {
  const [selectedFilter, setSelectedFilter] = useState("assignment");
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, productLoading, trendingProducts, trendingProductLoading } =
    useSelector((state) => state.home);
  useEffect(() => {
    fetchProductsAsync();
    fetchTrendingProductsAsync();
  }, []);

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

  const fetchProductsAsync = async () => {
    // Dispatch productFetchStart as a function
    dispatch(productFetchStart());
    console.log("loading", productLoading);

    try {
      var response = await homeActions.fetchProductsAsync();
      console.log("Home product response", response);

      if (response.success) {
        dispatch(productFetchSuccess(response.products));
      } else {
        dispatch(productFetchFailure(response.message));
        messageApi.open({
          type: "error",
          content: response.message,
          duration: 5,
        });
      }
    } catch (error) {
      dispatch(productFetchFailure(error.message));
      messageApi.open({
        type: "error",
        content: error.message,
        duration: 5,
      });
    }
  };
  const fetchTrendingProductsAsync = async () => {
    // Dispatch productFetchStart as a function
    dispatch(trendingFetchStart());
    console.log("loading", productLoading);

    try {
      var response = await homeActions.fetchTrendingProductsAsync();
      console.log("Home product response", response);

      if (response.success) {
        dispatch(trendingFetchSuccess(response.products));
      } else {
        dispatch(trendingFetchFailure(response.message));
        messageApi.open({
          type: "error",
          content: response.message,
          duration: 5,
        });
      }
    } catch (error) {
      dispatch(trendingFetchFailure(error.message));
      messageApi.open({
        type: "error",
        content: error.message,
        duration: 5,
      });
    }
  };

  const handlerContactusClick = () => {
    console.log("Home page product", products);
    products.products.map((e) => {
      console.log(e);
    });
  };

  const handleProductClick = (product) => {
    navigate(`/products/${product.id}/${product.title}`);
    // console.log(product.id)
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      {contextHolder}
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
          <Row
            justify="center"
            onClick={() => {
                handlerContactusClick();
                }}
                >
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
              {trendingProductLoading ? (
                <ProductShowCaseTileSkeleton isLoading={true} isPrimary={false} />
              ) : (
                trendingProducts.map((product, index) => (
                <ProductShowCaseTile
                  isPrimary={index % 2 === 0}
                  key={product.id}
                  image={product.coverImage}
                  buttonText={"Read More"}
                  description={product.description}
                  title={product.title}
                  tags={product.sellTag}
                />
                ))
              )}
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
                Total {products.totalProducts} Products We have !
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

      <Row gutter={[16, 16]} className="body-container">
        {productLoading ? (
          <>
            <ProductCartSkeleton isLoading={productLoading} />
            <ProductCartSkeleton isLoading={productLoading} />
            <ProductCartSkeleton isLoading={productLoading} />
            <ProductCartSkeleton isLoading={productLoading} />
            <ProductCartSkeleton isLoading={productLoading} />
            <ProductCartSkeleton isLoading={productLoading} />
          </>
        ) : products.products && products.products.length > 0 ? (
          products.products.map((product) => (
            <ProductCard
              key={product.id}
              onClick={() => {
                handleProductClick(product);
              }}
              product={product}
            />
          ))
        ) : (
          <Col span={24} style={{ textAlign: "center" }}>
            No products found
          </Col>
        )}
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

      {/* <br></br>
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
      </Row> */}
      <br></br>
      <br></br>
    </Layout>
  );
};

export default HomePage;
