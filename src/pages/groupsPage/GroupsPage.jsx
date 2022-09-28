import "../groupsPage/groupsPage.scss"
import img from "../../assets/Logo con tipografía circular para servicios fotógrafo beis y negro.png"
import { useGetter } from "../../store";
import { useGroups } from "../../hooks";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function Groups() {

    const { user } = useGetter();

    const [groups, setGroups] = useState();

    useEffect(() => {
        const getGroups = async() => {
            const groups = await axios.get('http://localhost:3000/group-class/get-all')
            setGroups(groups.data.data)
        }
        getGroups();
    },[]);

    console.log(groups)

    return (

        <div className="profilePage">
            <form className="authpage-container_form">
                <img src={img} alt="" />
                <h1>Hello {user.first_name}</h1>
                <div><p>These are our padel groups</p></div>
                <br />
                <label htmlFor="">City:</label>
                <label htmlFor="">Group type: </label>
                <label htmlFor="">Day time: </label>
                <label htmlFor="">Level: </label>

            </form>
        </div>
    );
};