import "../preferencesPage/preferencesPage.scss"
import img from "../../assets/Logo con tipografía circular para servicios fotógrafo beis y negro.png"


export default function Preferences() {

    return (

        <div className="profilePage">
            <form className="authpage-container_form">
                <img src={img} alt="" />

                <label htmlFor="">Name: Alberto</label>
                <label htmlFor="">City: </label>
                <label htmlFor="">Group type:</label>
                <label htmlFor="">Day time:</label>
                <label htmlFor="">Level: </label>

            </form>
        </div>
    );
};