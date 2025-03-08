import { Button, Col, Image, Row, Space } from "antd";
import "./style.css";
import "../App.css";
const ProductShowCaseTile = ({
  isPrimary=true,
  image,
  title,
  tags,
  description,
  buttonText,
}) => {
  return isPrimary ? (
    <Row
      className="product-tile"
      style={{
        margin: "20px 200px",
        height: "500px",
      }}
    >
      <Row
        align={"middle"}
        style={{
          width: "50%",
          padding: "20px 40px",
          // backgroundColor:"red"
        }}
      >
        <Col>
          <Row>
            <div className="tranding-box">{tags}</div>
          </Row>
          <Space
            style={{
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            {title}
          </Space>
          <Space
            style={{
              fontSize: "15px",
            }}
          >
            {description}
          </Space>
          <br></br>
          <br></br>
          <Row>
            <Button
              style={{
                padding: "20px 50px",
                color: "var(--background-color)",
                backgroundColor: "var(--primary-color)",
              }}
              classNames="primary-button"
            >
              {buttonText}
            </Button>
          </Row>
        </Col>
      </Row>
      <Row
        justify={"center"}
        align={"middle"}
        style={{
          width: "50%",
        }}
      >
        <Image
          preview={false}
          height="450px"
          width="90%"
          style={{
            borderRadius: "10px",
            objectFit: "cover",
          }}
          alt="image of project"
          src={image}
        />
      </Row>
    </Row>
  ) : (
    <Row
      className="product-tile"
      style={{
        margin: "20px 200px",
        height: "500px",
      }}
    >
      <Row
        justify={"center"}
        align={"middle"}
        style={{
          width: "50%",
        }}
      >
        <Image
          preview={false}
          height="450px"
          width="90%"
          style={{
            borderRadius: "10px",
            objectFit: "cover",
          }}
          alt="image of project"
          src={image}
        />
      </Row>
      <Row
        align={"middle"}
        style={{
          width: "50%",
          padding: "20px 40px",
          // backgroundColor:"red"
        }}
      >
        <Col>
          <Row>
            <div className="tranding-box">{tags}</div>
          </Row>
          <Space
            style={{
              fontSize: "30px",
              fontWeight: "600",
            }}
          >
            {title}
          </Space>
          <Space
            style={{
              fontSize: "15px",
            }}
          >
            {description}
          </Space>
          <br></br>
          <br></br>
          <Row>
            <Button
              style={{
                padding: "20px 50px",
                color: "var(--background-color)",
                backgroundColor: "var(--primary-color)",
              }}
              classNames="primary-button"
            >
              {buttonText}
            </Button>
          </Row>
        </Col>
      </Row>
    </Row>
  );
};

export default ProductShowCaseTile;
