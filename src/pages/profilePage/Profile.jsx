import "../profilePage/profile.scss" 
import img from "../../assets/Logo con tipografía circular para servicios fotógrafo beis y negro.png"
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Profile() {

    return (

        <div className="profilePage">
        <form className="authpage-container_form">
            <img src={img} alt="" />
            <h1>Username</h1>
            <label htmlFor="">Name: Alberto</label>
            <label htmlFor="">Email: albertoarennass@gmail.com</label>
            <label htmlFor="">Group Class: Majadahonda01</label>
            <button><Link to="/preferences">My Preferences</Link></button>
            <button> Search Group</button>
        </form>
        <section>
            <Outlet />
        </section>
    </div>
    );
};