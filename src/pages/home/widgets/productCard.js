const ProductCard = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
}