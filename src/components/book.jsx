import { Link, Outlet } from "react-router-dom";

const Book = () => {
    const bookList = [
        { id: 100, title: "JS" },
        { id: 200, title: "Node JS" },
        { id: 300, title: "React JS" },
        { id: 400, title: "Sql" },
        { id: 500, title: "React Native" },
    ];

    const getBookLink = book => `/book/${book.id}/${book.title}`

    return (
        <>
            <h1> Book</h1>

            <ul>
                {bookList.map((book) => (
                    <li key={book.id}>
                        <Link to={getBookLink(book)}>{book.title}</Link>
                    </li>
                ))}


            </ul>
            
            <Outlet />

        </>
    );
}

export default Book;