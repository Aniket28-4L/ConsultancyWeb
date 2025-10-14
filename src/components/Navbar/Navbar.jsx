import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">ConsultancyWeb</Link>
        <div className="nav-links">
          {/* <Link to="Home"/>Home</Link> */}
          <Link to="/study-abroad">Study Abroad</Link>
          <Link to="/work-abroad">Work Abroad</Link>
          <Link to="/process">Process</Link>
          <Link to="/documentation">Documentation</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;