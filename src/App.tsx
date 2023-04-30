import {
  Suspense,
  lazy,
  useDeferredValue,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import { getProducts } from './api/api';

import { Product as ProductType } from './types/Product';
import Header from './components/Header/Header';
import { ProductContext } from './contexts/ProductsContext';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home/Home'));
const ProductDetail = lazy(() => import('./pages/ProductDetail/ProductDetail'));

const App: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const deferredName = useDeferredValue(query);
  const visibleProducts = useMemo(() => {
    if (!deferredName) {
      return products;
    }

    const reg = new RegExp(`${deferredName}.+$`, 'i');

    return products.filter(product => {
      return product.name.search(reg) !== -1;
    });
  }, [deferredName, products]);

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res));
  }, []);

  const getProduct = (id: number) => {
    return products.find(currProduct => currProduct.id === id) || null;
  };

  return (
    <>
      <Header />
      <ProductContext.Provider value={{ visibleProducts, getProduct }}>
        <Suspense fallback={<Loader />}>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home">
                <Route index element={<Navigate to="/" replace />} />
                <Route path=":id" element={<ProductDetail />} />
              </Route>
            </Routes>
          </main>
        </Suspense>
      </ProductContext.Provider>
    </>
  );
};

export default App;
