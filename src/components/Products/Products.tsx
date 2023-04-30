import { Link } from 'react-router-dom';
import {
  Container,
  Card,
} from 'react-bootstrap';
import './Products.scss';
import { Product as ProductType } from '../../types/Product';

type Props = {
  products: ProductType[];
};

const Products: React.FC<Props> = ({ products }) => {
  return (
    <section className="products">
      <Container>
        <div className="products__grid">
          {products.map(({ name, img, id }) => (
            <Card
              key={name}
              className="products__item"
              style={{ width: '18rem' }}
            >
              <Card.Img
                className="products__img"
                variant="top"
                src={img}
                alt="product"
              />
              <Card.Body className="products__info">
                <Card.Title className="products__name">{name}</Card.Title>
                <Link className="btn btn-dark products__btn" to={`home/${id}`}>
                  Oglądać
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
