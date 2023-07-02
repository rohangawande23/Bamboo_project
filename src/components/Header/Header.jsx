import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="main-header">
      <Link></Link>
      <div className="header-content">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">User</NavLink>
        <NavLink to="/">Login</NavLink>
      </div>
    </nav>
  );
};

export default Header;
