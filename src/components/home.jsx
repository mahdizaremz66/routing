
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/appContext";

const Home = () => {
    const { user, logout } = useContext(AppContext);

    return (
        <>
            {user && <p>{user.username} | <button onClick={logout}>Logout</button> </p>}

            <bt />
            <h1> Select Content</h1>
            <ul>
                <li><Link to="book">Book</Link></li>
                <li><Link to="articel">Articel</Link></li>
            </ul>
        </>
    );
}

export default Home;