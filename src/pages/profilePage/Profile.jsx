import "../profilePage/profile.scss"
import img from "../../assets/Logo con tipografía circular para servicios fotógrafo beis y negro.png"
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useGetter } from "../../store";

export default function Profile() {

    const { user } = useGetter();

    return (

        <div className="profilePage">
            <form className="profilePage_form">
                <img src={img} alt="" />
                <h1>Hello {user.first_name}</h1>
                <p>Email: {user.mail}</p>
                <br />
                <div className="buttons">
                <button><Link to="/preferences">My Preferences</Link></button>
                <br />
                <br />
                <button><Link to="/groups">Search Groups</Link> </button>
                <br />
                </div>
            </form>
            <section>
                <Outlet />
            </section>
        </div>
    );
};