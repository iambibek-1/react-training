import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to ="/blog">Blog</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/dashboard">Dashboard</Link>
  </nav>
);

export default Navbar;
