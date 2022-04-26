import React from "react";
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdHome,
    MdLibraryBooks,
} from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import "./Sidebar.scss";

const Sidebar = ({ show, setShowNav }) => {
    return (
        <nav
            className={`video__sidebar ${show && "open"}`}
            onClick={() => setShowNav((prevValue) => !prevValue)}
        >
            <li>
                <MdHome size={23} />
                <span>Home</span>
            </li>

            <li>
                <MdSubscriptions size={23} />
                <span>Subscriptions</span>
            </li>

            <li>
                <MdThumbUp size={23} />
                <span>Liked Videos</span>
            </li>

            <li>
                <MdHistory size={23} />
                <span>History</span>
            </li>

            <li>
                <MdLibraryBooks size={23} />
                <span>Library</span>
            </li>

            <li>
                <AiOutlineClockCircle size={23} />
                <span>Watch Later</span>
            </li>

            <hr />
            <li>
                <MdExitToApp size={23} />
                <span>Log Out</span>
            </li>
            <hr />
        </nav>
    );
};

export default Sidebar;
