import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import PrivateRoute from './components/privateRoute';
import AppContext from './context/appContext';
import LoginForm from './components/loginForm';
import Home from './components/home';
import Book from './components/book';
import BookInfo from './components/bookInfo';

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (username, password) => {
    if (username === "user1" && password === "123") {
      setUser({ username, password })
      return { message: "Success login ..." }
    }
    else {
      return { erroe: "Invalid username or password!" }
    }
  }

  const logout = () => {
    setUser(null);
    navigate("/login");
  }

  return (
    <AppContext.Provider value={{ user, login, logout }}>
      <div>
        <Routes>
          <Route path='/' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>} />
          <Route path="book/*" element={ <PrivateRoute><Book /></PrivateRoute>}>
            <Route path=":id/:title" elemnt={<PrivateRoute><BookInfo /></PrivateRoute>}></Route>
          </Route>

          <Route path="login" element={<LoginForm />} />
        </Routes>
      </div>
      </AppContext.Provider>
      )

}
      export default App;