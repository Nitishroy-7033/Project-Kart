import { Button, Col, Image, Layout, Row, Skeleton, Space } from "antd";
import "./style.css";
const ProductShowCaseTileSkeleton = (isLoading, isPrimary) => {
  return (
    <Layout className="body-container">
      {isPrimary ? (
        <Row
          className="product-tile"
          style={{
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
                <Skeleton.Node active={isLoading} />
              </Row>
              <Skeleton.Node
                  style={{
                    width: "200px",
                  }}
                  className="sk-text"
                  active={isLoading}
                />
              <Skeleton.Node
                  style={{
                    width: "300px",
                  }}
                  className="sk-text"
                  active={isLoading}
                />
              <br></br>
              <br></br>
              <Row>
              <Skeleton.Button active={isLoading} />
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
            <Skeleton.Image active={isLoading} className="sk-trending-image" />
          </Row>
        </Row>
      ) : (
        <Row
          className="product-tile"
          style={{
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
            <Skeleton.Image active={isLoading} className="sk-trending-image" />
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
                <Skeleton.Node
                  style={{
                    width: "300px",
                  }}
                  className="sk-text"
                  active={isLoading}
                />
              </Row>
              <br></br>
              <Skeleton.Node
                style={{
                  width: "500px",
                }}
                className="sk-text"
                active={isLoading}
              />
              <br></br>
              <br></br>
              <Row>
                <Skeleton.Button active={isLoading} />
              </Row>
            </Col>
          </Row>
        </Row>
      )}
    </Layout>
  );
};

export default ProductShowCaseTileSkeleton;
