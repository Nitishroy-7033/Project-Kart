import { Col, Row, Space } from "antd";
import "./style.css";
const BlogPostCard = ({ onClick, blogs }) => {
  return (
    <Col
      className="blog-main-box"
      onClick={onClick}
      key={blogs.id}
      md={9}
      lg={8}
      xl={9}
      xxl={8}
    >
      <img
        src={blogs.coverImage || "/placeholder.jpg"}
        alt={blogs.name || "Product Image"}
        style={{
          width: "100%",
          height: "340px",
          objectFit: "cover",
        }}
      />
      <Row>
       {blogs.tags.map((e)=>(
         <span style={{
            margin:"5px"
         }} className="categroy-box">{e}</span>
       ))}
      </Row>
      <Space
        style={{
          fontSize: "18px",
        }}
      >
        {blogs.title}
      </Space>
    </Col>
  );
};

export default BlogPostCard;
