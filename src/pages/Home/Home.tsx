import { useContext } from 'react';
import Products from '../../components/Products/Products';
import { ProductContext } from '../../contexts/ProductsContext';

const Home = () => {
  const { visibleProducts } = useContext(ProductContext);

  return (
    <>
      <Products products={visibleProducts} />
    </>
  );
};

export default Home;
