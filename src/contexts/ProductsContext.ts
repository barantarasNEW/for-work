import { createContext } from 'react';
import { Product } from '../types/Product';

type Context = {
  visibleProducts: Product[];
  getProduct: (id: number) => Product | null;
};

export const ProductContext = createContext<Context>({
  visibleProducts: [],
  getProduct: () => null,
});
