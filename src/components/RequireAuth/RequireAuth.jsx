import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const {
        stateAuth: { isAuth },
    } = useAuth();

    return isAuth ? (
        children
    ) : (
        // <Navigate to="/auth" state={{ from: location }} replace />
        <Navigate to="/auth" state={{ path: location.pathname }} replace />
    );
};

export default RequireAuth;
