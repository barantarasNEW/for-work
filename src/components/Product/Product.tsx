import {
  Container,
  Card,
} from 'react-bootstrap';
import './Product.scss';
import { Product as ProductType } from '../../types/Product';
import Back from '../Back/Back';

type Props = {
  product: ProductType;
};

const Product: React.FC<Props> = ({ product: { name, img, recipe } }) => {
  return (
    <section className="product">
      <Container>
        <Back />

        <Card
          className="product__card"
          style={{ width: '18rem' }}
        >
          <Card.Img
            variant="top"
            src={img}
            alt="product"
          />
          <Card.Body>
            <Card.Title className="product__name">{name}</Card.Title>
            <div className="product__recipe">
              {recipe.map(value => (
                <Card.Text key={value} className="product__recipe__value">
                  {value}
                </Card.Text>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Product;
