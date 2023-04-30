const API_URL = './products.json';

export const getProducts = () => {
  return fetch(API_URL)
    .then(res => res.json());
};
