import "./navbar.scss";
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
        <p>Login</p>
      </div>
    </nav>
  );
};

export default Navbar;
