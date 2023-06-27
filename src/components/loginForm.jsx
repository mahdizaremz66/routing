//import { useState } from "react";
import { useContext } from "react";
import AppContext from "../context/appContext";
import { useNavigate,useLocation } from "react-router-dom";

const LoginForm = () => {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    // const handleUsernameChange= (e) => setUsername (e.target.value);
    // const handlePasswordChange= (e) => setPassword (e.target.value);

    const { login } = useContext(AppContext);
    const navigate =  useNavigate();
    const location = useLocation();

    const from = location.state?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget)
        const username = formData.get("username");
        const password = formData.get("password");

        const result = login(username, password);
        if (result.error) return alert(result.error);

        navigate(from, { replace: true });
    }


    return (
        <>
            <h1>Login </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    UserName:
                    <input name="username" type="text" maxLength={10} />
                </label>
                <br />
                <label>
                    PassWord:
                    <input name="password" type="password" maxLength={10} />
                </label>
                <br />
                <button type="Submit">Login</button>
            </form>

        </>
    );
}
export default LoginForm;