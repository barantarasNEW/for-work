import { ChangeEvent } from 'react';
import './Header.scss';
import {
  Container,
  Navbar,
  Form,
  InputGroup,
} from 'react-bootstrap';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../helpers/getSearchWith';

const Header = () => {
  const location = useLocation().pathname;
  const isSearchAvailable = location.includes('/home');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams(
      getSearchWith(searchParams, { query: e.target.value || null }),
    );
  };

  return (
    <header className="header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            TUNEL
          </Navbar.Brand>
          {!isSearchAvailable && (
            <InputGroup className="header__search">
              <Form.Control
                placeholder="Szukaj produktów"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={query}
                onChange={onChangeHandle}
              />
            </InputGroup>
          )}
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
