import "../preferencesPage/preferencesPage.scss"
import img from "../../assets/Logo con tipografía circular para servicios fotógrafo beis y negro.png"
import { useGetter } from "../../store";



export default function Preferences() {

    const { user } = useGetter();




    return (

        <div className="profilePage">
            <form className="authpage-container_form">
                <img src={img} alt="" />
                <h1>Hello {user.first_name}</h1>
                <div><p>These are your preferences</p></div>
                <br />
                <label htmlFor="">City: {user.city}</label>
                <label htmlFor="">Group type: {user.type}</label>
                <label htmlFor="">Day time: {user.time}</label>
                <label htmlFor="">Level: {user.level}</label>

            </form>
        </div>
    );
};