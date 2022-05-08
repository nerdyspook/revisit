import React, { useState } from "react";
import {
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdHome,
    MdLibraryBooks,
} from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import "./Sidebar.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ show, setShowNav }) => {
    const { pathname } = useLocation();

    const navigate = useLocation();
    const {
        stateAuth: { isAuth },
        dispatchAuth,
    } = useAuth();

    const handleLogout = () => {
        dispatchAuth({ type: "LOGOUT" });
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        navigate("/auth");
    };

    return (
        <nav
            className={`video__sidebar ${show && "open"} ${
                pathname === "/watch" && "hide"
            }`}
        >
            <NavLink
                to="/"
                onClick={() => setShowNav((prevValue) => !prevValue)}
            >
                <MdHome size={23} />
                <span>Home</span>
            </NavLink>

            <NavLink
                to="/liked"
                onClick={() => setShowNav((prevValue) => !prevValue)}
            >
                <MdThumbUp size={23} />
                <span>Liked Videos</span>
            </NavLink>

            <NavLink
                to="/history"
                onClick={() => setShowNav((prevValue) => !prevValue)}
            >
                <MdHistory size={23} />
                <span>History</span>
            </NavLink>

            <NavLink
                to="/library"
                onClick={() => setShowNav((prevValue) => !prevValue)}
            >
                {" "}
                <MdLibraryBooks size={23} />
                <span>Library</span>
            </NavLink>

            <NavLink
                to="/watch-later"
                onClick={() => setShowNav((prevValue) => !prevValue)}
            >
                <AiOutlineClockCircle size={23} />
                <span>Watch Later</span>
            </NavLink>

            {isAuth && (
                <>
                    <hr />
                    <div className="logout" onClick={handleLogout}>
                        <MdExitToApp size={23} />
                        <span>Log Out</span>
                    </div>

                    <hr />
                </>
            )}
        </nav>
    );
};

export default Sidebar;
