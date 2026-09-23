import { Link } from 'react-router-dom';
import { CardWrapper, Container, ProductName } from './ProductList.styled';

export const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map(product => {
        return (
          <CardWrapper key={product.id}>
            <Link to={`${product.id}`}>
              <img
                src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                alt="placeholder"
                width={200}
              />
              <ProductName>{product.name}</ProductName>
            </Link>
          </CardWrapper>
        );
      })}
    </Container>
  );
};
