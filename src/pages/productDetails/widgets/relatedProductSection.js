import { Col, Row, Space } from "antd";

const RelatedProductSection = () => {
  var relatedProducts = [
    {
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/adminTemplate/404c6038b0f745f3aab928bb7ab52173.jpg",
      title: "Car parking system in flutter with getx hindi",
    },
    {
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/adminTemplate/404c6038b0f745f3aab928bb7ab52173.jpg",
      title: "Car parking system in flutter with getx hindi",
    },
    {
      image:
        "https://d2v5dzhdg4zhx3.cloudfront.net/adminTemplate/404c6038b0f745f3aab928bb7ab52173.jpg",
      title: "Car parking system in flutter with getx hindi",
    },
  ];

  return (
    <Col>
      <Row>
        <Space
          style={{
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          Related Product
        </Space>
      </Row>
      <br></br>

      <Row justify={"space-between"} style={{}}>
        {relatedProducts.map((e) => (
          <div>
            <img className="related-product-box" src={e.image} />
            <div
              style={{
                width: "200px",
              }}
            >
              {e.title}
            </div>
          </div>
        ))}
      </Row>
    </Col>
  );
};

export default RelatedProductSection;
