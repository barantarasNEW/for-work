import './Back.scss';
import { Link } from 'react-router-dom';

const Back = () => {
  return (
    <Link to="/" className="btn btn-danger back">Back</Link>
  );
};

export default Back;
