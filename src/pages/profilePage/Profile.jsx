import "../profilePage/profile.scss" 
import img from "../../assets/Logo con tipografía circular para servicios fotógrafo beis y negro.png"


export default function Profile() {

    return (

        <div className="profilePage">
        <form className="authpage-container_form">
            <img src={img} alt="" />
            <h1>Username</h1>
            <label htmlFor="">Name: Alberto</label>
            <label htmlFor="">Email: albertoarennass@gmail.com</label>
            <label htmlFor="">Group Class: Majadahonda01</label>
            <button> My Preferences</button>
            <button> Search Group</button>


        </form>
    </div>
    );
};