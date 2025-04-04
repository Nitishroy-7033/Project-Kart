import { Col, Layout, message, Row, Space } from "antd";
import "../../App.css";
import "./style.css";
import { useParams } from "react-router-dom";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import ProductDetailsWidget from "./widgets/productDetailsSide"
import ProductDetailsImageCrousel from "./widgets/productDetailsImageCrousel";
import { useEffect } from "react";
import productDetailsActions from "./redux/productDetailsActions";
import { useDispatch, useSelector } from "react-redux";
import { productDetailsFetchStart, productDetailsFetchSuccess } from "./redux/productDetailsSlice";
const ProductDetails = () => {
  const { productId, productTitle } = useParams();
  const product = {
    id: 5,
    name: "Product 5",
    price: 0,
    imageUrls: [
      "https://th.bing.com/th/id/OIP.qFLJlBnH2xkl508yedA9pQHaFS?w=1600&h=1141&rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.qFLJlBnH2xkl508yedA9pQHaFS?w=1600&h=1141&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.qFLJlBnH2xkl508yedA9pQHaFS?w=1600&h=1141&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.qFLJlBnH2xkl508yedA9pQHaFS?w=1600&h=1141&rs=1&pid=ImgDetMain",
      "https://th.bing.com/th/id/OIP.qFLJlBnH2xkl508yedA9pQHaFS?w=1600&h=1141&rs=1&pid=ImgDetMain",
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/f8db9894200401.5e78f0e37d1e4.png",
    ],
    isTranding: true,
    ratings: 4.5,
    reviews: 100,
    sortDescription: "This is a product",
    isLiked: false,
  };

  const dispatch = useDispatch();
  const {productDetails,productLoading} = useSelector((state) => state.productDetails);
  const [messageApi, contextHolder] = message.useMessage();
  
  useEffect(() => {
    getProductDetailsById();
  }, [productId]);
  console.table(productDetails);
  console.log("Product Details:", productDetails);
  const getProductDetailsById = async () => {
    dispatch(productDetailsFetchStart()); 

    try {
      const response = await productDetailsActions.getProductDetailsById(productId);
      console.log("Product Details Response:", response);

      if (response.success) {
        dispatch(productDetailsFetchSuccess(response.product.products[0])); // Update store
      } else {
        // dispatch(productFetchFailure(response.message));
        messageApi.open({
          type: "error",
          content: response.message,
          duration: 5,
        });
      }
    } catch (error) {
      // dispatch(productFetchFailure(error.message));
      messageApi.open({
        type: "error",
        content: error.message,
        duration: 5,
      });
    }
  };
  return (
    <Layout className="body-container">
      <br></br>
      <br></br>
      <br></br>
      <Row justify="space-between">
        <Col className="product-image-box" md={10} lg={9} xl={9} xxl={12}>
          <img className="product-image" src={productDetails.coverImage} alt={productDetails.name || "Product image"} />
          <ProductDetailsImageCrousel images={productDetails.images ?? []} />
        </Col>
       <ProductDetailsWidget/>
      </Row>
    </Layout>
  );
};

export default ProductDetails;
