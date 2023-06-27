import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/appContext";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AppContext);
    const location = useLocation();

    return user ? children : <Navigate to="/login" state={{ form: location }} replace />
}

export default PrivateRoute;