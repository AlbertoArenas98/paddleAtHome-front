import "../groupsPage/groupsPage.scss"
import img from "../../assets/Logo con tipografía circular para servicios fotógrafo beis y negro.png"
import { useGetter } from "../../store";
import { useGroups } from "../../hooks";
import { useEffect } from "react";

export default function Groups() {

    const { user } = useGetter();

    const [groups, getAll] = useGroups();

    useEffect(() => {
        getAll();
    }, [])

    // const [groups, setGroups] = useState();

    // useEffect(() => {
    //     const getGroups = async() => {
    //         const groups = await axios.get('http://localhost:3000/group-class/get-all')
    //         setGroups(groups.data.data)
    //     }
    //     getGroups();
    // },[]);

    function paintNameGroups () {
        return groups.map(({group, city, type, time, level}) => {
            return (
                <div>
                    <h2>
                        {group}
                    </h2>
                    <p>City: {city}</p>
                    <p>Type: {type}</p>
                    <p>Time: {time}</p>
                    <p>Level: {level}</p>
                    <br />
                </div>
            )
        });
    }

    return (

        <div className="profilePage">
            <form className="authpage-container_form">
                <img src={img} alt="" />
                <h1>Hello {user.first_name}</h1>
                <div><p>These are our padel groups</p></div>
                <br />
                {paintNameGroups()}

                <br />
                <p>If your are interested in joining eny of them, please contact us!</p>
            </form>

        </div >
    );
};