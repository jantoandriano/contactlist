// FloatingButton.js
import './float-button.css';
import { Link } from 'react-router-dom';


const FloatButton = () => {
  return (
    <div className="floating-button">
      <Link
        to='/add'
      >
        Add
      </Link>
    </div>
  );
};

export default FloatButton;
