import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Book from './components/book';
import Articel from './components/articel';
import Home from './components/home';
import BookInfo from './components/bookInfo';
import NotFound from './components/notFound';

const App = () => {
  return (
    <div>
      <h1>APP..</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="book" element={<Book />}>
          <Route path=":id/:title" element={<BookInfo />} />
        </Route>
        <Route path="articel" element={<Articel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;