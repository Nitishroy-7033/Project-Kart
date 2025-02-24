import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div>
      <h3>Product Title</h3>
      <p>Product ID: {productId}</p>
    </div>
  );
};

export default ProductDetails;
