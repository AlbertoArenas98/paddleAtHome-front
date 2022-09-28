import "../profilePage/profile.scss"
import img from "../../assets/Logo con tipografía circular para servicios fotógrafo beis y negro.png"
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useGetter } from "../../store";

export default function Profile() {

    const { user } = useGetter();

    return (

        <div className="profilePage">
            <form className="authpage-container_form">
                <img src={img} alt="" />
                <h1>{user.first_name}</h1>
                <label htmlFor="">Email: {user.mail}</label>
                <label htmlFor="">Group Class: { }</label>
                <button><Link to="/preferences">My Preferences</Link></button>
                <button><Link to="/groups">Search Groups</Link> </button>
            </form>
            <section>
                <Outlet />
            </section>
        </div>
    );
};