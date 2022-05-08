import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers/AuthReducer";

const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
    const encodedToken = localStorage.getItem("token");

    const [stateAuth, dispatchAuth] = useReducer(authReducer, {
        userDetails: [],
        token: encodedToken ?? null,
        isAuth: encodedToken ? true : false,
    });

    return (
        <AuthContext.Provider value={{ stateAuth, dispatchAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthContextProvider, useAuth };
