import "./navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-PadelatHome-negro.jpg"


const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="menu">
        <p>Home</p>
        <p>Profile</p>
        <p><Link to="/register">Register</Link></p>
        <p><Link to = "./login">Login</Link></p>
      </div>
    </nav>
  );
};

export default Navbar;
