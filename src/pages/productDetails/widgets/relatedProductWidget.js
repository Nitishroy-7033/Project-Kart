import { Col, Row } from "antd";
import { useTheme } from "../../../context/theme/ThemeContext";
import IconButton from "../../../components/iconButton";
import { CgAdd } from "react-icons/cg";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import ProductCard from "../../../components/products/productCard";
const RelatedProductWidget = () => {
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
    }
   
  ];

  const { theme } = useTheme();
  return (
    <Row gutter={[20, 30]}>
      {products.map((product) => (
       <ProductCard product={product} />
      ))}
    </Row>
  );
};

export default RelatedProductWidget;
