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
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ show, setShowNav }) => {
    const { pathname } = useLocation();

    return (
        <nav
            className={`video__sidebar ${show && "open"} ${
                pathname === "/watch" && "hide"
            }`}
        >
            <Link to="/" onClick={() => setShowNav((prevValue) => !prevValue)}>
                <MdHome size={23} />
                <span>Home</span>
            </Link>

            <Link to="/" onClick={() => setShowNav((prevValue) => !prevValue)}>
                <MdThumbUp size={23} />
                <span>Liked Videos</span>
            </Link>

            <Link to="/" onClick={() => setShowNav((prevValue) => !prevValue)}>
                <MdHistory size={23} />
                <span>History</span>
            </Link>

            <Link to="/" onClick={() => setShowNav((prevValue) => !prevValue)}>
                {" "}
                <MdLibraryBooks size={23} />
                <span>Library</span>
            </Link>

            <Link to="/" onClick={() => setShowNav((prevValue) => !prevValue)}>
                <AiOutlineClockCircle size={23} />
                <span>Watch Later</span>
            </Link>

            <hr />

            <Link
                to="/auth"
                onClick={() => setShowNav((prevValue) => !prevValue)}
            >
                <MdExitToApp size={23} />
                <span>Log Out</span>
            </Link>

            <hr />
        </nav>
    );
};

export default Sidebar;
