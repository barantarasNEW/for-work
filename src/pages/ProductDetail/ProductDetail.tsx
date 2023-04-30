import { useParams } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import { Product as ProductType } from '../../types/Product';
import { ProductContext } from '../../contexts/ProductsContext';

const ProductDetail = () => {
  const { getProduct } = useContext(ProductContext);
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = getProduct(+id);

      setProduct(foundProduct);
    }
  }, [id, getProduct]);

  if (!product) {
    return null;
  }

  return (
    <Product product={product} />
  );
};

export default ProductDetail;
