
import { Link } from "react-router-dom";
const Home =() =>{
    return(
        <>
        <h1> Select Content</h1>
        <ul>
            <li><Link to="book">Book</Link></li>
            <li><Link to="articel">Articel</Link></li>
        </ul>
        </>
    );
}

export default Home;