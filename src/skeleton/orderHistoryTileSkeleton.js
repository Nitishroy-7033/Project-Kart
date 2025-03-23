import { Col, Skeleton } from "antd";
import "./style.css"
const OrderHistoryTileSkeleton = (isLoading) => {
  return (
    <Col md={9} lg={8} xl={8} xxl={8}>
        <Skeleton.Image 
        active={isLoading}
        className="sk-product-image"
          />
        <br></br>
        <Skeleton active={isLoading} />
    </Col>
  );
};


export default ProductCartSkeleton;