import "./style.css";
import "../../App.css";
import ProductCard from "../../components/productCard";
import {
  Layout,
  Row,
  Col,
  Input,
  Button,
  Select,
  Checkbox,
  Pagination,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const { Option } = Select;

const AllProductsPage = () => {
  const dispatch = useDispatch();
  const { products, currentPage, totalPages, totalProducts } =
    useSelector((state) => state.home);

  const [filters, setFilters] = useState({
    search: "",
    category: "",
    priceRange: "",
    inStock: false,
  });

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  const handlePageChange = (page) => {
    // Dispatch action to fetch products for the selected page
    console.log("Fetch products for page:", page);
  };

  return (
    <Layout className="body-container">
      <Row className="layout-banner">PRODUCTS 🛒</Row>
      
      {/* Filter Section */}
      <Row className="filter-row" gutter={[16, 16]} align="middle" justify={"end"}>
        <Col span={6}>
          <Input
            size="large"
            placeholder="Search product"
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
        </Col>

        <Col span={4}>
          <Select
            size="large"
            placeholder="Category"
            style={{ width: "100%" }}
            value={filters.category}
            onChange={(value) => handleFilterChange("category", value)}
          >
            <Option value="electronics">Electronics</Option>
            <Option value="fashion">Fashion</Option>
            <Option value="home">Home</Option>
          </Select>
        </Col>

        <Col span={4}>
          <Select
            size="large"
            placeholder="Price Range"
            style={{ width: "100%" }}
            value={filters.priceRange}
            onChange={(value) => handleFilterChange("priceRange", value)}
          >
            <Option value="low">Low</Option>
            <Option value="medium">Medium</Option>
            <Option value="high">High</Option>
          </Select>
        </Col>

        <Col span={3}>
          <Checkbox
            checked={filters.inStock}
            onChange={(e) => handleFilterChange("inStock", e.target.checked)}
          >
            In Stock
          </Checkbox>
        </Col>
        <Col span={4}>
          <Button className="primary-button" onClick={() => console.log(filters)}>
            Apply Filters
          </Button>
        </Col>
      </Row>
      
      {/* Products List */}
      <Col className="product-list" span={24}>
        <Row gutter={[16, 16]}>
          {products.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Row>
        <Pagination
          style={{ marginTop: "20px", textAlign: "center" }}
          current={currentPage}
          total={totalProducts}
          pageSize={5}
          onChange={handlePageChange}
        />
      </Col>
    </Layout>
  );
};

export default AllProductsPage;