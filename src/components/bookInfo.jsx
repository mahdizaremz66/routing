import { Link, useParams } from "react-router-dom";

const BookInfo = () => {
    const params =useParams();
    return (
        <>
            <h1>BookInfo</h1>
            <hr />
            <p> ID : {params.id}</p>
            <p> Title : {params.title}</p>

            <Link to="/book">Back</Link>
        </>

    );
}

export default BookInfo;