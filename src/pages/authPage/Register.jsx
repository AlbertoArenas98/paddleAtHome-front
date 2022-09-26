import "./authpage.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useRegister } from "../../hooks";
import { useGetter } from "../../store";



function AuthPage() {
    const { setUser } = useGetter();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const signUp = useRegister({ onSuccess: () => navigate("/login") });

    const onSubmit = (data) => signUp(data);

    useEffect(() => {
        setUser();
    }, [setUser]);



    return (
        <div className="authpage-container">
            <form className="authpage-container_form" onSubmit={handleSubmit(onSubmit)}>
                <h1>Register</h1>
                <label htmlFor="">Email</label>
                <input placeholder="lucho@gmail.com"  {...register("email")} />

                <label htmlFor="">Password</label>
                <input placeholder="Password"  {...register("password")} />

                <label htmlFor="">FirstName</label>
                <input placeholder="FirstName"  {...register("first_name")} />

                <label htmlFor="">City</label>
                <input placeholder="Cities"  {...register("cities")} />

                
                <label htmlFor="">Group Type</label>
                <input placeholder="group_type"  {...register("group_type")} />

                <label htmlFor="">Day Time</label>
                <input placeholder="day_time"  {...register("day_time")} />

                <label htmlFor="">Level</label>
                <input placeholder="levels"  {...register("levels")} />
                

                <input type="submit" className="form_button" />
            </form>
        </div>
    )
}

export default AuthPage

