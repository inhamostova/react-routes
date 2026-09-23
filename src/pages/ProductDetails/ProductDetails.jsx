import { useParams, Link, useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';
  return (
    <div>
      <Link to={backLinkHref}>Back</Link>
      <div>Now showing product with id - {productId}</div>
    </div>
  );
};

export default ProductDetails;
