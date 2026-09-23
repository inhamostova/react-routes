import { ProductList } from 'components/ProductList/ProductList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { getProducts } from 'fakeApi';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = products.filter(({ name }) =>
    name.toLowerCase().includes(productName.toLowerCase())
  );

  const setNewQuery = name => {
    const newParams = name !== '' ? { name } : {};
    setSearchParams(newParams);
  };

  return (
    <>
      <SearchBox value={productName} onChange={setNewQuery} />
      <ProductList products={visibleProducts} />
    </>
  );
};

export default Products;
